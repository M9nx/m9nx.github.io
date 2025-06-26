import { from } from "rxjs";
import { Sentry } from "/src/types/sentry";
import { CountryAddressData } from "/src/protos/squareup/address/country_data";
import {
  GetCountryAddressDataRequest,
  GetCountryAddressDataResponse,
  WebService,
} from "/src/protos/squareup/bbfrontend/v1/web_service";
import { GlobalAddress } from "/src/protos/squareup/common/location";
import { Country } from "/src/protos/squareup/common/countries";
import { Update } from "/src/lib/workflow";
import { createValidation, ValidationRecord } from "/src/util/debit-card/validate-address";

export enum Screen {
  EnterAddress,
  ConfirmAddress,
}

// TODO(cvu): to be used when we validate address and normalize it for them
export enum ChosenAddress {
  SystemNormalized = 0,
  UserInput = 1,
}

export enum AddressError {
  Empty = "ADDRESS_ERROR_EMPTY",
}

export enum AddressField {
  AddressLine1 = "addressLine1",
  AddressLine2 = "addressLine2",
  AdministrativeDistrictLevel1 = "administrativeDistrictLevel1",
  Locality = "locality",
  PostalCode = "postalCode",
}

export interface State {
  readonly address: GlobalAddress;
  // TODO(cvu): use when normalizing address is supported
  readonly chosenAddress: ChosenAddress;
  // values that administrativeDistrictLevel1 can be
  readonly countryAddressData: CountryAddressData | null;
  readonly loading: boolean;
  // TODO(cvu): to be used when we validate address and normalize it for them
  readonly normalizedAddress: GlobalAddress | null;
  readonly screen: Screen;
  // TODO(cvu): to be used when we validate address and normalize it for them
  readonly validation: ValidationRecord;
}

export const INITIAL_STATE: State = {
  address: GlobalAddress.create({
    // TODO(cvu): Support other countries in the future
    // https://jira.sqprod.co/browse/SQCARD-2656
    countryCode: Country.US,
  }),
  loading: false,
  // TODO(cvu): use when normalizing address is supported and set to SystemNormalized
  chosenAddress: ChosenAddress.UserInput,
  countryAddressData: null,
  normalizedAddress: null,
  screen: Screen.EnterAddress,
  validation: {
    errors: {
      [AddressField.AddressLine1]: [],
      [AddressField.AdministrativeDistrictLevel1]: [],
      [AddressField.Locality]: [],
      [AddressField.PostalCode]: [],
    },
    valid: true,
  },
};

export const createState = (overrides: Partial<State> = {}): State => ({
  ...INITIAL_STATE,
  ...overrides,
});

export interface Context {
  readonly sentry: Sentry;
  readonly webService: WebService;
}

// ===== UTILS ===== //
export const getAdministrativeDistrictLevelOneList = (countryAddressData: CountryAddressData) =>
  countryAddressData.admin1Values.map((admin1Value) => admin1Value.value);

export enum ActionType {
  Done = "CARD_SHIPPING_DONE",
  Error = "CARD_SHIPPING_ERROR",
  Initialize = "CARD_SHIPPING_INITIALIZE",
  GetCountryAddressDataReceived = "CARD_SHIPPING_GET_COUNTRY_ADDRESS_DATA_RECEIVED",
  GetCountryAddressDataRejected = "CARD_SHIPPING_GET_COUNTRY_ADDRESS_DATA_REJECTED",
  NavigateToScreen = "CARD_SHIPPING_NAVIGATE_TO_SCREEN",
  UserChangeAddress = "CARD_SHIPPING_USER_CHANGE_ADDRESS",
  UserChangeChosenAddress = "CARD_SHIPPING_USER_CHANGE_CHOSEN_ADDRESS",
  UserClickNextButton = "CARD_SHIPPING_USER_CLICK_NEXT_BUTTON",
  ValidateAddressReceived = "CARD_SHIPPING_VALIDATE_ADDRESS_RECEIVED",
  ValidateAddressRejected = "CARD_SHIPPING_VALIDATE_ADDRESS_REJECTED",
}

interface DoneAction {
  readonly type: ActionType.Done;
}

interface ErrorAction {
  readonly type: ActionType.Error;
}

interface InitializeAction {
  readonly type: ActionType.Initialize;
}

interface GetCountryAddressDataReceivedAction {
  readonly type: ActionType.GetCountryAddressDataReceived;
  readonly response: GetCountryAddressDataResponse;
}

interface GetCountryAddressDataRejectedAction {
  readonly type: ActionType.GetCountryAddressDataRejected;
}

interface NavigateToScreenAction {
  readonly type: ActionType.NavigateToScreen;
  readonly screen: Screen;
}

interface UserChangeAddressAction {
  readonly type: ActionType.UserChangeAddress;
  readonly field: AddressField;
  readonly value: string;
}

interface UserChangeChosenAddressAction {
  readonly type: ActionType.UserChangeChosenAddress;
  readonly chosenAddress: ChosenAddress;
}

interface UserClickNextButtonAction {
  readonly type: ActionType.UserClickNextButton;
}

export type Action =
  | DoneAction
  | ErrorAction
  | InitializeAction
  | GetCountryAddressDataReceivedAction
  | GetCountryAddressDataRejectedAction
  | NavigateToScreenAction
  | UserChangeAddressAction
  | UserChangeChosenAddressAction
  | UserClickNextButtonAction;

/**
 * IMPORTANT(cvu): The done action needs to be called explicitly instead of setting state.
 * If Done is set in the state, instead of calling the action, the main workflow will not handle it.
 *
 * Observer watching the done state of these sub-workflow would be better. Noting to myself(cvu) as a
 * possible workflow improvement.
 */
export const doneAction = (): DoneAction => ({
  type: ActionType.Done,
});

export const errorAction = (): ErrorAction => ({
  type: ActionType.Error,
});

export const initializeAction = (): InitializeAction => ({
  type: ActionType.Initialize,
});

export const getCountryAddressDataReceivedAction = (
  response: GetCountryAddressDataResponse
): GetCountryAddressDataReceivedAction => ({
  type: ActionType.GetCountryAddressDataReceived,
  response,
});

export const getCountryAddressDataRejectedAction = (): GetCountryAddressDataRejectedAction => ({
  type: ActionType.GetCountryAddressDataRejected,
});

export const navigateToScreenAction = (screen: Screen): NavigateToScreenAction => ({
  type: ActionType.NavigateToScreen,
  screen,
});

export const userChangeChosenAddressAction = (
  chosenAddress: ChosenAddress
): UserChangeChosenAddressAction => ({
  type: ActionType.UserChangeChosenAddress,
  chosenAddress,
});

export const userChangeAddressAction = (
  field: AddressField,
  value: string
): UserChangeAddressAction => ({
  type: ActionType.UserChangeAddress,
  field,
  value,
});

export const userClickNextButtonAction = (): UserClickNextButtonAction => ({
  type: ActionType.UserClickNextButton,
});

function handleInitialize(context: Context, state: State): Update<State, Action> {
  const { countryAddressData } = state;
  if (countryAddressData == null) {
    const work = () => {
      const response = context.webService
        .getCountryAddressData(
          GetCountryAddressDataRequest.create({
            // TODO(cvu): Support other countries in the future
            // https://jira.sqprod.co/browse/SQCARD-2656
            countryCode: Country.US,
          })
        )
        .then(getCountryAddressDataReceivedAction, getCountryAddressDataRejectedAction);
      return from(response);
    };
    return [state, work];
  }
  return [state, null];
}

function handleGetCountryAddressDataReceived(
  state: State,
  action: GetCountryAddressDataReceivedAction
): Update<State, Action> {
  const countryAddressData = action.response.countryAddressData || null;
  return [{ ...state, countryAddressData }, null];
}

function handleUserChangeAddress(
  state: State,
  action: UserChangeAddressAction
): Update<State, Action> {
  const { address } = state;
  const addressRecord = address.toJSON() as Record<string, string>;
  switch (action.field) {
    case AddressField.AddressLine1: {
      addressRecord.addressLine1 = action.value;
      break;
    }
    case AddressField.AddressLine2: {
      addressRecord.addressLine2 = action.value;
      break;
    }
    case AddressField.PostalCode: {
      addressRecord.postalCode = action.value;
      break;
    }
    case AddressField.AdministrativeDistrictLevel1: {
      addressRecord.administrativeDistrictLevel1 = action.value;
      break;
    }
    case AddressField.Locality: {
      addressRecord.locality = action.value;
      break;
    }
  }

  return [{ ...state, address: GlobalAddress.fromObject(addressRecord) }, null];
}

function handleUserClickNextButton(context: Context, state: State): Update<State, Action> {
  const { address, screen } = state;

  if (screen === Screen.EnterAddress) {
    const validation = createValidation(address);

    const work = () => {
      if (!validation.valid) {
        return null;
      }
      return doneAction();
    };
    return [{ ...state, loading: validation.valid, validation }, work];
  }
  return [state, doneAction];
}

export const update =
  (context: Context) =>
  (state: State, action: Action): Update<State, Action> => {
    switch (action.type) {
      case ActionType.Done:
      case ActionType.Error:
        return [state, null];
      case ActionType.Initialize:
        return handleInitialize(context, state);
      case ActionType.GetCountryAddressDataReceived:
        return handleGetCountryAddressDataReceived(state, action);
      case ActionType.GetCountryAddressDataRejected:
        return [state, null];
      case ActionType.NavigateToScreen: {
        const { screen } = action;
        return [{ ...state, screen }, null];
      }
      case ActionType.UserChangeAddress:
        return handleUserChangeAddress(state, action);
      case ActionType.UserChangeChosenAddress:
        return [{ ...state, chosenAddress: action.chosenAddress }, null];
      case ActionType.UserClickNextButton:
        return handleUserClickNextButton(context, state);
    }
  };
