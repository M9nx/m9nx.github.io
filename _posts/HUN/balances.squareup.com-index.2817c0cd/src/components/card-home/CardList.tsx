import { ActionCardListItem, isActionCardListItemProps } from "./ActionCardListItem";
import { rowContainer } from "./CardList.css";
import { CardListItem } from "/src/components/card-home/CardListItem";

export interface CardListItemImage {
  readonly businessName: string;
  readonly signatureUri: string;
}

export interface CardListItemProps {
  readonly cardImage?: CardListItemImage;
  readonly cardToken: string;
  readonly subtext: string;
  readonly title: string;
  readonly onItemClick: () => void;
}

export interface CardListProps {
  readonly cardListItems: CardListItemProps[];
}

export function CardList({ cardListItems }: CardListProps) {
  const getCardListItemComponent = (props: CardListItemProps) => {
    return isActionCardListItemProps(props) ? (
      <ActionCardListItem key={props.cardToken} {...props} />
    ) : (
      <CardListItem key={props.cardToken} {...props} />
    );
  };

  return (
    <div className={rowContainer}>
      {cardListItems.map((card) => getCardListItemComponent(card))}
    </div>
  );
}
