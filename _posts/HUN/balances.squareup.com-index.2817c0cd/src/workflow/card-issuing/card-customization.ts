import { from } from "rxjs";
import {
  BankingWebCardService,
  CreateCardCustomizationRequest,
  CreateCardCustomizationResponse,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import { Update } from "/src/lib/workflow";
import { SignatureFont } from "/src/models/card-customization";
import { containsEmoji, stripEmoji } from "/src/util/string";
import {
  BUSINESS_BANKING_CARD_SIGNATURE_RECT,
  BUSINESS_BANKING_LOWER_RIGHT_RENDER_STRATEGY,
  ITextRendererCtor,
} from "/src/util/text-renderer";

export const MAXIMUM_CUSTOMIZATION_LENGTH = 21;
const MIME_TYPE = "image/png";

export enum CardCustomizationSignatureError {
  ContainsEmoji = "CARD_CUSTOMIZATION_SIGNATURE_ERROR_CONTAINS_EMOJI",
  Empty = "CARD_CUSTOMIZATION_SIGNATURE_ERROR_EMPTY",
  ExceededMaxLength = "CARD_CUSTOMIZATION_SIGNATURE_ERROR_EXCEEDED_MAX_LENGTH",
}

export interface State {
  readonly cardInvitationToken: string;
  readonly cardCustomizationToken: string;
  readonly customSignatureInputError: CardCustomizationSignatureError[];
  readonly done: boolean;
  readonly loading: boolean;
  readonly signatureFont: SignatureFont;
  readonly signatureInputText: string;
  readonly signatureText: string;
  readonly toggleCustomSignature: boolean;
}

export const INITIAL_STATE: State = {
  cardInvitationToken: "",
  cardCustomizationToken: "",
  customSignatureInputError: [],
  done: false,
  loading: false,
  signatureFont: SignatureFont.AlexBrush,
  signatureInputText: "",
  signatureText: "",
  toggleCustomSignature: false,
};

export const createState = (overrides: Partial<State> = {}): State => ({
  ...INITIAL_STATE,
  ...overrides,
});

export interface Context {
  readonly bankingWebCardService: BankingWebCardService;
  readonly textRenderer: ITextRendererCtor;
  readonly uuid: () => string;
}

const renderCardCustomization =
  (TextRenderer: ITextRendererCtor) =>
  (state: State): Promise<Uint8Array | undefined> =>
    state.toggleCustomSignature
      ? new TextRenderer(
          // Note(cvu): This value was copied from dashboard so the image generated
          // in banking-web will be the same as the one generated in dashboard.
          // https://github.com/squareup/dashboard/blob/4642381a3237dd628fbe821ef1a1d4bdfbba298e/frontend/%40banking/applet-engine/addon/workflows/banking/checking/onboarding/index.ts#L866
          100,
          state.signatureFont,
          state.signatureText,
          BUSINESS_BANKING_CARD_SIGNATURE_RECT,
          BUSINESS_BANKING_LOWER_RIGHT_RENDER_STRATEGY
        ).toBytes()
      : Promise.resolve(undefined);

export enum ActionType {
  CreateCardCustomizationReceived = "CARD_CUSTOMIZATION_CREATE_CARD_CUSTOMIZATION_RECEIVED",
  CreateCardCustomizationRejected = "CARD_CUSTOMIZATION_CREATE_CARD_CUSTOMIZATION_REJECTED",
  Done = "CARD_CUSTOMIZATION_DONE",
  Initialize = "CARD_CUSTOMIZATION_INITIALIZE",
  UserChangeSignatureFont = "CARD_CUSTOMIZATION_USER_CHANGE_SIGNATURE_FONT",
  UserChangeSignatureText = "CARD_CUSTOMIZATION_USER_CHANGE_SIGNATURE_TEXT",
  UserToggleCustomizeSignature = "CARD_CUSTOMIZATION_USER_TOGGLE_CUSTOMIZE_SIGNATURE",
  UserClickNextAction = "CARD_CUSTOMIZATION_USER_CLICK_NEXT",
}

interface CreateCardCustomizationReceivedAction {
  readonly type: ActionType.CreateCardCustomizationReceived;
  readonly response: CreateCardCustomizationResponse;
}

interface CreateCardCustomizationRejectedAction {
  readonly type: ActionType.CreateCardCustomizationRejected;
  readonly error: unknown;
}

/**
 * IMPORTANT(cvu): The done action needs to be called explicitly instead of setting state.
 * If Done is set in the state, instead of calling the action, the main workflow will not handle it.
 *
 * Observer watching the done state of these sub-workflow would be better. Noting to myself(cvu) as a
 * possible workflow improvement.
 */
interface DoneAction {
  readonly type: ActionType.Done;
}

interface InitializeAction {
  readonly type: ActionType.Initialize;
  readonly cardInvitationToken: string;
  readonly signatureText: string;
}

interface UserChangeSignatureFontAction {
  readonly type: ActionType.UserChangeSignatureFont;
  readonly signatureFont: SignatureFont;
}

interface UserChangeSignatureTextAction {
  readonly type: ActionType.UserChangeSignatureText;
  readonly signatureInputText: string;
}

interface UserToggleCustomizeSignatureAction {
  readonly type: ActionType.UserToggleCustomizeSignature;
  readonly value: boolean;
}

interface UserClickNextAction {
  readonly type: ActionType.UserClickNextAction;
}

export type Action =
  | CreateCardCustomizationReceivedAction
  | CreateCardCustomizationRejectedAction
  | DoneAction
  | InitializeAction
  | UserToggleCustomizeSignatureAction
  | UserChangeSignatureFontAction
  | UserChangeSignatureTextAction
  | UserClickNextAction;

export const createCardCustomizationReceivedAction = (
  response: CreateCardCustomizationResponse
): CreateCardCustomizationReceivedAction => ({
  type: ActionType.CreateCardCustomizationReceived,
  response,
});

export const createCardCustomizationRejectedAction = (
  // eslint-disable-next-line
  error: any
): CreateCardCustomizationRejectedAction => ({
  type: ActionType.CreateCardCustomizationRejected,
  error,
});

export const doneAction = (): DoneAction => ({
  type: ActionType.Done,
});

export const initializeAction = (
  cardInvitationToken: string,
  signatureText: string
): InitializeAction => ({
  type: ActionType.Initialize,
  cardInvitationToken,
  signatureText,
});

export const userChangeSignatureFontAction = (
  signatureFont: SignatureFont
): UserChangeSignatureFontAction => ({
  type: ActionType.UserChangeSignatureFont,
  signatureFont,
});

export const userChangeSignatureTextAction = (
  signatureInputText: string
): UserChangeSignatureTextAction => ({
  type: ActionType.UserChangeSignatureText,
  signatureInputText,
});

export const userClickNextAction = (): UserClickNextAction => ({
  type: ActionType.UserClickNextAction,
});

export const userToggleCustomizeSignatureAction = (
  value: boolean
): UserToggleCustomizeSignatureAction => ({
  type: ActionType.UserToggleCustomizeSignature,
  value,
});

function handleCreateCardCustomizationReceived(
  state: State,
  action: CreateCardCustomizationReceivedAction
): Update<State, Action> {
  const { cardCustomizationToken } = action.response;
  return [{ ...state, cardCustomizationToken, loading: false }, doneAction];
}

function handleInitialize(state: State, action: InitializeAction): Update<State, Action> {
  const { cardInvitationToken, signatureText } = action;
  return [
    createState({ cardInvitationToken, signatureText, signatureInputText: signatureText }),
    null,
  ];
}

function handleUserChangeSignatureText(
  state: State,
  action: UserChangeSignatureTextAction
): Update<State, Action> {
  const { signatureInputText } = action;
  const customSignatureInputError = [];

  if (containsEmoji(signatureInputText)) {
    customSignatureInputError.push(CardCustomizationSignatureError.ContainsEmoji);
  }

  if (signatureInputText.length === 0) {
    customSignatureInputError.push(CardCustomizationSignatureError.Empty);
  }

  if (signatureInputText.length > MAXIMUM_CUSTOMIZATION_LENGTH) {
    customSignatureInputError.push(CardCustomizationSignatureError.ExceededMaxLength);
  }

  const signatureText = stripEmoji(signatureInputText)
    .trim()
    .substring(0, MAXIMUM_CUSTOMIZATION_LENGTH);
  return [{ ...state, signatureText, signatureInputText, customSignatureInputError }, null];
}

function handleUserClickNext(context: Context, state: State): Update<State, Action> {
  const { bankingWebCardService } = context;
  const { cardInvitationToken, customSignatureInputError } = state;

  if (customSignatureInputError.length) {
    return [state, null];
  }

  const work = () => {
    const response = renderCardCustomization(context.textRenderer)(state).then((imageBytes) => {
      const request = CreateCardCustomizationRequest.create({
        cardInvitationToken,
        idempotencyKey: context.uuid(),
        imageBytes,
        mimeType: MIME_TYPE,
      });
      return bankingWebCardService
        .createCardCustomization(request)
        .then(createCardCustomizationReceivedAction, createCardCustomizationRejectedAction);
    });
    return from(response);
  };
  return [{ ...state, loading: true }, work];
}

function handleUserToggleCustomizeSignature(
  state: State,
  action: UserToggleCustomizeSignatureAction
): Update<State, Action> {
  const { value } = action;
  // TODO(cvu): person name here
  return [{ ...state, toggleCustomSignature: value }, null];
}

// TODO(cvu): will use context when making requests
export const update =
  (context: Context) =>
  (state: State, action: Action): Update<State, Action> => {
    switch (action.type) {
      case ActionType.CreateCardCustomizationReceived:
        return handleCreateCardCustomizationReceived(state, action);
      case ActionType.CreateCardCustomizationRejected:
        // TODO(cvu): to be implemented
        return [state, null];
      case ActionType.Done:
        return [{ ...state, done: true }, null];
      case ActionType.Initialize:
        return handleInitialize(state, action);
      case ActionType.UserChangeSignatureFont:
        return [{ ...state, signatureFont: action.signatureFont }, null];
      case ActionType.UserChangeSignatureText:
        return handleUserChangeSignatureText(state, action);
      case ActionType.UserClickNextAction:
        return handleUserClickNext(context, state);
      case ActionType.UserToggleCustomizeSignature:
        return handleUserToggleCustomizeSignature(state, action);
    }
  };
