import { GlobalAddress } from "/src/protos/squareup/common/location";
import { Country } from "/src/protos/squareup/common/countries";
import { isUspsZip } from "/src/util/debit-card/usps-zip";

export enum AddressError {
  Empty = "ADDRESS_ERROR_EMPTY",
}

export enum PostalCodeError {
  Invalid = "POSTAL_CODE_ERROR_INVALID",
}

export enum AddressField {
  AddressLine1 = "addressLine1",
  AddressLine2 = "addressLine2",
  AdministrativeDistrictLevel1 = "administrativeDistrictLevel1",
  Locality = "locality",
  PostalCode = "postalCode",
  CountryCode = "countryCode",
}

export type AddressValidationFields = Exclude<
  AddressField,
  AddressField.AddressLine2 | AddressField.CountryCode
>;

// TODO(cvu): to be used when we validate address and normalize it for them
export interface ValidationRecord {
  readonly errors: {
    readonly [AddressField.AddressLine1]: AddressError[];
    readonly [AddressField.AdministrativeDistrictLevel1]: AddressError[];
    readonly [AddressField.Locality]: AddressError[];
    readonly [AddressField.PostalCode]: (AddressError | PostalCodeError)[];
  };
  readonly valid: boolean;
}

// TODO(cvu): support Canada
export const DEBIT_CARD_COUNTRIES = [Country.US];

export const createValidation = (address: GlobalAddress): ValidationRecord => {
  const addressLine1 = address[AddressField.AddressLine1];
  const administrativeDistrictLevelOne = address[AddressField.AdministrativeDistrictLevel1];
  const locality = address[AddressField.Locality];
  const postalCode = address[AddressField.PostalCode];
  const countryCode = address[AddressField.CountryCode];

  if (!DEBIT_CARD_COUNTRIES.includes(countryCode)) {
    throw new Error(`Country is not supported: [country=${countryCode}]`);
  }

  const addressLine1Errors: AddressError[] = [];
  const administrativeDistrictLevelOneErrors: AddressError[] = [];
  const localityErrors: AddressError[] = [];
  const postalCodeErrors = validatePostalCode(postalCode, countryCode);

  if (addressLine1 === "") {
    addressLine1Errors.push(AddressError.Empty);
  }
  if (administrativeDistrictLevelOne === "") {
    administrativeDistrictLevelOneErrors.push(AddressError.Empty);
  }
  if (locality === "") {
    localityErrors.push(AddressError.Empty);
  }

  const valid =
    addressLine1Errors.length === 0 &&
    administrativeDistrictLevelOneErrors.length === 0 &&
    localityErrors.length === 0 &&
    postalCodeErrors.length === 0;

  return {
    errors: {
      [AddressField.AddressLine1]: addressLine1Errors,
      [AddressField.AdministrativeDistrictLevel1]: administrativeDistrictLevelOneErrors,
      [AddressField.Locality]: localityErrors,
      [AddressField.PostalCode]: validatePostalCode(postalCode, countryCode),
    },
    valid,
  };
};

export const validatePostalCode = (
  postalCode: string,
  countryCode: Country
): (AddressError | PostalCodeError)[] => {
  const postalCodeErrors = [];
  if (postalCode === "") {
    postalCodeErrors.push(AddressError.Empty);
  }

  // TODO(cvu): support Canada maybe. this code will probably be obsolete when we support Canada
  switch (countryCode) {
    case Country.US:
      if (!isUspsZip(postalCode)) postalCodeErrors.push(PostalCodeError.Invalid);
      break;
    default:
      throw new Error(`Country is not supported: [country=${countryCode}]`);
  }

  return postalCodeErrors;
};
