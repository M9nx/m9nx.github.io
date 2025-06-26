import {
  PersonProfileService,
  Profile,
  UpdatePersonProfileRequest,
  UpdatePersonProfileResponse,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/person_profile_service";
import { Update } from "/src/lib/workflow";
import { Sentry } from "/src/types/sentry";
import { User } from "/src/util/user";

/**
 * NOTE(cvu): Playing around with a DoneState. This is to tell the main workflow the state of the sub-workflow
 * in the continued attempt to separate sub-workflows from knowing anything about the main workflows that
 * consume it.
 *
 * DONE and ERROR are terminate states for the sub-workflow.
 */
export enum DoneState {
  NOT_DONE,
  DONE,
  ERROR,
}

export type TerminalDoneState = DoneState.DONE | DoneState.ERROR;

export enum Field {
  FirstName = "firstName",
  LastName = "lastName",
}

export enum VerifyNameError {
  VERIFY_NAME_ERROR_EMPTY,
}

export interface ValidationRecord {
  readonly errors: {
    readonly [Field.FirstName]: VerifyNameError[];
    readonly [Field.LastName]: VerifyNameError[];
  };
  readonly valid: boolean;
}

export interface State {
  readonly done: DoneState;
  readonly [Field.FirstName]: string;
  readonly [Field.LastName]: string;
  readonly loading: boolean;
  readonly validation: ValidationRecord;
}

export const INITIAL_STATE: State = {
  done: DoneState.NOT_DONE,
  [Field.FirstName]: "",
  [Field.LastName]: "",
  loading: false,
  validation: {
    errors: {
      firstName: [],
      lastName: [],
    },
    valid: true,
  },
};

export const createState = (overrides: Partial<State> = {}): State => ({
  ...INITIAL_STATE,
  ...overrides,
});

export interface Context {
  readonly personProfileService: PersonProfileService;
  readonly sentry: Sentry;
  readonly uuid: () => string;
}

/**
 * The purpose of this is to clear the error from currently edited fields.
 * This is to prevent live validation because the experience was a bit strange.
 */
export const clearFieldError = (field: Field, state: State): ValidationRecord => {
  const { validation } = state;

  return {
    ...validation,
    errors: {
      ...validation.errors,
      [field]: [],
    },
  };
};

export const createValidation = (state: State): ValidationRecord => {
  const firstName = state[Field.FirstName];
  const lastName = state[Field.LastName];

  const firstNameErrors = [];
  const lastNameErrors = [];
  if (firstName === "") {
    firstNameErrors.push(VerifyNameError.VERIFY_NAME_ERROR_EMPTY);
  }
  if (lastName === "") {
    lastNameErrors.push(VerifyNameError.VERIFY_NAME_ERROR_EMPTY);
  }

  const valid = firstNameErrors.length === 0 && lastNameErrors.length === 0;
  return {
    errors: {
      [Field.FirstName]: firstNameErrors,
      [Field.LastName]: lastNameErrors,
    },
    valid,
  };
};

export enum ActionType {
  Done = "VERIFY_NAME_DONE",
  Initialize = "VERIFY_NAME_INITIALIZE",
  UpdatePersonProfileReceived = "VERIFY_NAME_UPDATE_PERSON_PROFILE_RECEIVED",
  UpdatePersonProfileRejected = "VERIFY_NAME_UPDATE_PERSON_PROFILE_REJECTED",
  UserChangeInputFieldValue = "VERIFY_NAME_USER_CHANGE_INPUT_FIELD_VALUE",
  UserClickNext = "VERIFY_NAME_USER_CLICK_NEXT",
}

interface DoneAction {
  readonly type: ActionType.Done;
  // We do not want any non-terminal state to be set for done by done action
  readonly doneState: TerminalDoneState;
}

interface InitializeAction {
  readonly type: ActionType.Initialize;
  readonly user: User;
}

interface UpdatePersonProfileReceivedAction {
  readonly type: ActionType.UpdatePersonProfileReceived;
  readonly response: UpdatePersonProfileResponse;
}

interface UpdatePersonProfileRejectedAction {
  readonly type: ActionType.UpdatePersonProfileRejected;
  readonly error: unknown;
}

interface UserChangeInputFieldValueAction {
  readonly type: ActionType.UserChangeInputFieldValue;
  readonly field: Field;
  readonly value: string;
}

interface UserClickNextAction {
  readonly type: ActionType.UserClickNext;
}

export type Action =
  | DoneAction
  | InitializeAction
  | UpdatePersonProfileReceivedAction
  | UpdatePersonProfileRejectedAction
  | UserChangeInputFieldValueAction
  | UserClickNextAction;

/**
 * IMPORTANT(cvu): The done action needs to be called explicitly instead of setting state.
 * If Done is set in the state, instead of calling the action, the main workflow will not handle it.
 *
 * Observer watching the done state of these sub-workflow would be better. Noting to myself(cvu) as a
 * possible workflow improvement.
 */
export const doneAction = (doneState: TerminalDoneState): DoneAction => ({
  type: ActionType.Done,
  doneState,
});

export const initializeAction = (user: User): InitializeAction => ({
  type: ActionType.Initialize,
  user,
});

export const updatePersonProfileReceivedAction = (
  response: UpdatePersonProfileResponse
): UpdatePersonProfileReceivedAction => ({
  type: ActionType.UpdatePersonProfileReceived,
  response,
});

export const updatePersonProfileRejectedAction = (
  error: unknown
): UpdatePersonProfileRejectedAction => ({
  type: ActionType.UpdatePersonProfileRejected,
  error,
});

export const userChangeInputFieldValue = (
  field: Field,
  value: string
): UserChangeInputFieldValueAction => ({
  type: ActionType.UserChangeInputFieldValue,
  field,
  value,
});

export const userClickNextAction = (): UserClickNextAction => ({
  type: ActionType.UserClickNext,
});

function handleDone(state: State, { doneState }: DoneAction): Update<State, Action> {
  return [{ ...state, done: doneState }, null];
}

function handleInitialize(context: Context, { user }: InitializeAction): Update<State, Action> {
  const { first = "", last = "" } = user.name;
  return [{ ...INITIAL_STATE, [Field.FirstName]: first, [Field.LastName]: last }, null];
}

function handleUpdatePersonProfileReceived(
  context: Context,
  state: State,
  { response }: UpdatePersonProfileReceivedAction
): Update<State, Action> {
  const profile = response.profile;
  if (profile == null) {
    context.sentry.captureException("Card issuing - Person profile missing from update response");
    return [{ ...state, loading: false }, () => doneAction(DoneState.ERROR)];
  }

  if (profile.name == null) {
    context.sentry.captureException("Card issuing - Person profile missing name");
    return [{ ...state, loading: false }, () => doneAction(DoneState.ERROR)];
  }

  const { firstName, lastName } = profile.name;
  return [
    { ...state, [Field.FirstName]: firstName, [Field.LastName]: lastName, loading: false },
    () => doneAction(DoneState.DONE),
  ];
}

function handleUpdatePersonProfileRejected(
  context: Context,
  state: State,
  { error }: UpdatePersonProfileRejectedAction
): Update<State, Action> {
  context.sentry.captureException(error);
  return [{ ...state, loading: false }, () => doneAction(DoneState.ERROR)];
}

function handleUserChangeInputFieldValue(
  state: State,
  action: UserChangeInputFieldValueAction
): Update<State, Action> {
  const { field, value } = action;
  const nextState = { ...state, [field]: value };
  // revalidate to remove any error highlighting
  const validation = clearFieldError(field, state);
  return [{ ...nextState, validation }, null];
}

function handleUserClickNext(context: Context, state: State): Update<State, Action> {
  const validation = createValidation(state);
  const work = () => {
    if (!validation.valid) {
      return null;
    }

    const { firstName, lastName } = state;
    return context.personProfileService
      .updatePersonProfile(
        UpdatePersonProfileRequest.create({
          idempotenceKey: context.uuid(),
          profile: Profile.create({
            name: Profile.Name.create({
              firstName,
              lastName,
            }),
          }),
        })
      )
      .then(updatePersonProfileReceivedAction, updatePersonProfileRejectedAction);
  };

  // Do not trigger loading state if validation failure.
  return [{ ...state, loading: validation.valid, validation }, work];
}

export const update =
  (context: Context) =>
  (state: State, action: Action): Update<State, Action> => {
    switch (action.type) {
      case ActionType.Done:
        return handleDone(state, action);
      case ActionType.Initialize:
        return handleInitialize(context, action);
      case ActionType.UpdatePersonProfileReceived:
        return handleUpdatePersonProfileReceived(context, state, action);
      case ActionType.UpdatePersonProfileRejected:
        return handleUpdatePersonProfileRejected(context, state, action);
      case ActionType.UserChangeInputFieldValue:
        return handleUserChangeInputFieldValue(state, action);
      case ActionType.UserClickNext:
        return handleUserClickNext(context, state);
    }
  };
