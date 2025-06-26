import { APP_DEP } from "/src/config/configure-dependencies";
import { withInjection } from "/src/components/ui/util/with-injection";
import { withRouterParams } from "/src/components/ui/util/with-router-params";
import {
  WorkflowContainedCardActivationModalProps,
  WorkflowContainedCardActivationModalWithLD,
} from "./WorkflowContainedCardActivationModal";

const InjectedWorkflowContainedCardActivationModal = withInjection<
  Omit<WorkflowContainedCardActivationModalProps, "canUpdatePin">,
  "bankingWebCardService" | "cardManagementService"
>(WorkflowContainedCardActivationModalWithLD, {
  bankingWebCardService: APP_DEP.BANKING_WEB_CARD_SERVICE,
  cardManagementService: APP_DEP.CARD_MANAGEMENT_SERVICE,
});

export const RoutableCardActivationModal = withRouterParams(
  InjectedWorkflowContainedCardActivationModal,
  {
    cardToken: "cardToken",
  }
);
