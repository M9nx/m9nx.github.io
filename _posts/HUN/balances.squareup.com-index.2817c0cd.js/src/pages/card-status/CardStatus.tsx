import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { MarketButton } from "@market/react";
import { Card } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import { useWindowDimensions } from "/src/hooks/use-window-dimensions";
import { CardPreview } from "/src/components/ui/card/CardPreview";
import { Page } from "/src/components/ui/page/Page";
import { PageHeader } from "/src/components/ui/page/PageHeader";
import { PreviewContentCard } from "/src/components/ui/content-card/PreviewContentCard";
import { getBusinessName } from "/src/util/card";
import { cardDetailsButton, iconContainer, statusTrackerContainer } from "./CardStatus.css";
import { StatusTracker } from "/src/components/ui/status-tracker/StatusTracker";
import { CardStatusState, getCardStatusState } from "/src/pages/card-status/card-status";
import {
  BankingWebCardService,
  RetrieveCardRequest,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import { formatAddress } from "/src/util/address";
import ActionEye from "tsx:/public/assets/svg/market-icons/action-eye.svg";
import ActionEyeSlash from "tsx:/public/assets/svg/market-icons/action-eye-slash.svg";

export interface CardStatusProps {
  readonly bankingWebCardService: BankingWebCardService;
}

export function CardStatus({ bankingWebCardService }: CardStatusProps) {
  const { t } = useTranslation("card-status");
  const { cardToken } = useParams();
  const windowDimensions = useWindowDimensions();

  const [card, setCard] = useState<Card>(Card.create());
  const [cardStatusState, setCardStatusState] = useState<CardStatusState | null>(null);
  const [showCardDetails, setShowCardDetails] = useState(false);

  useEffect(() => {
    if (cardToken) {
      // TODO(cvu): Error handling in the case that this fails
      bankingWebCardService
        .retrieveCard(
          RetrieveCardRequest.create({
            cardId: cardToken,
          })
        )
        .then((response) => {
          const card = response.card;
          setCardStatusState(getCardStatusState(t)(card));
          if (card) {
            setCard(card);
          }
        });
    }
  }, [cardToken]);

  const breadcrumb = {
    title: t("routes.overview", {
      ns: "site",
    }),
    link: { to: "/" },
  };
  const headerElement = (
    <PageHeader breadcrumb={breadcrumb} title={getBusinessName(card)}></PageHeader>
  );

  const getTrackerContents = (isMobile: boolean, cardStatusState: CardStatusState | null) => {
    if (cardStatusState === null) {
      return <></>;
    }

    const onShowCardDetailsClick = () => {
      setShowCardDetails(!showCardDetails);
    };

    const showDetailsButton = (showCardDetails: boolean) => {
      if (showCardDetails) {
        return (
          <MarketButton className={cardDetailsButton} onClick={onShowCardDetailsClick}>
            <div slot="icon" className={iconContainer}>
              <ActionEyeSlash />
            </div>
            {t("hideCardNumberButtonText")}
          </MarketButton>
        );
      }

      return (
        <MarketButton className={cardDetailsButton} onClick={onShowCardDetailsClick}>
          <div slot="icon" className={iconContainer}>
            <ActionEye />
          </div>
          {t("showCardNumberButtonText")}
        </MarketButton>
      );
    };

    const [formattedLine1, formattedLine2] = formatAddress(cardStatusState.address);
    const { title, description, trackerLabels, trackerStepIndex, cardPreview } = cardStatusState;

    const contents = (
      <div className={statusTrackerContainer}>
        <h3>{title}</h3>
        <p className={"semibold-30"}>{description}</p>
        {/*TODO(cvu): Support localizing this address*/}
        <p>{formattedLine1}</p>
        <p>{formattedLine2}</p>
        <StatusTracker steps={trackerLabels} currentStepIndex={trackerStepIndex} />
      </div>
    );

    if (isMobile) {
      return (
        <div>
          {/*TODO: replace with real business name*/}
          <CardPreview {...cardPreview} showCardDetails={showCardDetails} />
          {showDetailsButton(showCardDetails)}
          {contents}
        </div>
      );
    }

    return (
      <PreviewContentCard
        card={card}
        previewSecondaryContent={showDetailsButton(showCardDetails)}
        showCardDetails={showCardDetails}
      >
        {contents}
      </PreviewContentCard>
    );
  };

  return (
    <Page header={headerElement}>
      {getTrackerContents(windowDimensions.isMobile, cardStatusState)}
    </Page>
  );
}
