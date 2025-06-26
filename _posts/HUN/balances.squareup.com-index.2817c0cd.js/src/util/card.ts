import {
  Card,
  CardFulfillment,
  CardStatus,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import { getImageUriFromCardCustomization } from "/src/util/image-bytes-utils";
import { ExpiryDateFormatter } from "field-kit";

/**
 * Utilities to help parse Card
 */
export const getBusinessName = (card: Card): string => {
  return (
    card?.fulfillment?.customization?.cardText?.find(
      (text) => text.type === CardFulfillment.Customization.CardText.Type.BUSINESS_NAME
    )?.text || ""
  );
};

export const getCardholder = (card: Card): string => {
  return (
    card?.fulfillment?.customization?.cardText?.find(
      (text) => text.type === CardFulfillment.Customization.CardText.Type.CARD_HOLDER
    )?.text || ""
  );
};

export const getCardSignatureUri = (card: Card): string => {
  const signature = card?.fulfillment?.customization?.signature;
  if (signature) {
    return getImageUriFromCardCustomization(signature);
  }
  return "";
};

export const getCvc = (card: Card): string => {
  return card?.securityCode || "";
};

export const getExpirationDateString = (card: Card): string => {
  const formatter = new ExpiryDateFormatter();
  return card.expiration
    ? formatter.format({
        month: card.expiration.monthOfYear,
        year: card.expiration.year,
      })
    : "";
};

export const getFullPan = (card: Card): string => {
  return card.fullPan || "";
};

export const isActivatable = (card: Card): boolean =>
  card?.status === CardStatus.ISSUED_ACTIVATABLE;
