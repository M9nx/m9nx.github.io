import { APP_DEP } from "/src/config/configure-dependencies";
import { withInjection } from "/src/components/ui/util/with-injection";
import { withRouterParams } from "/src/components/ui/util/with-router-params";
import {
  WorkflowContainedSetPinModal,
  WorkflowContainedSetPinModalProps,
} from "/src/components/set-pin/routable/WorkflowContainedSetPinModal";

const InjectedWorkflowContainedSetPinModal = withInjection<
  WorkflowContainedSetPinModalProps,
  "cardManagementService"
>(WorkflowContainedSetPinModal, {
  cardManagementService: APP_DEP.CARD_MANAGEMENT_SERVICE,
});

export const RoutableSetPinModal = withRouterParams(InjectedWorkflowContainedSetPinModal, {
  cardToken: "cardToken",
});
