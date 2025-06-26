import { MarketActivityIndicator } from "@market/react";
import { captureException } from "@sentry/react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Subscription } from "rxjs";
import { BankingWebCardService } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import { CardManagementService } from "/src/protos/squareup/bbdebit/cardmanagement";
import { getBusinessName } from "/src/util/card";
import { Page } from "/src/components/ui/page/Page";
import { PageHeader } from "/src/components/ui/page/PageHeader";
import { initializeWorkflow } from "/src/lib/workflow-react/use-workflow";
import * as cardSettings from "/src/workflow/card-settings";
import { ConnectedCardManagement } from "/src/components/card-management/connected/ConnectedCardManagement";
import navigation from "/src/pages/card-settings/navigation";

export interface CardSettingsProps {
  readonly bankingWebCardService: BankingWebCardService;
  readonly cardManagementService: CardManagementService;
}

export function CardSettings({ bankingWebCardService, cardManagementService }: CardSettingsProps) {
  const { t } = useTranslation("card-settings");
  const { cardToken } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [cardSettingsState, cardSettingsDispatch, cardSettingsWorkflow] = initializeWorkflow(
    {
      bankingWebCardService,
      cardManagementService,
      sentry: {
        captureException,
      },
    },
    cardSettings.createState(),
    cardSettings.default
  );

  useEffect(() => {
    const subscriptions = new Subscription();
    subscriptions.add(
      cardSettingsWorkflow.updates
        .pipe(navigation)
        .subscribe((nav) => navigate(nav.to, nav.options))
    );

    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (cardToken != null) {
      cardSettingsDispatch(cardSettings.initializeAction(cardToken));
    }
  }, [cardToken]);

  useEffect(() => {
    // refetch the card data if card activation is completed
    if (location.state?.cardActivation?.done && cardToken != null) {
      cardSettingsDispatch(cardSettings.initializeAction(cardToken));
    }
  }, [location]);

  const breadcrumb = {
    title: t("routes.overview", {
      ns: "site",
    }),
    link: { to: "/" },
  };

  const headerElement = (
    <PageHeader
      breadcrumb={breadcrumb}
      title={cardSettingsState.card ? getBusinessName(cardSettingsState.card) : ""}
    ></PageHeader>
  );

  return cardSettingsState.loading ? (
    <MarketActivityIndicator></MarketActivityIndicator>
  ) : (
    <Page header={headerElement}>
      <ConnectedCardManagement state={cardSettingsState} dispatch={cardSettingsDispatch} />
      <Outlet />
    </Page>
  );
}
