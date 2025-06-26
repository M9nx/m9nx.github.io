import { captureException } from "@sentry/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Subscription } from "rxjs";
import { v4 as uuid } from "uuid";
import { MarketActivityIndicator } from "@market/react";
import { TokenType } from "@square/feature-relay-web-sdk";
import { personFlags } from "/src/config/feature-flags/person-flag-configs";
import { initializeWorkflow } from "/src/lib/workflow-react/use-workflow";
import { useLaunchDarkly } from "/src/hooks/use-launch-darkly";
import { CardManagementService } from "/src/protos/squareup/bbdebit/cardmanagement";
import { BankingWebCardService } from "/src/protos/squareup/bbfrontend/bankingweb/v1/card_service";
import * as cardActivation from "/src/workflow/card-activation";
import { ConnectedCardActivationModal } from "../connected/ConnectedCardActivationModal";
import navigation from "./navigation";

export interface WorkflowContainedCardActivationModalProps {
  readonly bankingWebCardService: BankingWebCardService;
  readonly canUpdatePin: boolean;
  readonly cardManagementService: CardManagementService;
  readonly cardToken: string;
}

// TODO(cvu): better handle LD async load flags for workflow initialization
// Leaving as it for "cindy special". Please bother cvu after vacation.
export function WorkflowContainedCardActivationModalWithLD({
  bankingWebCardService,
  cardManagementService,
  cardToken,
}: Omit<WorkflowContainedCardActivationModalProps, "canUpdatePin">) {
  const launchDarklyClient = useLaunchDarkly(personFlags, {
    token: "anonymousUser",
    type: TokenType.ANONYMOUS_VISITOR,
  });

  const loadingIndicator = <MarketActivityIndicator></MarketActivityIndicator>;
  return launchDarklyClient.flagsLoaded ? (
    <WorkflowContainedCardActivationModal
      bankingWebCardService={bankingWebCardService}
      canUpdatePin={
        (launchDarklyClient.getFlagValue(personFlags.canUpdatePin)?.valueOf() as boolean) ?? false
      }
      cardManagementService={cardManagementService}
      cardToken={cardToken}
    />
  ) : (
    loadingIndicator
  );
}

export function WorkflowContainedCardActivationModal({
  bankingWebCardService,
  canUpdatePin,
  cardManagementService,
  cardToken,
}: WorkflowContainedCardActivationModalProps) {
  const navigate = useNavigate();

  const [state, dispatch, workflow] = initializeWorkflow(
    {
      bankingWebCardService,
      canUpdatePin,
      sentry: {
        captureException,
      },
      setPin: cardManagementService.setPin.bind(cardManagementService),
      uuid,
    },
    cardActivation.createState(),
    cardActivation.default
  );

  useEffect(() => {
    const subscriptions = new Subscription();
    subscriptions.add(
      workflow.updates.pipe(navigation).subscribe((nav) => navigate(nav.to, nav.options))
    );

    dispatch(cardActivation.initializeAction(cardToken));

    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  return <ConnectedCardActivationModal state={state} dispatch={dispatch} />;
}
