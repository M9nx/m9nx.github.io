import { GlobalAddress } from "/src/protos/squareup/common/location";

export const formatAddress = (address: GlobalAddress): string[] => {
  const { addressLine1, addressLine2, locality, administrativeDistrictLevel1, postalCode } =
    address;

  const lineOne = addressLine2 ? `${addressLine1}, ${addressLine2}` : addressLine1;
  const lineTwo = `${locality}, ${administrativeDistrictLevel1} ${postalCode}`;
  return [lineOne, lineTwo];
};
