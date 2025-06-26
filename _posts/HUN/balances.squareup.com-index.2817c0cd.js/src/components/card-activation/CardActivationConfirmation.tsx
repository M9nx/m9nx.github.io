import { useTranslation } from "react-i18next";
import classNames from "classnames";
import ConfirmationIcon from "tsx:/public/assets/svg/confirmation.svg";
import { button, container, description, heading } from "./CardActivationConfirmation.css";
import { MarketButton } from "@market/react";

export interface CardActivationConfirmationProps {
  readonly onDoneClick: () => void;
}

export function CardActivationConfirmation({ onDoneClick }: CardActivationConfirmationProps) {
  const { t } = useTranslation("card-activation", { keyPrefix: "confirmation" });

  return (
    <div className={container}>
      <ConfirmationIcon />
      <h3 className={classNames("heading-30", heading)}>{t("title")}</h3>
      <p className={classNames("paragraph-30", description)}>{t("description")}</p>
      <MarketButton className={button} rank="primary" onClick={onDoneClick}>
        {t("buttonText")}
      </MarketButton>
    </div>
  );
}
