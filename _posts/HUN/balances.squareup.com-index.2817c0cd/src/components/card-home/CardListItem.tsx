import { MarketRow } from "@market/react";
import { CardPreviewFront } from "/src/components/ui/card/CardPreviewFront";
import { CardListItemProps } from "./CardList";
import * as styles from "./CardList.css";
import UnclaimedCard from "tsx:/public/assets/svg/unclaimed-card.svg";

export function CardListItem({ cardImage, subtext, title, onItemClick }: CardListItemProps) {
  return (
    <MarketRow
      class={styles.row}
      interactive={true}
      transient={true}
      variant="drill"
      onClick={onItemClick}
    >
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
      <p slot="subtext">{subtext}</p>
    </MarketRow>
  );
}
