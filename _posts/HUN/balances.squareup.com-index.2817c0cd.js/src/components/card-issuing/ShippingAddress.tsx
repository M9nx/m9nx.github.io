import { useTranslation } from "react-i18next";
import { MarketButton } from "@market/react";
import { Address, AddressProps } from "../ui/address/Address";
import { Screen } from "/src/components/ui/modals/Screen";

export interface ShippingAddressProps extends AddressProps {
  readonly loading: boolean;
  readonly onNextClick: () => void;
}

export function ShippingAddress({
  administrativeDistrictLevelOneList,
  addressLineOne,
  addressLineOneError,
  addressLineTwo,
  loading,
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
  onNextClick,
}: ShippingAddressProps) {
  const { t } = useTranslation("card-issuing", { keyPrefix: "shippingAddress" });

  const buttons = [
    <MarketButton
      key={t("buttonContinueTitle")}
      rank="primary"
      isLoading={loading}
      onClick={onNextClick}
    >
      {t("buttonContinueTitle")}
    </MarketButton>,
  ];

  const content = (
    <>
      <Address
        administrativeDistrictLevelOneList={administrativeDistrictLevelOneList}
        addressLineOne={addressLineOne}
        addressLineOneError={addressLineOneError}
        addressLineTwo={addressLineTwo}
        locality={locality}
        localityError={localityError}
        administrativeDistrictLevelOne={administrativeDistrictLevelOne}
        administrativeDistrictLevelOneError={administrativeDistrictLevelOneError}
        postalCode={postalCode}
        postalCodeError={postalCodeError}
        onAddressLineOneChange={onAddressLineOneChange}
        onAddressLineTwoChange={onAddressLineTwoChange}
        onLocalityChange={onLocalityChange}
        onAdministrativeDistrictLevelOneChange={onAdministrativeDistrictLevelOneChange}
        onPostalCodeChange={onPostalCodeChange}
      />
    </>
  );

  return <Screen buttons={buttons} content={content} title={t("title")} />;
}
