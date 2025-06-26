import { CardFulfillment } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";

export const getImageUriFromCardCustomization = (
  cardCustomization: CardFulfillment.Customization.Signature
): string => {
  const { imageBytes, mimeType } = cardCustomization;
  if (imageBytes.length === 0 || mimeType.length === 0) {
    return "";
  }
  const imageString = convertUint8ArrayToString(imageBytes);
  return `data:${mimeType};base64,${imageString}`;
};

export const convertUint8ArrayToString = (bytes: Uint8Array): string => {
  const bin = bytes
    .reduce((arr: string[], byte: number): string[] => {
      arr.push(String.fromCharCode(byte));
      return arr;
    }, [])
    .join("");
  return btoa(bin);
};
