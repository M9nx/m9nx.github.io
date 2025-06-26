import workflow, { Update } from "/src/lib/workflow";
import { Card } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import {
  BankingWebCardService,
  RetrieveCardRequest,
  RetrieveCardResponse,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import {
  CardManagementService,
  LockCardRequest,
  LockCardResponse,
  UnlockCardRequest,
  UnlockCardResponse,
} from "/src/protos/squareup/bbdebit/cardmanagement";
import { Sentry } from "/src/types/sentry";

// State
// =============================================================================
export enum CardSettingError {
  None,
  Generic,
}

export interface ToggleLoading {
  readonly lockCard: boolean;
  readonly showCardDetails: boolean;
}

export interface State {
  readonly card: Card | null;
  readonly error: CardSettingError;
  readonly loading: boolean;
  readonly showCardDetails: boolean;
  readonly toggleLoading: ToggleLoading;
}

export const INITIAL_STATE = {
  card: null,
  error: CardSettingError.None,
  loading: true,
  showCardDetails: false,
  toggleLoading: {
    lockCard: false,
    showCardDetails: false,
  },
};

export const createState = (overrides: Partial<State> = {}): State => ({
  ...INITIAL_STATE,
  ...overrides,
});

export interface Context {
  readonly bankingWebCardService: BankingWebCardService;
  readonly cardManagementService: CardManagementService;
  readonly sentry: Sentry;
}

export enum ActionType {
  Initialize = "INITIALIZE",
  LockCardReceived = "LOCK_CARD_RECEIVED",
  LockCardRejected = "LOCK_CARD_REJECTED",
  RetrieveCardReceived = "RETRIEVE_CARD_RECEIVED",
  RetrieveCardRejected = "RETRIEVE_CARD_REJECTED",
  UnlockCardReceived = "UNLOCK_CARD_RECEIVED",
  UnlockCardRejected = "UNLOCK_CARD_REJECTED",
  UserClickActivateCard = "USER_CLICK_ACTIVATE_CARD",
  UserClickResetPin = "USER_CLICK_RESET_PIN",
  UserToggleCardDetails = "USER_TOGGLE_CARD_DETAILS",
  UserToggleLockCard = "USER_TOGGLE_LOCK_CARD",
}

export interface InitializeAction {
  readonly type: ActionType.Initialize;
  readonly cardToken: string;
}

export interface LockCardReceivedAction {
  readonly type: ActionType.LockCardReceived;
  readonly response: LockCardResponse;
}

export interface LockCardRejectedAction {
  readonly type: ActionType.LockCardRejected;
  readonly error: unknown;
}

export interface RetrieveCardReceivedAction {
  readonly type: ActionType.RetrieveCardReceived;
  readonly response: RetrieveCardResponse;
}

export interface RetrieveCardRejectedAction {
  readonly type: ActionType.RetrieveCardRejected;
  readonly error: unknown;
}

export interface UnlockCardReceivedAction {
  readonly type: ActionType.UnlockCardReceived;
  readonly response: UnlockCardResponse;
}

export interface UnlockCardRejectedAction {
  readonly type: ActionType.UnlockCardRejected;
  readonly error: unknown;
}

export interface UserClickActivateCardAction {
  readonly type: ActionType.UserClickActivateCard;
}

export interface UserClickResetPinAction {
  readonly type: ActionType.UserClickResetPin;
}

export interface UserToggleCardDetailsAction {
  readonly type: ActionType.UserToggleCardDetails;
  readonly value: boolean;
}

export interface UserToggleLockCardAction {
  readonly type: ActionType.UserToggleLockCard;
  readonly value: boolean;
}

export type Action =
  | InitializeAction
  | LockCardReceivedAction
  | LockCardRejectedAction
  | RetrieveCardReceivedAction
  | RetrieveCardRejectedAction
  | UnlockCardReceivedAction
  | UnlockCardRejectedAction
  | UserClickActivateCardAction
  | UserClickResetPinAction
  | UserToggleCardDetailsAction
  | UserToggleLockCardAction;

export const initializeAction = (cardToken: string): InitializeAction => ({
  type: ActionType.Initialize,
  cardToken,
});

export const lockCardReceivedAction = (response: LockCardResponse): LockCardReceivedAction => ({
  type: ActionType.LockCardReceived,
  response,
});

export const lockCardRejectedAction = (error: unknown): LockCardRejectedAction => ({
  type: ActionType.LockCardRejected,
  error,
});

export const retrieveCardReceivedAction = (
  response: RetrieveCardResponse
): RetrieveCardReceivedAction => ({
  type: ActionType.RetrieveCardReceived,
  response,
});

export const retrieveCardRejectedAction = (error: unknown): RetrieveCardRejectedAction => ({
  type: ActionType.RetrieveCardRejected,
  error,
});

export const unlockCardReceivedAction = (
  response: UnlockCardResponse
): UnlockCardReceivedAction => ({
  type: ActionType.UnlockCardReceived,
  response,
});

export const unlockCardRejectedAction = (error: unknown): UnlockCardRejectedAction => ({
  type: ActionType.UnlockCardRejected,
  error,
});

export const userClickActivateCardAction = (): UserClickActivateCardAction => ({
  type: ActionType.UserClickActivateCard,
});

export const userClickResetPinAction = (): UserClickResetPinAction => ({
  type: ActionType.UserClickResetPin,
});

export const userToggleCardDetailsAction = (value: boolean): UserToggleCardDetailsAction => ({
  type: ActionType.UserToggleCardDetails,
  value,
});

export const userToggleLockCardAction = (value: boolean): UserToggleLockCardAction => ({
  type: ActionType.UserToggleLockCard,
  value,
});

function handleInitialize(context: Context, action: InitializeAction): Update<State, Action> {
  const { cardToken } = action;

  const work = () =>
    context.bankingWebCardService
      .retrieveCard(
        RetrieveCardRequest.create({
          cardId: cardToken,
        })
      )
      .then(retrieveCardReceivedAction, retrieveCardRejectedAction);
  return [INITIAL_STATE, work];
}

function handleLockCardReceived(
  context: Context,
  state: State,
  action: LockCardReceivedAction
): Update<State, Action> {
  const { errors } = action.response;
  if (errors.length > 0) {
    context.sentry.captureException("Card settings [LockCardReceivedAction]: Failed to lock card");
    return [
      {
        ...state,
        error: CardSettingError.Generic,
        toggleLoading: {
          ...state.toggleLoading,
          lockCard: false,
        },
      },
      null,
    ];
  }

  const cardToken = state.card?.id;
  if (cardToken == null) {
    context.sentry.captureException("Card settings [LockCardReceivedAction]: Missing card token");
    return [
      {
        ...state,
        error: CardSettingError.Generic,
        toggleLoading: {
          ...state.toggleLoading,
          lockCard: false,
        },
      },
      null,
    ];
  }

  const work = () =>
    context.bankingWebCardService
      .retrieveCard(
        RetrieveCardRequest.create({
          cardId: cardToken,
        })
      )
      .then(retrieveCardReceivedAction, retrieveCardRejectedAction);

  return [state, work];
}

function handleLockCardRejected(
  context: Context,
  state: State,
  action: LockCardRejectedAction
): Update<State, Action> {
  const { error } = action;
  context.sentry.captureException(
    `Card settings [LockCardRejectedAction]: Failed to lock card ${error}`
  );
  return [
    {
      ...state,
      error: CardSettingError.Generic,
      toggleLoading: {
        ...state.toggleLoading,
        lockCard: false,
      },
    },
    null,
  ];
}

function handleRetrieveCardReceived(
  context: Context,
  state: State,
  action: RetrieveCardReceivedAction
): Update<State, Action> {
  const { card } = action.response;
  if (card == null) {
    context.sentry.captureException("Card settings: Missing card");
    return [
      {
        ...state,
        error: CardSettingError.Generic,
        loading: false,
        toggleLoading: {
          ...state.toggleLoading,
          lockCard: false,
        },
      },
      null,
    ];
  }

  return [
    {
      ...state,
      card,
      loading: false,
      toggleLoading: {
        ...state.toggleLoading,
        lockCard: false,
      },
    },
    null,
  ];
}

function handleRetrieveCardRejected(
  context: Context,
  state: State,
  action: RetrieveCardRejectedAction
): Update<State, Action> {
  const { error } = action;
  context.sentry.captureException(`Card settings: Fetching card failed ${error}`);
  return [
    {
      ...state,
      error: CardSettingError.Generic,
      loading: false,
      toggleLoading: {
        ...state.toggleLoading,
        lockCard: false,
      },
    },
    null,
  ];
}

function handleUnlockCardReceived(
  context: Context,
  state: State,
  action: UnlockCardReceivedAction
): Update<State, Action> {
  const { errors } = action.response;
  if (errors.length > 0) {
    context.sentry.captureException(
      "Card settings [UnlockCardReceivedAction]: Failed to unlock card"
    );
    return [
      {
        ...state,
        error: CardSettingError.Generic,
        toggleLoading: {
          ...state.toggleLoading,
          lockCard: false,
        },
      },
      null,
    ];
  }

  const cardToken = state.card?.id;
  if (cardToken == null) {
    context.sentry.captureException("Card settings [UnlockCardReceivedAction]: Missing card token");
    return [
      {
        ...state,
        error: CardSettingError.Generic,
        toggleLoading: {
          ...state.toggleLoading,
          lockCard: false,
        },
      },
      null,
    ];
  }

  const work = () =>
    context.bankingWebCardService
      .retrieveCard(
        RetrieveCardRequest.create({
          cardId: cardToken,
        })
      )
      .then(retrieveCardReceivedAction, retrieveCardRejectedAction);

  return [state, work];
}

function handleUnlockCardRejected(
  context: Context,
  state: State,
  action: UnlockCardRejectedAction
): Update<State, Action> {
  const { error } = action;
  context.sentry.captureException(
    `Card settings [UnlockCardRejectedAction]: Failed to unlock card ${error}`
  );
  return [{ ...state, error: CardSettingError.Generic, loading: false }, null];
}

function handleUserToggleCardDetails(
  state: State,
  action: UserToggleCardDetailsAction
): Update<State, Action> {
  const { value } = action;
  return [{ ...state, showCardDetails: value }, null];
}

function handleUserToggleLockCard(
  context: Context,
  state: State,
  action: UserToggleLockCardAction
): Update<State, Action> {
  const { value } = action;
  const cardToken = state.card?.id;
  if (cardToken == null) {
    context.sentry.captureException("Card setting [UserToggleLockCardAction]: Missing card token");
    return [{ ...state, error: CardSettingError.Generic }, null];
  }

  if (value) {
    const work = () =>
      context.cardManagementService
        .lockCard(
          LockCardRequest.create({
            cardToken,
          })
        )
        .then(lockCardReceivedAction, lockCardRejectedAction);

    return [
      {
        ...state,
        toggleLoading: {
          ...state.toggleLoading,
          lockCard: true,
        },
      },
      work,
    ];
  }

  const work = () =>
    context.cardManagementService
      .unlockCard(
        UnlockCardRequest.create({
          cardToken,
        })
      )
      .then(unlockCardReceivedAction, unlockCardRejectedAction);

  return [
    {
      ...state,
      toggleLoading: {
        ...state.toggleLoading,
        lockCard: true,
      },
    },
    work,
  ];
}

/**
 * Noop is purely to have the action be called and the side effect will
 * outside the workflow.
 */
function noop(state: State): Update<State, Action> {
  return [state, null];
}

export const update =
  (context: Context) =>
  (state: State, action: Action): Update<State, Action> => {
    switch (action.type) {
      case ActionType.Initialize:
        return handleInitialize(context, action);
      case ActionType.LockCardReceived:
        return handleLockCardReceived(context, state, action);
      case ActionType.LockCardRejected:
        return handleLockCardRejected(context, state, action);
      case ActionType.RetrieveCardReceived:
        return handleRetrieveCardReceived(context, state, action);
      case ActionType.RetrieveCardRejected:
        return handleRetrieveCardRejected(context, state, action);
      case ActionType.UnlockCardReceived:
        return handleUnlockCardReceived(context, state, action);
      case ActionType.UnlockCardRejected:
        return handleUnlockCardRejected(context, state, action);
      case ActionType.UserClickActivateCard:
        return noop(state);
      case ActionType.UserClickResetPin:
        return noop(state);
      case ActionType.UserToggleCardDetails:
        return handleUserToggleCardDetails(state, action);
      case ActionType.UserToggleLockCard:
        return handleUserToggleLockCard(context, state, action);
    }
  };

const cardSettings = (seed: State, context: Context) => {
  const w = workflow(update(context), seed);
  return {
    states: w.states,
    updates: w.updates,
    emit: w.emit,
  };
};

export default cardSettings;
