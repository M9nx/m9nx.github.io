import classNames from "classnames";
import { MarketButton } from "@market/react";
import {
  container,
  header,
  description,
  subtitle,
  subtext,
  button,
} from "./CardOrderedConfirmation.css";
import { CardOnWay } from "/src/components/card-issuing/CardOnWay";
import { useTranslation } from "react-i18next";

export interface CardOrderedConfirmationProps {
  readonly cardCustomization: string;
  readonly estimateArrivalDate: string;
  readonly onDoneClick: () => void;
}

export function CardOrderedConfirmation({
  estimateArrivalDate,
  onDoneClick,
}: CardOrderedConfirmationProps) {
  const { t } = useTranslation("card-issuing", { keyPrefix: "cardConfirmation" });

  return (
    <main className={container}>
      <h2 className={header}>{t("title")}</h2>
      <div>
        <CardOnWay />
      </div>
      <div className={description}>
        <h3 className={subtitle}>{t("subtitle")}</h3>
        {estimateArrivalDate.length > 0 ? (
          <p className={classNames(subtext, "paragraph-20")}>
            {t("estimateArrivalText", {
              replace: {
                estimateArrivalDate,
              },
            })}
          </p>
        ) : null}
      </div>
      <MarketButton className={button} rank="primary" onClick={onDoneClick}>
        {t("doneButtonText")}
      </MarketButton>
    </main>
  );
}
