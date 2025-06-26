import { TFunction } from "i18next";
import assert from "/src/util/assert";
import { ShippingAddress } from "/src/components/card-issuing/ShippingAddress";
import { ConnectedProps } from "/src/components/card-issuing/connected/ConnectedCardIssuingModal";
import {
  AddressError,
  AddressField,
  getAdministrativeDistrictLevelOneList,
  userChangeAddressAction,
  userClickNextButtonAction,
} from "/src/workflow/card-issuing/card-shipping";
import { useTranslation } from "react-i18next";
import { MarketSelectDetail } from "/src/components/ui/util/with-market-custom-event";
import {
  AddressValidationFields,
  PostalCodeError,
  ValidationRecord,
} from "/src/util/debit-card/validate-address";

export const getErrorString =
  (t: TFunction) => (field: AddressValidationFields, validationRecord: ValidationRecord) => {
    if (validationRecord.valid) {
      return "";
    }

    switch (validationRecord.errors[field][0]) {
      case AddressError.Empty:
        return t(`shippingAddress.errors.emptyField`, {
          ns: "card-issuing",
          replace: {
            field: t(`address.label.${field}`, {
              ns: "components",
            }),
          },
        });
      case PostalCodeError.Invalid:
        return t(`shippingAddress.errors.invalidPostalCode`, {
          ns: "card-issuing",
          replace: {
            field: t(`address.label.${field}`, {
              ns: "components",
            }),
          },
        });
    }
  };

export function ConnectedShippingAddress({ state, dispatch }: ConnectedProps) {
  const { t } = useTranslation();

  const getErrorStringFunc = getErrorString(t);

  const mapToProps = ({ state, dispatch }: ConnectedProps) => ({
    administrativeDistrictLevelOneList: state.cardShippingState.countryAddressData
      ? getAdministrativeDistrictLevelOneList(state.cardShippingState.countryAddressData)
      : [],
    addressLineOne: state.cardShippingState.address.addressLine1,
    addressLineOneError: getErrorStringFunc(
      AddressField.AddressLine1,
      state.cardShippingState.validation
    ),
    addressLineTwo: state.cardShippingState.address.addressLine2,
    loading: state.cardShippingState.loading || state.loading,
    locality: state.cardShippingState.address.locality,
    localityError: getErrorStringFunc(AddressField.Locality, state.cardShippingState.validation),
    administrativeDistrictLevelOne: state.cardShippingState.address.administrativeDistrictLevel1,
    administrativeDistrictLevelOneError: getErrorStringFunc(
      AddressField.AdministrativeDistrictLevel1,
      state.cardShippingState.validation
    ),
    postalCode: state.cardShippingState.address.postalCode,
    postalCodeError: getErrorStringFunc(
      AddressField.PostalCode,
      state.cardShippingState.validation
    ),
    onAddressLineOneChange: (value: string) =>
      dispatch(userChangeAddressAction(AddressField.AddressLine1, value)),
    onAddressLineTwoChange: (value: string) =>
      dispatch(userChangeAddressAction(AddressField.AddressLine2, value)),
    onLocalityChange: (value: string) =>
      dispatch(userChangeAddressAction(AddressField.Locality, value)),
    onAdministrativeDistrictLevelOneChange: ({ value }: MarketSelectDetail) => {
      // Value can string or array of any value. Asserting to ensure the value is a string
      assert(typeof value === "string", "Market select value is not a string");
      dispatch(userChangeAddressAction(AddressField.AdministrativeDistrictLevel1, value as string));
    },
    onPostalCodeChange: (value: string) =>
      dispatch(userChangeAddressAction(AddressField.PostalCode, value)),
    onNextClick: () => dispatch(userClickNextButtonAction()),
  });

  return <ShippingAddress {...mapToProps({ state, dispatch })} />;
}
