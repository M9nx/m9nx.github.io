import { concat, from, of } from "rxjs";
import workflow, { Update } from "/src/lib/workflow";
import { Sentry } from "/src/types/sentry";
import { getFullName, User } from "/src/util/user";
import {
  BankingWebCardService,
  CreateCardRequest,
  CreateCardResponse,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import {
  BankingWebComplianceService,
  GetOrCreateComplianceVerificationRequest,
  GetOrCreateComplianceVerificationResponse,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/compliance_service";
import assert from "/src/util/assert";
import * as cardCustomization from "./card-customization";
import * as cardShipping from "./card-shipping";
import * as verifyName from "./verify-name";

export enum Screen {
  None,
  VerifyName,
  Customization,
  ShippingAddress,
  SetPin,
  ConfirmPin,
  OrderConfirmation,
  AddToDigitalWallet,
  Error,
}

export const CARD_ISSUING_FLOW = [
  Screen.Customization,
  Screen.ShippingAddress,
  // TODO(cvu): uncomment when confirm pin supported
  // https://jira.sqprod.co/browse/SQCARD-2657
  // Screen.SetPin,
  // Screen.ConfirmPin,
  Screen.OrderConfirmation,
];
export const ERROR_FLOW = [Screen.Error];
const PIN_LENGTH = 4;

export enum CardIssuingError {
  None,
  Generic,
  Ineligible,
}

export interface OwnContext {
  readonly bankingWebCardService: BankingWebCardService;
  readonly bankingWebComplianceService: BankingWebComplianceService;
  readonly sentry: Sentry;
  readonly uuid: () => string;
}

export type Context = OwnContext &
  cardCustomization.Context &
  cardShipping.Context &
  verifyName.Context;

export interface Navigation {
  readonly current: Screen;
  readonly flow: Screen[];
}

export interface State {
  readonly cardCustomizationState: cardCustomization.State;
  readonly cardInvitationToken: string;
  readonly cardShippingState: cardShipping.State;
  readonly cardToken: string;
  readonly confirmPin: string;
  readonly done: boolean;
  readonly error: CardIssuingError;
  readonly loading: boolean;
  readonly modalOpen: boolean;
  readonly navigation: Navigation;
  readonly pin: string;
  readonly verifyNameState: verifyName.State;
}

const INITIAL_STATE: State = {
  cardCustomizationState: cardCustomization.createState(),
  cardInvitationToken: "",
  cardShippingState: cardShipping.createState(),
  cardToken: "",
  confirmPin: "",
  done: false,
  error: CardIssuingError.None,
  loading: false,
  modalOpen: false,
  navigation: {
    current: Screen.None,
    flow: [],
  },
  pin: "",
  verifyNameState: verifyName.createState(),
};

export const createState = (overrides: Partial<State> = {}): State => ({
  ...INITIAL_STATE,
  ...overrides,
});

// ====== UTILS ====== //
export const shouldNavIconCloseModal = (state: State) => {
  const { current, flow } = state.navigation;
  const currentIndex = flow.indexOf(current);
  return currentIndex === 0 || currentIndex === flow.length - 1;
};

export const shouldShowNavButton = (state: State) => {
  const { current, flow } = state.navigation;
  const currentIndex = flow.indexOf(current);
  return currentIndex !== flow.length - 1;
};

export enum ActionType {
  CreateCardResponseReceived = "CREATE_CARD_RESPONSE_RECEIVED",
  CreateCardResponseRejected = "CREATE_CARD_RESPONSE_REJECTED",
  Done = "DONE",
  GetOrCreateComplianceVerificationReceived = "GET_OR_CREATE_COMPLIANCE_VERIFICATION_RECEIVED",
  GetOrCreateComplianceVerificationRejected = "GET_OR_CREATE_COMPLIANCE_VERIFICATION_REJECTED",
  Initialize = "INITIALIZE",
  NavigateBack = "NAVIGATE_BACK",
  NavigateNext = "NAVIGATE_NEXT",
  NavigateToScreen = "NAVIGATE_TO_SCREEN",
  OnCardShippingDone = "ON_CARD_SHIPPING_DONE",
  OnVerifyNameDone = "ON_VERIFY_NAME_DONE",
  SetError = "SET_ERROR",
  ToggleModal = "TOGGLE_MODAL",
  UserChangeConfirmPin = "USER_CHANGE_CONFIRM_PIN",
  UserChangeSetPin = "USER_CHANGE_SET_PIN",
  UserClickAddToDigitalWallet = "USER_CLICK_ADD_TO_DIGITAL_WALLET",
  UserClickBackButton = "USER_CLICK_BACK_BUTTON",
  UserClickCloseButton = "USER_CLICK_CLOSE_BUTTON",
  UserClickNextButton = "USER_CLICK_NEXT_BUTTON",
  UserClickSkipAddToDigitalWallet = "USER_CLICK_SKIP_ADD_TO_DIGITAL_WALLET",
}

interface CreateCardResponseReceivedAction {
  readonly type: ActionType.CreateCardResponseReceived;
  readonly response: CreateCardResponse;
}

interface CreateCardResponseRejectedAction {
  readonly type: ActionType.CreateCardResponseRejected;
  readonly error: unknown;
}

interface DoneAction {
  readonly type: ActionType.Done;
}

interface GetOrCreateComplianceVerificationReceivedAction {
  readonly type: ActionType.GetOrCreateComplianceVerificationReceived;
  readonly response: GetOrCreateComplianceVerificationResponse;
}

interface GetOrCreateComplianceVerificationRejectedAction {
  readonly type: ActionType.GetOrCreateComplianceVerificationRejected;
  readonly error: unknown;
}

interface InitializeAction {
  readonly type: ActionType.Initialize;
  readonly cardInvitationToken: string;
  readonly user: User;
  readonly requiresVerification: boolean;
}

interface NavigateBackAction {
  readonly type: ActionType.NavigateBack;
}

interface NavigateNextAction {
  readonly type: ActionType.NavigateNext;
}

interface NavigateToScreenAction {
  readonly type: ActionType.NavigateToScreen;
  readonly screen: Screen;
}

interface OnCardShippingDoneAction {
  readonly type: ActionType.OnCardShippingDone;
}

interface OnVerifyNameDoneAction {
  readonly type: ActionType.OnVerifyNameDone;
}

interface ToggleModalAction {
  readonly type: ActionType.ToggleModal;
  readonly value?: boolean;
}

interface SetErrorAction {
  readonly type: ActionType.SetError;
  readonly error: CardIssuingError;
}

interface UserChangeConfirmPinAction {
  readonly type: ActionType.UserChangeConfirmPin;
  readonly confirmPin: string;
}

interface UserChangeSetPinAction {
  readonly type: ActionType.UserChangeSetPin;
  readonly pin: string;
}

// TODO(cvu): Add support for adding to digital wallet
interface UserClickAddToDigitalWalletAction {
  readonly type: ActionType.UserClickAddToDigitalWallet;
}

interface UserClickBackButtonAction {
  readonly type: ActionType.UserClickBackButton;
}

interface UserClickCloseButtonAction {
  readonly type: ActionType.UserClickCloseButton;
}

interface UserClickNextButtonAction {
  readonly type: ActionType.UserClickNextButton;
}

// TODO(cuv)
interface UserClickSkipAddToDigitalWalletAction {
  readonly type: ActionType.UserClickSkipAddToDigitalWallet;
}

export type Action =
  | cardCustomization.Action
  | cardShipping.Action
  | CreateCardResponseReceivedAction
  | CreateCardResponseRejectedAction
  | DoneAction
  | GetOrCreateComplianceVerificationReceivedAction
  | GetOrCreateComplianceVerificationRejectedAction
  | InitializeAction
  | NavigateBackAction
  | NavigateNextAction
  | NavigateToScreenAction
  | OnCardShippingDoneAction
  | OnVerifyNameDoneAction
  | SetErrorAction
  | ToggleModalAction
  | UserChangeConfirmPinAction
  | UserChangeSetPinAction
  | UserClickAddToDigitalWalletAction
  | UserClickBackButtonAction
  | UserClickCloseButtonAction
  | UserClickNextButtonAction
  | UserClickSkipAddToDigitalWalletAction
  | verifyName.Action;

export const createCardResponseReceivedAction = (
  response: CreateCardResponse
): CreateCardResponseReceivedAction => ({
  type: ActionType.CreateCardResponseReceived,
  response,
});

// eslint-disable-next-line
export const createCardResponseRejectedAction = (error: any): CreateCardResponseRejectedAction => ({
  type: ActionType.CreateCardResponseRejected,
  error,
});

export const getOrCreateComplianceVerificationReceivedAction = (
  response: GetOrCreateComplianceVerificationResponse
): GetOrCreateComplianceVerificationReceivedAction => ({
  type: ActionType.GetOrCreateComplianceVerificationReceived,
  response,
});

export const getOrCreateComplianceVerificationRejectedAction = (
  error: unknown
): GetOrCreateComplianceVerificationRejectedAction => ({
  type: ActionType.GetOrCreateComplianceVerificationRejected,
  error,
});

export const doneAction = (): DoneAction => ({
  type: ActionType.Done,
});

export const initializeAction = (
  cardInvitationToken: string,
  user: User,
  requiresVerification: boolean
): InitializeAction => ({
  type: ActionType.Initialize,
  cardInvitationToken,
  user,
  requiresVerification,
});

export const navigateBackAction = (): NavigateBackAction => ({
  type: ActionType.NavigateBack,
});

export const navigateNextAction = (): NavigateNextAction => ({
  type: ActionType.NavigateNext,
});

export const navigateToScreenAction = (screen: Screen): NavigateToScreenAction => ({
  type: ActionType.NavigateToScreen,
  screen,
});

export const onCardShippingDoneAction = (): OnCardShippingDoneAction => ({
  type: ActionType.OnCardShippingDone,
});

export const onVerifyNameDoneAction = (): OnVerifyNameDoneAction => ({
  type: ActionType.OnVerifyNameDone,
});

export const setErrorAction = (error: CardIssuingError): SetErrorAction => ({
  type: ActionType.SetError,
  error,
});

export const toggleModalAction = (value?: boolean): ToggleModalAction => ({
  type: ActionType.ToggleModal,
  value,
});

export const userChangeConfirmPinAction = (confirmPin: string): UserChangeConfirmPinAction => ({
  type: ActionType.UserChangeConfirmPin,
  confirmPin,
});

export const userChangeSetPinAction = (pin: string): UserChangeSetPinAction => ({
  type: ActionType.UserChangeSetPin,
  pin,
});

export const userClickBackButtonAction = (): UserClickBackButtonAction => ({
  type: ActionType.UserClickBackButton,
});

export const userClickCloseButtonAction = (): UserClickCloseButtonAction => ({
  type: ActionType.UserClickCloseButton,
});

export const userClickNextButtonAction = (): UserClickNextButtonAction => ({
  type: ActionType.UserClickNextButton,
});

function handleCreateCardResponseReceived(
  state: State,
  action: CreateCardResponseReceivedAction
): Update<State, Action> {
  const { cardToken, error } = action.response;
  if (error.length) {
    if (error.some((e) => e === CreateCardResponse.IssueCardError.ISSUE_CARD_ERROR_UNAUTHORIZED)) {
      return [state, () => setErrorAction(CardIssuingError.Ineligible)];
    }
    return [state, () => setErrorAction(CardIssuingError.Generic)];
  }

  return [{ ...state, cardToken, loading: false }, navigateNextAction];
}

function handleCreateCardResponseRejected(
  context: Context,
  state: State,
  action: CreateCardResponseRejectedAction
): Update<State, Action> {
  const { error } = action;
  context.sentry.captureException(error);
  return [state, () => setErrorAction(CardIssuingError.Generic)];
}

function handleDone(state: State): Update<State, Action> {
  return [{ ...state, done: true }, null];
}

function handleGetOrCreateComplianceVerificationReceived(
  context: Context,
  state: State,
  action: GetOrCreateComplianceVerificationReceivedAction
): Update<State, Action> {
  const { result } = action.response;
  switch (result) {
    case GetOrCreateComplianceVerificationResponse.ComplianceResult.COMPLIANCE_RESULT_UNKNOWN:
      return [state, () => setErrorAction(CardIssuingError.Generic)];
    case GetOrCreateComplianceVerificationResponse.ComplianceResult.COMPLIANCE_RESULT_FAILED:
      return [state, () => setErrorAction(CardIssuingError.Ineligible)];
    case GetOrCreateComplianceVerificationResponse.ComplianceResult.COMPLIANCE_RESULT_PASSED: {
      const { cardCustomizationState, cardInvitationToken, cardShippingState } = state;
      const shippingAddress = cardShippingState.address;

      try {
        assert(
          cardCustomizationState.cardCustomizationToken.length > 0,
          "Card issuing - card customization token is empty"
        );
        assert(cardInvitationToken.length > 0, "Card issuing - card invitation token is empty");
        assert(shippingAddress, "Card issuing - chosen address is null");
      } catch (e) {
        context.sentry.captureException(e);
        return [{ ...state, loading: false }, () => setErrorAction(CardIssuingError.Generic)];
      }

      const work = () => {
        const { bankingWebCardService } = context;
        const request = CreateCardRequest.create({
          cardCustomizationToken: cardCustomizationState.cardCustomizationToken,
          cardInvitationToken,
          idempotencyKey: context.uuid(),
          // TODO(cvu): replace when shipping is implemented
          shippingAddress,
        });

        const response = bankingWebCardService
          .createCard(request)
          .then(createCardResponseReceivedAction, createCardResponseRejectedAction);

        return from(response);
      };
      return [{ ...state, loading: true }, work];
    }
  }
}

function handleGetOrCreateComplianceVerificationRejected(
  context: Context,
  state: State,
  action: GetOrCreateComplianceVerificationRejectedAction
): Update<State, Action> {
  const { error } = action;
  context.sentry.captureException(error);
  return [state, () => setErrorAction(CardIssuingError.Generic)];
}

function handleInitialize(
  context: Context,
  state: State,
  action: InitializeAction
): Update<State, Action> {
  const { cardInvitationToken, user, requiresVerification } = action;
  const flow = requiresVerification
    ? [Screen.VerifyName, ...CARD_ISSUING_FLOW]
    : [...CARD_ISSUING_FLOW];
  const newState = createState();

  const work = () => {
    const nextActions = of(
      cardCustomization.initializeAction(cardInvitationToken, getFullName(user)),
      cardShipping.initializeAction(),
      navigateToScreenAction(flow[0])
    );

    return requiresVerification
      ? concat(of(verifyName.initializeAction(user)), nextActions)
      : nextActions;
  };

  // Initialize will reset state
  return [
    {
      ...newState,
      cardInvitationToken,
      navigation: {
        ...newState.navigation,
        flow,
      },
    },
    work,
  ];
}

function handleNavigateBack(context: Context, state: State): Update<State, Action> {
  const { navigation } = state;
  const { current, flow } = navigation;
  const currentIndex = flow.indexOf(current);

  const prevIndex = currentIndex - 1;
  if (prevIndex > -1) {
    if (current === Screen.ShippingAddress) {
      if (state.cardShippingState.screen === cardShipping.Screen.ConfirmAddress) {
        return [state, () => cardShipping.navigateToScreenAction(cardShipping.Screen.EnterAddress)];
      }
    }
    return [state, () => navigateToScreenAction(flow[prevIndex])];
  }

  context.sentry.captureException(`Tried to navigate back to screen index out of bounds`);
  return [state, () => setErrorAction(CardIssuingError.Generic)];
}

function handleNavigateNext(context: Context, state: State): Update<State, Action> {
  const { navigation } = state;
  const { current, flow } = navigation;
  const currentIndex = flow.indexOf(current);

  const nextIndex = currentIndex + 1;
  if (nextIndex < flow.length) {
    return [state, () => navigateToScreenAction(flow[nextIndex])];
  } else {
    return [state, doneAction];
  }
}

function handleNavigateToScreen(
  context: Context,
  state: State,
  action: NavigateToScreenAction
): Update<State, Action> {
  const { screen } = action;
  const { navigation } = state;
  if (!navigation.flow.includes(screen)) {
    context.sentry.captureException(
      `Tried to navigate to screen, ${screen}, not in flow [${navigation.flow.toString()}]`
    );
    return [state, () => setErrorAction(CardIssuingError.Generic)];
  }

  return [
    {
      ...state,
      navigation: {
        ...navigation,
        current: screen,
      },
    },
    null,
  ];
}

function handleOnCardShippingDone(context: Context, state: State): Update<State, Action> {
  const { cardInvitationToken, cardShippingState } = state;
  assert(cardInvitationToken.length > 0);
  const work = () => {
    const { bankingWebComplianceService } = context;
    const request = GetOrCreateComplianceVerificationRequest.create({
      cardInvitationToken,
      globalAddress: cardShippingState.address,
    });

    const response = bankingWebComplianceService
      .getOrCreateComplianceVerification(request)
      .then(
        getOrCreateComplianceVerificationReceivedAction,
        getOrCreateComplianceVerificationRejectedAction
      );
    return from(response);
  };
  return [{ ...state, loading: true }, work];
}

function handleOnVerifyNameDone(context: Context, state: State): Update<State, Action> {
  const { verifyNameState } = state;
  if (verifyNameState.done === verifyName.DoneState.ERROR) {
    return [state, () => setErrorAction(CardIssuingError.Generic)];
  }

  const firstName = verifyNameState[verifyName.Field.FirstName];
  const lastName = verifyNameState[verifyName.Field.LastName];
  return [
    {
      ...state,
      cardCustomizationState: cardCustomization.createState({
        ...state.cardCustomizationState,
        signatureText: `${firstName} ${lastName}`.trim(),
      }),
      verifyNameState,
    },
    navigateNextAction,
  ];
}

function handleSetError(state: State, action: SetErrorAction): Update<State, Action> {
  const { error } = action;
  const navigation = {
    current: ERROR_FLOW[0],
    flow: ERROR_FLOW,
  };
  return [{ ...state, navigation, error }, null];
}

function handleToggleModal(state: State, { value }: ToggleModalAction): Update<State, Action> {
  return [{ ...state, modalOpen: value ?? !state.modalOpen }, null];
}

function handleUserChangeConfirmPin(
  state: State,
  action: UserChangeConfirmPinAction
): Update<State, Action> {
  const { pin } = state;
  const { confirmPin } = action;
  if (pin === confirmPin) {
    return [{ ...state, confirmPin }, navigateNextAction];
  } else if (confirmPin.length < PIN_LENGTH) {
    return [{ ...state, confirmPin }, null];
  }

  // TODO(cvu): add pin does not match validation
  return [{ ...state, confirmPin }, null];
}

function handleUserChangeSetPin(
  state: State,
  action: UserChangeSetPinAction
): Update<State, Action> {
  const { pin } = action;
  // TODO(cvu): add complex pin validation
  const maybeNextAction = pin.length === PIN_LENGTH ? navigateNextAction : null;
  return [{ ...state, pin }, maybeNextAction];
}

function handleUserClickCloseButton(state: State): Update<State, Action> {
  const { current, flow } = state.navigation;
  if (current === flow[flow.length - 1]) {
    return [state, () => of(toggleModalAction(false), doneAction())];
  }
  return [state, () => toggleModalAction(false)];
}

function handleUserClickNextButton(context: Context, state: State): Update<State, Action> {
  return [state, navigateNextAction];
}

export const update =
  (context: Context) =>
  (state: State, action: Action): Update<State, Action> => {
    switch (action.type) {
      case ActionType.CreateCardResponseReceived:
        return handleCreateCardResponseReceived(state, action);
      case ActionType.CreateCardResponseRejected:
        return handleCreateCardResponseRejected(context, state, action);
      case ActionType.Done:
        return handleDone(state);
      case ActionType.GetOrCreateComplianceVerificationReceived:
        return handleGetOrCreateComplianceVerificationReceived(context, state, action);
      case ActionType.GetOrCreateComplianceVerificationRejected:
        return handleGetOrCreateComplianceVerificationRejected(context, state, action);
      case ActionType.Initialize:
        return handleInitialize(context, state, action);
      case ActionType.NavigateBack:
        return handleNavigateBack(context, state);
      case ActionType.NavigateNext:
        return handleNavigateNext(context, state);
      case ActionType.NavigateToScreen:
        return handleNavigateToScreen(context, state, action);
      case ActionType.OnCardShippingDone:
        return handleOnCardShippingDone(context, state);
      case ActionType.OnVerifyNameDone:
        return handleOnVerifyNameDone(context, state);
      case ActionType.SetError:
        return handleSetError(state, action);
      case ActionType.ToggleModal:
        return handleToggleModal(state, action);
      case ActionType.UserChangeConfirmPin:
        return handleUserChangeConfirmPin(state, action);
      case ActionType.UserChangeSetPin:
        return handleUserChangeSetPin(state, action);
      case ActionType.UserClickAddToDigitalWallet:
        // TODO(cvu): Add functionally for this action
        return [state, null];
      case ActionType.UserClickBackButton:
        return [state, navigateBackAction];
      case ActionType.UserClickCloseButton:
        return handleUserClickCloseButton(state);
      case ActionType.UserClickNextButton:
        return handleUserClickNextButton(context, state);
      case ActionType.UserClickSkipAddToDigitalWallet:
        // TODO(cvu): Add functionally for this action
        return [state, null];
      case cardCustomization.ActionType.CreateCardCustomizationReceived:
      case cardCustomization.ActionType.CreateCardCustomizationRejected:
      case cardCustomization.ActionType.Initialize:
      case cardCustomization.ActionType.UserChangeSignatureFont:
      case cardCustomization.ActionType.UserChangeSignatureText:
      case cardCustomization.ActionType.UserClickNextAction:
      case cardCustomization.ActionType.UserToggleCustomizeSignature: {
        const [cardCustomizationState, nextAction] = cardCustomization.update({
          bankingWebCardService: context.bankingWebCardService,
          textRenderer: context.textRenderer,
          uuid: context.uuid,
        })(state.cardCustomizationState, action);
        return [{ ...state, cardCustomizationState }, nextAction];
      }
      case cardCustomization.ActionType.Done: {
        const [cardCustomizationState] = cardCustomization.update({
          bankingWebCardService: context.bankingWebCardService,
          textRenderer: context.textRenderer,
          uuid: context.uuid,
        })(state.cardCustomizationState, action);
        return [{ ...state, cardCustomizationState }, navigateNextAction];
      }
      case cardShipping.ActionType.Error:
      case cardShipping.ActionType.Done:
      case cardShipping.ActionType.Initialize:
      case cardShipping.ActionType.GetCountryAddressDataReceived:
      case cardShipping.ActionType.GetCountryAddressDataRejected:
      case cardShipping.ActionType.NavigateToScreen:
      case cardShipping.ActionType.UserChangeChosenAddress:
      case cardShipping.ActionType.UserChangeAddress:
      case cardShipping.ActionType.UserClickNextButton: {
        const [cardShippingState, nextAction] = cardShipping.update({
          sentry: context.sentry,
          webService: context.webService,
        })(state.cardShippingState, action);

        if (action.type === cardShipping.ActionType.Done) {
          return [{ ...state, cardShippingState, loading: true }, onCardShippingDoneAction];
        }

        if (action.type === cardShipping.ActionType.Error) {
          return [{ ...state, cardShippingState }, () => setErrorAction(CardIssuingError.Generic)];
        }

        return [{ ...state, cardShippingState }, nextAction];
      }
      case verifyName.ActionType.Done:
      case verifyName.ActionType.Initialize:
      case verifyName.ActionType.UpdatePersonProfileReceived:
      case verifyName.ActionType.UpdatePersonProfileRejected:
      case verifyName.ActionType.UserChangeInputFieldValue:
      case verifyName.ActionType.UserClickNext: {
        const [verifyNameState, nextAction] = verifyName.update({
          personProfileService: context.personProfileService,
          sentry: context.sentry,
          uuid: context.uuid,
        })(state.verifyNameState, action);

        const work =
          action.type === verifyName.ActionType.Done ? onVerifyNameDoneAction : nextAction;
        return [{ ...state, verifyNameState }, work];
      }
    }
  };

const cardIssuing = (seed: State, context: Context) => {
  const w = workflow(update(context), seed);
  return {
    states: w.states,
    updates: w.updates,
    emit: w.emit,
  };
};

export default cardIssuing;
