import { useTranslation } from "react-i18next";
import { MarketButton, MarketField, MarketHeader } from "@market/react";
import { ExpiryDate, ExpiryDateFormatter } from "field-kit";
import { InputTextField } from "/src/components/ui/form/InputTextField";
import * as styles from "./CardActivationEnterDetails.css";

export interface CardActivationEnterDetailsProps {
  readonly cardDetailsError: string;
  readonly cvc: string;
  readonly cvcError: string;
  readonly expiryDate: ExpiryDate | null;
  readonly expiryDateError: string;
  readonly loading?: boolean;
  readonly onCvcChange: (value: string) => void;
  readonly onExpiryDateChange: (value: ExpiryDate) => void;
  readonly onNextClick: () => void;
}

export function CardActivationEnterDetails({
  cardDetailsError,
  cvc,
  cvcError,
  expiryDate,
  expiryDateError,
  loading = false,
  onCvcChange,
  onExpiryDateChange,
  onNextClick,
}: CardActivationEnterDetailsProps) {
  const { t } = useTranslation("card-activation", { keyPrefix: "enterDetails" });
  return (
    <>
      <MarketHeader>
        <h2>{t("title")}</h2>
      </MarketHeader>
      <main className={styles.main}>
        <p className="paragraph-30">{t("description")}</p>
        <MarketField className={styles.inputFieldsContainer} invalid={cardDetailsError.length > 0}>
          <div className={styles.inputFields}>
            <InputTextField<ExpiryDate>
              error={expiryDateError}
              formatter={new ExpiryDateFormatter()}
              label={t("inputLabelExpiryDate")}
              name={t("inputLabelExpiryDate")}
              value={expiryDate || undefined}
              onTextChange={onExpiryDateChange}
            />
            <InputTextField
              error={cvcError}
              label={t("inputLabelCVC")}
              maxlength={4}
              name={t("inputLabelCVC")}
              value={cvc}
              onTextChange={onCvcChange}
            />
          </div>
          <small slot="error">{cardDetailsError}</small>
        </MarketField>
        <MarketButton
          className={styles.button}
          rank="primary"
          isLoading={loading}
          onClick={onNextClick}
        >
          {t("buttonText")}
        </MarketButton>
      </main>
    </>
  );
}
