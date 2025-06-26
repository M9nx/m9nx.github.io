import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MarketModalPartial } from "@market/react";
import { captureException } from "@sentry/react";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { v4 as uuid } from "uuid";
import { CardManagementService } from "/src/protos/squareup/bbdebit/cardmanagement";
import { initializeWorkflow } from "/src/lib/workflow-react/use-workflow";
import * as setPin from "/src/workflow/set-pin";
import { SetPinType } from "/src/components/set-pin/SetPin";
import { ConnectedSetPin } from "/src/components/set-pin/connected/ConnectedSetPin";

export interface WorkflowContainedSetPinModalProps {
  readonly cardManagementService: CardManagementService;
  readonly cardToken: string;
  readonly type: SetPinType;
}
export function WorkflowContainedSetPinModal({
  cardManagementService,
  cardToken,
  type,
}: WorkflowContainedSetPinModalProps) {
  // NOTE(cvu): hardcoding navigation back only for set/reset pin.
  const navigate = useNavigate();
  const onNavClick = () => navigate("../.");

  const [state, dispatch, workflow] = initializeWorkflow(
    {
      sentry: {
        captureException,
      },
      setPin: cardManagementService.setPin.bind(cardManagementService),
      uuid,
    },
    setPin.createState(),
    setPin.default
  );

  useEffect(() => {
    const subscriptions = new Subscription();

    subscriptions.add(
      workflow.updates
        .pipe(filter(([_, action]) => action.type === setPin.ActionType.Done))
        .subscribe(() => onNavClick())
    );

    dispatch(setPin.initializeAction(cardToken));

    return () => {
      subscriptions.unsubscribe();
    };
  }, []);

  return (
    <MarketModalPartial>
      <ConnectedSetPin
        state={state}
        dispatch={dispatch}
        showNav={true}
        type={type}
        onNavClick={onNavClick}
      />
    </MarketModalPartial>
  );
}
