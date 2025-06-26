import { ExpiryDate } from "field-kit";
import { TFunction, useTranslation } from "react-i18next";
import {
  CardDetailsError,
  CardDetailsInputError,
  CardDetailsValidationErrors,
  userChangeCvcAction,
  userChangeExpiryDateAction,
  userClickNextAction,
} from "/src/workflow/card-activation";
import { CardActivationEnterDetails } from "/src/components/card-activation/CardActivationEnterDetails";
import { ConnectedProps } from "./ConnectedCardActivationModal";

const getCardDetailsErrorText = (t: TFunction) => (errors: CardDetailsError[]) => {
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i];
    switch (error) {
      case CardDetailsError.InvalidCvcExpiryDate:
        return t("errors.cardDetailsDoesNotMatch");
    }
  }
  return "";
};

const getCvcErrorText = (t: TFunction) => (errors: CardDetailsInputError[]) => {
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i];
    switch (error) {
      case CardDetailsInputError.Empty:
        return t("errors.cvcEmpty");
    }
  }
  return "";
};

const getExpiryDateErrorText = (t: TFunction) => (errors: CardDetailsInputError[]) => {
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i];
    switch (error) {
      case CardDetailsInputError.Empty:
        return t("errors.expiryDateEmpty");
    }
  }
  return "";
};

export const getErrorText = (t: TFunction) => (errors: CardDetailsValidationErrors) => {
  const cvcError = getCvcErrorText(t)(errors.cvc);
  const expiryDateError = getExpiryDateErrorText(t)(errors.expiryDate);
  return {
    // Prioritize input error over screen error
    cardDetailsError:
      cvcError === "" && expiryDateError === ""
        ? getCardDetailsErrorText(t)(errors.cardDetails)
        : "",
    cvcError,
    expiryDateError,
  };
};

export function ConnectedCardActivationEnterDetails({ state, dispatch }: ConnectedProps) {
  const { t } = useTranslation("card-activation", { keyPrefix: "enterDetails" });

  const { cardDetailsError, cvcError, expiryDateError } = getErrorText(t)(
    state.cardDetailsValidationErrors
  );

  return (
    <CardActivationEnterDetails
      cardDetailsError={cardDetailsError}
      cvc={state.cvcValue}
      cvcError={cvcError}
      expiryDate={state.expiryDateValue}
      expiryDateError={expiryDateError}
      loading={state.isLoading}
      onCvcChange={(value: string) => dispatch(userChangeCvcAction(value))}
      onExpiryDateChange={(value: ExpiryDate) => dispatch(userChangeExpiryDateAction(value))}
      onNextClick={() => dispatch(userClickNextAction())}
    />
  );
}
