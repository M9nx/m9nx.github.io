import { NavigateFunction } from "react-router-dom";
import { TFunction } from "i18next";
import { Card, CardStatus } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import { CardListItemImage, CardListItemProps } from "/src/components/card-home/CardList";
import { ActionCardListItemProps } from "/src/components/card-home/ActionCardListItem";
import { getBusinessName, getCardSignatureUri } from "/src/util/card";

export const createActivatableCardList =
  (t: TFunction) =>
  (cards: Card[], activationCallback: (card: Card) => void): ActionCardListItemProps[] =>
    cards.map((card): ActionCardListItemProps => {
      const cardImage = getCardListItemImage(card);
      return {
        buttonText: t("cardList.existingCard.activateCard.buttonText"),
        cardImage,
        cardToken: card.id,
        subtext: t("cardList.existingCard.lastFourPanText", {
          replace: {
            lastFourPan: card.panSuffix,
          },
        }),
        title: cardImage.businessName,
        onItemClick: () => {
          activationCallback(card);
        },
      };
    });

export const createCardList =
  (navigate: NavigateFunction, t: TFunction) =>
  (cards: Card[]): CardListItemProps[] =>
    cards.map((card): CardListItemProps => {
      const cardImage = getCardListItemImage(card);
      return {
        cardImage,
        cardToken: card.id,
        subtext: t("cardList.existingCard.lastFourPanText", {
          replace: {
            lastFourPan: card.panSuffix,
          },
        }),
        title: cardImage.businessName,
        onItemClick: () => navigate(`/card/${card.id}/settings`),
      };
    });

export const getCardListItemImage = (card: Card): CardListItemImage => ({
  businessName: getBusinessName(card),
  signatureUri: getCardSignatureUri(card),
});

/**
 * Sort cards into two arrays, activatable cards and claimed cards
 */
export const sortCards = (cards: Card[]): [Card[], Card[]] =>
  cards.reduce<[Card[], Card[]]>(
    ([accActivatableCards, accClaimedCards], card) => {
      if (card.status === CardStatus.ISSUED_ACTIVATABLE) {
        accActivatableCards.push(card);
      } else {
        accClaimedCards.push(card);
      }
      return [accActivatableCards, accClaimedCards];
    },
    [[], []]
  );
