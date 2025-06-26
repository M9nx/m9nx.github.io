import { MarketRow, MarketButton } from "@market/react";
import { mobileAction } from "./ActionCardListItem.css";
import * as styles from "./CardList.css";
import { CardListItemProps } from "/src/components/card-home/CardList";
import { useWindowDimensions } from "/src/hooks/use-window-dimensions";
import { CardPreviewFront } from "/src/components/ui/card/CardPreviewFront";
import UnclaimedCard from "tsx:/public/assets/svg/unclaimed-card.svg";

export interface ActionCardListItemProps extends CardListItemProps {
  readonly buttonText: string;
}

export const isActionCardListItemProps = (
  cardListItemProps: CardListItemProps
): cardListItemProps is ActionCardListItemProps => {
  return "buttonText" in cardListItemProps;
};

export function ActionCardListItem({
  buttonText,
  cardImage,
  subtext,
  title,
  onItemClick,
}: ActionCardListItemProps) {
  const windowDimensions = useWindowDimensions();

  return (
    <MarketRow class={styles.row}>
      <div slot="leading-accessory" className={styles.cardImageContainer}>
        {cardImage ? (
          <CardPreviewFront
            className={styles.cardImage}
            businessName={cardImage.businessName}
            signatureDataUri={cardImage?.signatureUri}
          />
        ) : (
          <UnclaimedCard />
        )}
      </div>
      <label slot="label">{title}</label>
      {windowDimensions.isMobile ? (
        <div className={mobileAction} slot="subtext">
          <p>{subtext}</p>
          <a onClick={onItemClick}>{buttonText}</a>
        </div>
      ) : (
        <>
          <p slot="subtext">{subtext}</p>
          <MarketButton slot="control" rank="primary" onClick={onItemClick}>
            {buttonText}
          </MarketButton>
        </>
      )}
    </MarketRow>
  );
}
