import { useTranslation } from "react-i18next";
import { InputTextField } from "/src/components/ui/form/InputTextField";
import { SelectField } from "/src/components/ui/form/SelectField";
import { MarketRow } from "@market/react";
import USPostalCodeFormatter from "/src/util/field-kit/us-postal-code-formatter";
import { MarketSelectDetail } from "/src/components/ui/util/with-market-custom-event";

export interface AddressProps {
  readonly administrativeDistrictLevelOneList: string[];
  readonly addressLineOne: string;
  readonly addressLineOneError?: string;
  readonly addressLineTwo: string;
  readonly locality: string;
  readonly localityError?: string;
  readonly administrativeDistrictLevelOne: string;
  readonly administrativeDistrictLevelOneError?: string;
  readonly postalCode: string;
  readonly postalCodeError?: string;
  readonly onAddressLineOneChange?: (value: string) => void;
  readonly onAddressLineTwoChange?: (value: string) => void;
  readonly onLocalityChange?: (value: string) => void;
  readonly onAdministrativeDistrictLevelOneChange?: (detail: MarketSelectDetail) => void;
  readonly onPostalCodeChange?: (value: string) => void;
}

export function Address({
  administrativeDistrictLevelOneList,
  addressLineOne,
  addressLineOneError,
  addressLineTwo,
  locality,
  localityError,
  administrativeDistrictLevelOne,
  administrativeDistrictLevelOneError,
  postalCode,
  postalCodeError,
  onAddressLineOneChange,
  onAddressLineTwoChange,
  onLocalityChange,
  onAdministrativeDistrictLevelOneChange,
  onPostalCodeChange,
}: AddressProps) {
  const { t } = useTranslation("components", { keyPrefix: "address" });

  return (
    <div className="market-grid-container">
      <InputTextField
        name="addressLineOne"
        label={t("label.addressLine1")}
        className="market-grid-item-full"
        value={addressLineOne}
        error={addressLineOneError}
        onTextChange={onAddressLineOneChange}
      />
      <InputTextField
        name="addressLineTwo"
        label={t("label.addressLine2")}
        className="market-grid-item-full"
        value={addressLineTwo}
        onTextChange={onAddressLineTwoChange}
      />
      <InputTextField
        name="locality"
        label={t("label.locality")}
        className="market-grid-item-full"
        value={locality}
        error={localityError}
        onTextChange={onLocalityChange}
      />
      <SelectField
        name="administrativeDistrictLevelOne"
        label={t("label.administrativeDistrictLevel1")}
        listRows={administrativeDistrictLevelOneList.map((district) => (
          <MarketRow key={district} value={district}>
            {district}
          </MarketRow>
        ))}
        className="market-grid-item-medium"
        value={administrativeDistrictLevelOne}
        error={administrativeDistrictLevelOneError}
        onSelectChange={onAdministrativeDistrictLevelOneChange}
      ></SelectField>
      <InputTextField
        name="postalCode"
        label={t("label.postalCode")}
        className="market-grid-item-medium"
        formatter={new USPostalCodeFormatter()}
        value={postalCode}
        error={postalCodeError}
        onTextChange={onPostalCodeChange}
      />
    </div>
  );
}
