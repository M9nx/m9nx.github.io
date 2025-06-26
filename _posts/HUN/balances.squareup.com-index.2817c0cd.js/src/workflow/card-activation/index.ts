import { ExpiryDate } from "field-kit";
import workflow, { Update } from "/src/lib/workflow";
import * as setPinWorkflow from "../set-pin/index";
import {
  ActivateCardRequest,
  ActivateCardResponse,
  BankingWebCardService,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import { YearMonth } from "/src/protos/squareup/common/time";
import assert from "/src/util/assert";
import { Sentry } from "/src/types/sentry";

/**
 * NOTE(cvu): Currently there is no feature flag support and I did not want to
 * break the current card activation for development of this.
 */

// State
// =============================================================================

export enum CardDetailsInputError {
  Empty = "CARD_DETAIL_INPUT_ERROR_EMPTY",
}

export enum CardDetailsError {
  InvalidCvcExpiryDate = "CARD_DETAILS_ERROR_INVALID_CVC_EXPIRY_DATE",
}

export enum CardActivationError {
  None,
  Generic,
}

export enum Screen {
  Details,
  Pin,
  Success,
  Error,
}

export interface CardDetailsValidationErrors {
  readonly cvc: CardDetailsInputError[];
  readonly expiryDate: CardDetailsInputError[];
  readonly cardDetails: CardDetailsError[];
}

export interface State {
  readonly cardDetailsValidationErrors: CardDetailsValidationErrors;
  readonly cardToken: string;
  readonly cvcValue: string;
  readonly done: boolean;
  readonly error: CardActivationError;
  readonly expiryDateValue: ExpiryDate | null;
  readonly isLoading: boolean;
  readonly modalOpen: boolean;
  readonly screen: Screen;
  readonly setPinState: setPinWorkflow.State;
}

export const INITIAL_STATE: State = {
  cardDetailsValidationErrors: {
    cvc: [],
    expiryDate: [],
    cardDetails: [],
  },
  cardToken: "",
  cvcValue: "",
  done: false,
  error: CardActivationError.None,
  expiryDateValue: null,
  isLoading: false,
  modalOpen: false,
  screen: Screen.Details,
  setPinState: setPinWorkflow.createState(),
};

export const createState = (overrides: Partial<State> = {}): State => ({
  ...INITIAL_STATE,
  ...overrides,
});

export interface OwnContext {
  readonly bankingWebCardService: BankingWebCardService;
  readonly canUpdatePin: boolean;
  readonly sentry: Sentry;
}

export type Context = OwnContext & setPinWorkflow.Context;

// Action
// =============================================================================

export enum ActionType {
  ActivateCardReceived = "ACTIVATE_CARD_RECEIVED",
  ActivateCardRejected = "ACTIVATE_CARD_REJECTED",
  Done = "Done",
  Initialize = "INITIALIZE",
  NavigateToScreen = "NAVIGATE_TO_SCREEN",
  SetError = "SET_ERROR",
  ToggleLoading = "TOGGLE_LOADING",
  ToggleModal = "TOGGLE_MODAL",
  UserChangeCvc = "USER_CHANGE_CVC",
  UserChangeExpiryDate = "USER_CHANGE_EXPIRY_DATE",
  UserClickNext = "USER_CLICK_NEXT",
}

export interface ActivateCardReceivedAction {
  readonly type: ActionType.ActivateCardReceived;
  readonly response: ActivateCardResponse;
}

export interface ActivateCardRejectedAction {
  readonly type: ActionType.ActivateCardRejected;
  readonly error: unknown;
}

export interface DoneAction {
  readonly type: ActionType.Done;
}

interface InitializeAction {
  readonly type: ActionType.Initialize;
  readonly cardToken: string;
}

export interface NavigateToScreenAction {
  readonly type: ActionType.NavigateToScreen;
  readonly screen: Screen;
}

export interface SetErrorAction {
  readonly type: ActionType.SetError;
  readonly error: CardActivationError;
}

export interface ToggleLoadingAction {
  readonly type: ActionType.ToggleLoading;
  readonly value: boolean;
}

export interface ToggleModalAction {
  readonly type: ActionType.ToggleModal;
  readonly value: boolean;
}

export interface UserChangeCvcAction {
  readonly type: ActionType.UserChangeCvc;
  readonly value: string;
}

export interface UserChangeExpiryDateAction {
  readonly type: ActionType.UserChangeExpiryDate;
  readonly value: ExpiryDate | null;
}

export interface UserClickNextAction {
  readonly type: ActionType.UserClickNext;
}

export type Action =
  | ActivateCardReceivedAction
  | ActivateCardRejectedAction
  | DoneAction
  | InitializeAction
  | NavigateToScreenAction
  | SetErrorAction
  | ToggleLoadingAction
  | ToggleModalAction
  | UserChangeCvcAction
  | UserChangeExpiryDateAction
  | UserClickNextAction
  | setPinWorkflow.Action;

// Action Creators
// =============================================================================

export const activateCardReceivedAction = (
  response: ActivateCardResponse
): ActivateCardReceivedAction => ({
  type: ActionType.ActivateCardReceived,
  response,
});

export const activateCardRejectedAction = (error: unknown): ActivateCardRejectedAction => ({
  type: ActionType.ActivateCardRejected,
  error,
});

export const doneAction = (): DoneAction => ({
  type: ActionType.Done,
});

export const navigateToScreenAction = (screen: Screen): NavigateToScreenAction => ({
  type: ActionType.NavigateToScreen,
  screen,
});

export const initializeAction = (cardToken: string): InitializeAction => ({
  type: ActionType.Initialize,
  cardToken,
});

export const setErrorAction = (error: CardActivationError): SetErrorAction => ({
  type: ActionType.SetError,
  error,
});

export const toggleLoadingAction = (value: boolean): ToggleLoadingAction => ({
  type: ActionType.ToggleLoading,
  value,
});

export const toggleModalAction = (value: boolean): ToggleModalAction => ({
  type: ActionType.ToggleModal,
  value,
});

export const userChangeCvcAction = (value: string): UserChangeCvcAction => ({
  type: ActionType.UserChangeCvc,
  value,
});

export const userChangeExpiryDateAction = (value: ExpiryDate): UserChangeExpiryDateAction => ({
  type: ActionType.UserChangeExpiryDate,
  value,
});

export const userClickNextAction = (): UserClickNextAction => ({
  type: ActionType.UserClickNext,
});

// Update
// =============================================================================

function handleActivateCardReceived(
  context: Context,
  state: State,
  action: ActivateCardReceivedAction
): Update<State, Action> {
  const { error } = action.response;
  if (
    error.includes(
      ActivateCardResponse.ActivateCardError.ACTIVATE_CARD_ERROR_INVALID_EXPIRATION_CVC
    )
  ) {
    const { cardDetailsValidationErrors } = state;
    return [
      {
        ...state,
        cardDetailsValidationErrors: {
          ...cardDetailsValidationErrors,
          cardDetails: [
            ...cardDetailsValidationErrors.cardDetails,
            CardDetailsError.InvalidCvcExpiryDate,
          ],
        },
      },
      null,
    ];
  } else if (error.length) {
    context.sentry.captureException("Unhandled ActivateCard error");
    return [{ ...state, isLoading: false }, () => setErrorAction(CardActivationError.Generic)];
  }

  return context.canUpdatePin
    ? [
        { ...state, screen: Screen.Pin, isLoading: false },
        () => setPinWorkflow.initializeAction(state.cardToken),
      ]
    : [{ ...state, screen: Screen.Success, isLoading: false }, null];
}

function handleActivateCardRejected(
  context: Context,
  state: State,
  action: ActivateCardRejectedAction
): Update<State, Action> {
  const { error } = action;
  context.sentry.captureException(error);
  return [state, () => setErrorAction(CardActivationError.Generic)];
}

function handleInitialize(
  context: Context,
  state: State,
  action: InitializeAction
): Update<State, Action> {
  const { cardToken } = action;
  if (cardToken.length === 0) {
    context.sentry.captureException("Card activation: card token is empty string");
    return [
      { ...INITIAL_STATE, modalOpen: true },
      () => setErrorAction(CardActivationError.Generic),
    ];
  }
  return [{ ...INITIAL_STATE, cardToken, modalOpen: true }, null];
}

function handleNavigateToScreen(
  state: State,
  action: NavigateToScreenAction
): Update<State, Action> {
  const { screen } = action;
  return [{ ...state, screen }, null];
}

function handleSetError(state: State, action: SetErrorAction): Update<State, Action> {
  const { error } = action;
  return [{ ...state, error, screen: Screen.Error }, null];
}

function handleToggleLoading(state: State, action: ToggleLoadingAction): Update<State, Action> {
  const { value } = action;
  return [{ ...state, isLoading: value }, null];
}

function handleToggleModal(
  context: Context,
  state: State,
  action: ToggleModalAction
): Update<State, Action> {
  const { value } = action;
  const nextAction = state.screen === Screen.Success ? doneAction : null;
  return [{ ...state, modalOpen: value }, nextAction];
}

function handleUserChangeCvc(state: State, action: UserChangeCvcAction): Update<State, Action> {
  const { value } = action;
  const cardDetailsValidationErrors = {
    ...state.cardDetailsValidationErrors,
    cardDetails: [],
    cvc: [],
  };
  return [
    {
      ...state,
      cvcValue: value,
      cardDetailsValidationErrors,
    },
    null,
  ];
}

function handleUserChangeExpiryDate(
  state: State,
  action: UserChangeExpiryDateAction
): Update<State, Action> {
  const { value } = action;
  const cardDetailsValidationErrors = {
    ...state.cardDetailsValidationErrors,
    cardDetails: [],
    expiryDate: [],
  };
  return [
    {
      ...state,
      expiryDateValue: value,
      cardDetailsValidationErrors,
    },
    null,
  ];
}

function handleUserClickNext(context: Context, state: State): Update<State, Action> {
  const { screen, cvcValue, expiryDateValue } = state;
  switch (screen) {
    case Screen.Details: {
      const expiryDateErrors = expiryDateValue === null ? [CardDetailsInputError.Empty] : [];
      const cvcErrors = cvcValue.length === 0 ? [CardDetailsInputError.Empty] : [];
      if (expiryDateErrors.length || cvcErrors.length) {
        return [
          {
            ...state,
            cardDetailsValidationErrors: {
              ...state.cardDetailsValidationErrors,
              cvc: cvcErrors,
              expiryDate: expiryDateErrors,
            },
          },
          null,
        ];
      }

      const { cardToken } = state;
      assert(expiryDateValue, "expiryDateValue is null");

      const work = () =>
        context.bankingWebCardService
          .activateCard(
            ActivateCardRequest.create({
              cardToken,
              activation: ActivateCardRequest.ExpirationAndCVC.create({
                cvc: cvcValue,
                expiration: YearMonth.create({
                  monthOfYear: expiryDateValue.month,
                  year: expiryDateValue.year,
                }),
              }),
            })
          )
          .then(activateCardReceivedAction, activateCardRejectedAction);
      return [{ ...state, isLoading: true }, work];
    }
    case Screen.Pin:
      return [
        {
          ...state,
          screen: Screen.Success,
        },
        null,
      ];
    case Screen.Success:
      return [state, doneAction];
    case Screen.Error:
      return [state, null];
  }
}

export const update =
  (context: Context) =>
  (state: State, action: Action): Update<State, Action> => {
    switch (action.type) {
      case ActionType.ActivateCardReceived:
        return handleActivateCardReceived(context, state, action);
      case ActionType.ActivateCardRejected:
        return handleActivateCardRejected(context, state, action);
      case ActionType.Done:
        return [{ ...state, done: true, modalOpen: false }, null];
      case ActionType.Initialize:
        return handleInitialize(context, state, action);
      case ActionType.NavigateToScreen:
        return handleNavigateToScreen(state, action);
      case ActionType.SetError:
        return handleSetError(state, action);
      case ActionType.ToggleLoading:
        return handleToggleLoading(state, action);
      case ActionType.ToggleModal:
        return handleToggleModal(context, state, action);
      case ActionType.UserChangeCvc:
        return handleUserChangeCvc(state, action);
      case ActionType.UserChangeExpiryDate:
        return handleUserChangeExpiryDate(state, action);
      case ActionType.UserClickNext:
        return handleUserClickNext(context, state);
      case setPinWorkflow.ActionType.Done:
      case setPinWorkflow.ActionType.Initialize:
      case setPinWorkflow.ActionType.SetPin:
      case setPinWorkflow.ActionType.SetPinReceived:
      case setPinWorkflow.ActionType.SetPinRejected:
      case setPinWorkflow.ActionType.UserChangeConfirmPin:
      case setPinWorkflow.ActionType.UserChangePin: {
        const update = setPinWorkflow.update({
          sentry: context.sentry,
          setPin: context.setPin,
          uuid: context.uuid,
        });
        const [nextState, nextActions] = update(state.setPinState, action);
        return [
          {
            ...state,
            setPinState: nextState,
          },
          action.type === setPinWorkflow.ActionType.Done ? userClickNextAction : nextActions,
        ];
      }
    }
  };

const debitCardActivation = (seed: State, context: Context) => {
  const w = workflow(update(context), seed);
  return {
    states: w.states,
    updates: w.updates,
    emit: w.emit,
  };
};

export default debitCardActivation;
