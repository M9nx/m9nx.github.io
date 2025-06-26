import workflow, { Update } from "/src/lib/workflow";
import { SetPinRequest, SetPinResponse } from "/src/protos/squareup/bbdebit/cardmanagement";
import { Sentry } from "/src/types/sentry";

/**
 * Set pin workflow to set/reset pin.
 */

const PIN_LENGTH = 4;

export enum Screen {
  SetPin = "SCREEN_SET_PIN",
  ConfirmPin = "SCREEN_CONFIRM_PIN",
}

export enum Error {
  WeakPin = "ERROR_WEAK_PIN",
  InvalidPinMatch = "ERROR_INVALID_PIN_MATCH",
  GenericError = "ERROR_GENERIC",
}

export enum ValueError {
  InvalidLength = "VALUE_ERROR_INVALID_LENGTH",
}

export interface Context {
  readonly sentry: Sentry;
  readonly setPin: (request: SetPinRequest) => Promise<SetPinResponse>;
  readonly uuid: () => string;
}

export interface State {
  readonly cardToken: string;
  readonly confirmPin: string;
  readonly confirmPinError: ValueError[];
  readonly error: Error[];
  readonly loading: boolean;
  readonly pin: string;
  readonly pinError: ValueError[];
}

export const INITIAL_STATE: State = {
  cardToken: "",
  confirmPin: "",
  confirmPinError: [],
  error: [],
  loading: false,
  pin: "",
  pinError: [],
};

export const createState = (overrides: Partial<State> = {}): State => ({
  ...INITIAL_STATE,
  ...overrides,
});

export enum ActionType {
  Done = "SET_PIN_DONE",
  Initialize = "SET_PIN_INITIALIZE",
  SetPin = "SET_PIN_SET_PIN",
  SetPinReceived = "SET_PIN_RECEIVED",
  SetPinRejected = "SET_PIN_REJECTED",
  UserChangeConfirmPin = "SET_PIN_USER_CHANGE_CONFIRM_PIN",
  UserChangePin = "SET_PIN_USER_CHANGE_PIN",
}

interface DoneAction {
  readonly type: ActionType.Done;
}

interface InitializeAction {
  readonly type: ActionType.Initialize;
  readonly cardToken: string;
}

interface SetPinAction {
  readonly type: ActionType.SetPin;
}

interface SetPinReceivedAction {
  readonly type: ActionType.SetPinReceived;
  readonly response: SetPinResponse;
}

interface SetPinRejectedAction {
  readonly type: ActionType.SetPinRejected;
  readonly error: unknown;
}

interface UserChangeConfirmPinAction {
  readonly type: ActionType.UserChangeConfirmPin;
  readonly confirmPin: string;
}

interface UserChangePinAction {
  readonly type: ActionType.UserChangePin;
  readonly pin: string;
}

export type Action =
  | DoneAction
  | InitializeAction
  | SetPinAction
  | SetPinReceivedAction
  | SetPinRejectedAction
  | UserChangeConfirmPinAction
  | UserChangePinAction;

export const doneAction = (): DoneAction => ({
  type: ActionType.Done,
});

export const initializeAction = (cardToken: string): InitializeAction => ({
  type: ActionType.Initialize,
  cardToken,
});

export const setPinAction = (): SetPinAction => ({
  type: ActionType.SetPin,
});

export const setPinReceivedAction = (response: SetPinResponse): SetPinReceivedAction => ({
  type: ActionType.SetPinReceived,
  response,
});

export const setPinRejectedAction = (error: unknown): SetPinRejectedAction => ({
  type: ActionType.SetPinRejected,
  error,
});

export const userChangeConfirmPinAction = (confirmPin: string): UserChangeConfirmPinAction => ({
  type: ActionType.UserChangeConfirmPin,
  confirmPin,
});

export const userChangePinAction = (pin: string): UserChangePinAction => ({
  type: ActionType.UserChangePin,
  pin,
});

function handleSetPin(context: Context, state: State): Update<State, Action> {
  const { cardToken, pin, confirmPin } = state;
  const pinError = [];
  const confirmPinError = [];
  const error = [];

  if (pin.length !== PIN_LENGTH) {
    pinError.push(ValueError.InvalidLength);
  }

  if (confirmPin.length !== PIN_LENGTH) {
    confirmPinError.push(ValueError.InvalidLength);
  }

  if (pin.length === PIN_LENGTH && confirmPin.length === PIN_LENGTH && pin !== confirmPin) {
    error.push(Error.InvalidPinMatch);
  }

  const hasError = confirmPinError.length || error.length || pinError.length;

  const work = () => {
    if (hasError) {
      return null;
    }

    return context
      .setPin(
        SetPinRequest.create({
          cardToken,
          pin,
        })
      )
      .then(setPinReceivedAction, setPinRejectedAction);
  };

  return [
    {
      ...state,
      confirmPinError,
      error,
      loading: !hasError,
      pinError,
    },
    work,
  ];
}

function handleSetPinReceived(
  _context: Context,
  state: State,
  action: SetPinReceivedAction
): Update<State, Action> {
  const { errors } = action.response;
  if (errors.length === 0) {
    return [
      {
        ...state,
        loading: false,
      },
      doneAction,
    ];
  }

  // Client will handle one error at a time, the first one.
  switch (errors[0]) {
    case SetPinResponse.SetPinError.SET_PIN_ERROR_INVALID_CARD_TOKEN:
      return [
        {
          ...state,
          confirmPinError: [ValueError.InvalidLength],
          pinError: [ValueError.InvalidLength],
          loading: false,
        },
        null,
      ];
    case SetPinResponse.SetPinError.SET_PIN_ERROR_WEAK_PIN:
      return [
        {
          ...state,
          error: [...state.error, Error.WeakPin],
          loading: false,
        },
        null,
      ];
    case SetPinResponse.SetPinError.SET_PIN_ERROR_UNAUTHORIZED:
    case SetPinResponse.SetPinError.SET_PIN_ERROR_DO_NOT_USE:
      return [
        {
          ...state,
          error: [...state.error, Error.GenericError],
          loading: false,
        },
        null,
      ];
  }
}

function handleSetPinRejected(
  context: Context,
  state: State,
  action: SetPinRejectedAction
): Update<State, Action> {
  const { error } = action;
  context.sentry.captureException(`SetPin error - ${error}`);

  return [
    {
      ...state,
      error: [...state.error, Error.GenericError],
      loading: false,
    },
    null,
  ];
}

function handleUserChangeConfirmPin(
  state: State,
  action: UserChangeConfirmPinAction
): Update<State, Action> {
  const { confirmPin } = action;
  return [{ ...state, confirmPin, confirmPinError: [] }, null];
}

function handleUserChangePin(state: State, action: UserChangePinAction): Update<State, Action> {
  const { pin } = action;
  return [{ ...state, pin, pinError: [] }, null];
}

export const update =
  (context: Context) =>
  (state: State, action: Action): Update<State, Action> => {
    switch (action.type) {
      case ActionType.Done:
        // noop action to watch for done
        return [state, null];
      case ActionType.Initialize:
        return [{ ...INITIAL_STATE, cardToken: action.cardToken }, null];
      case ActionType.SetPin:
        return handleSetPin(context, state);
      case ActionType.SetPinReceived:
        return handleSetPinReceived(context, state, action);
      case ActionType.SetPinRejected:
        return handleSetPinRejected(context, state, action);
      case ActionType.UserChangeConfirmPin:
        return handleUserChangeConfirmPin(state, action);
      case ActionType.UserChangePin:
        return handleUserChangePin(state, action);
    }
  };

const setPin = (seed: State, context: Context) => {
  const w = workflow(update(context), seed);
  return {
    states: w.states,
    updates: w.updates,
    emit: w.emit,
  };
};

export default setPin;
