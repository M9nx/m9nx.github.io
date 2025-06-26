import { v4 as uuid } from "uuid";
import { captureException } from "@sentry/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import { filter } from "rxjs/operators";
import { Card } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_model";
import {
  BankingWebCardService,
  ListCardsRequest,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import { BankingWebComplianceService } from "/src/protos/squareup/bbfrontend/bankingweb/v1/compliance_service";
import {
  BankingWebService,
  ListOpenCardInvitationsRequest,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/service";
import {
  GetPersonProfileRequest,
  GetPersonProfileResponse,
  PersonProfileService,
} from "/src/protos/squareup/bbfrontend/bankingweb/v1/person_profile_service";
import { WebService } from "/src/protos/squareup/bbfrontend/v1/web_service";
import { OpenCardInvitation } from "/src/protos/squareup/bbfrontend/bankingweb/v1/model";
import { initializeWorkflow } from "/src/lib/workflow-react/use-workflow";
import * as cardIssuing from "/src/workflow/card-issuing";
import cardIssuingAnalytics from "/src/workflow/card-issuing/analytics";
import { Page } from "/src/components/ui/page/Page";
import assert from "/src/util/assert";
import TextRenderer from "/src/util/text-renderer";
import { createUserFromProfile } from "/src/util/user";
import { ConnectedCardIssuingModal } from "/src/components/card-issuing/connected/ConnectedCardIssuingModal";
import { useCdp } from "/src/hooks/use-cdp";
import { useUser } from "/src/hooks/use-user";
import { useWindowDimensions } from "/src/hooks/use-window-dimensions";
import { CardList, CardListItemProps } from "/src/components/card-home/CardList";
import { ActionCardListItemProps } from "/src/components/card-home/ActionCardListItem";
import * as styles from "./CardHome.css";
import {
  createActivatableCardList,
  createCardList,
  sortCards,
} from "/src/pages/card-home/card-home";
import AlertNoEntry from "tsx:/public/assets/svg/market-icons/alert-no-entry.svg";

export interface CardHomeProps {
  readonly bankingWebCardService: BankingWebCardService;
  readonly bankingWebComplianceService: BankingWebComplianceService;
  readonly bankingWebService: BankingWebService;
  readonly personProfileService: PersonProfileService;
  readonly webService: WebService;
}

export function CardHome({
  bankingWebCardService,
  bankingWebComplianceService,
  bankingWebService,
  personProfileService,
  webService,
}: CardHomeProps) {
  const cdp = useCdp();
  const { t } = useTranslation("common");
  const [user, setUser] = useUser();
  const navigate = useNavigate();
  const windowDimensions = useWindowDimensions();

  const [loading, setLoading] = useState(true);
  const [cardInvitations, setCardInvitations] = useState<OpenCardInvitation[]>([]);
  const [activatableCardsListItems, setActivatableCardsListItems] = useState<
    ActionCardListItemProps[]
  >([]);
  const [cardsListItems, setCardsListItems] = useState<CardListItemProps[]>([]);

  const [cardIssuingState, cardIssuingDispatch, cardIssuingWorkflow] = initializeWorkflow(
    {
      bankingWebCardService,
      bankingWebComplianceService,
      sentry: { captureException },
      textRenderer: TextRenderer,
      webService,
      personProfileService,
      uuid,
    },
    cardIssuing.createState(),
    cardIssuing.default
  );

  useEffect(() => {
    cardIssuingWorkflow.states
      .pipe(filter(({ done }: cardIssuing.State) => done))
      .subscribe((state: cardIssuing.State) => {
        personProfileService
          .getPersonProfile(GetPersonProfileRequest.create())
          // TODO(cvu): Figure out how to move the responsibility of re-fetching person data into UserContext
          // Going to leave this for now. Tech debt ticket: https://jira.sqprod.co/browse/SQCARD-2840
          .then((response: GetPersonProfileResponse) => {
            const profile = response.profile;
            assert(profile, "Profile does not exist in GetPersonProfileResponse");
            setUser(createUserFromProfile(profile));
            navigate(`/card/${state.cardToken}/settings`);
          });
      });

    cardIssuingAnalytics(cardIssuingWorkflow.updates).subscribe((params) => {
      cdp.trackV2(params);
    });

    Promise.all([
      bankingWebCardService.listCards(ListCardsRequest.create()),
      bankingWebService.listOpenCardInvitations(ListOpenCardInvitationsRequest.create()),
    ]).then(([listCardsResponse, listOpenCardInvitationsResponse]) => {
      const { cards } = listCardsResponse;
      const [activatableCards, claimedCards] = sortCards(cards as Card[]);
      setActivatableCardsListItems(
        createActivatableCardList(t)(activatableCards, (card: Card) =>
          navigate(`/activate-card/${card.id}`)
        )
      );
      setCardsListItems(createCardList(navigate, t)(claimedCards));

      const { openCardInvitations } = listOpenCardInvitationsResponse;
      setCardInvitations(openCardInvitations as OpenCardInvitation[]);

      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (loading) {
      return;
    }

    // Open ordering flow if the person only has one invitation and no cards.
    if (
      cardInvitations.length === 1 &&
      activatableCardsListItems.length === 0 &&
      cardsListItems.length === 0
    ) {
      cardIssuingDispatch(
        cardIssuing.initializeAction(
          cardInvitations[0].cardInvitationToken,
          user || { personToken: "", name: { first: "", last: "" } },
          true
        )
      );
      cardIssuingDispatch(cardIssuing.toggleModalAction(true));
    }
  }, [loading]);

  const cardInvitationListItems = cardInvitations.map(
    (cardInvitation): ActionCardListItemProps => ({
      buttonText: t("cardList.newCard.orderCard.buttonText"),
      cardToken: cardInvitation.cardInvitationToken,
      subtext: t("cardList.newCard.subtext"),
      title: cardInvitation.name,
      onItemClick: () => {
        cardIssuingDispatch(
          cardIssuing.initializeAction(
            cardInvitation.cardInvitationToken,
            user || { personToken: "", name: { first: "", last: "" } },
            cardsListItems.length === 0
          )
        );
        cardIssuingDispatch(cardIssuing.toggleModalAction(true));
      },
    })
  );

  const CardListComponent = () => {
    if (windowDimensions.isMobile) {
      const listItems = [
        ...cardInvitationListItems,
        ...activatableCardsListItems,
        ...cardsListItems,
      ];
      return listItems.length ? <CardList cardListItems={listItems} /> : <></>;
    } else {
      const actionableCardsListItems = [...cardInvitationListItems, ...activatableCardsListItems];
      return (
        <div className={styles.desktopCardLists}>
          {actionableCardsListItems.length ? (
            <CardList cardListItems={actionableCardsListItems} />
          ) : (
            <></>
          )}
          {cardsListItems.length ? <CardList cardListItems={cardsListItems} /> : <></>}
        </div>
      );
    }
  };

  const EmptyState = () => {
    return (
      <div className={styles.emptyState}>
        <div className={styles.iconContainer}>
          <AlertNoEntry className={styles.icon} />
        </div>
        <p>{t("cardHome.emptyState")}</p>
      </div>
    );
  };

  const hasListItems = (): boolean => {
    return (
      cardInvitationListItems.length + activatableCardsListItems.length + cardsListItems.length > 0
    );
  };

  return (
    <>
      <Page loading={loading} className={styles.page}>
        <h2 className={classNames("header-30", styles.header)}>{t("cardHome.list.header")}</h2>
        {hasListItems() ? <CardListComponent /> : <EmptyState />}
        <Outlet />
      </Page>
      <ConnectedCardIssuingModal state={cardIssuingState} dispatch={cardIssuingDispatch} />
    </>
  );
}
