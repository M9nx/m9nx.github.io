import {
  Action,
  Screen,
  State,
  toggleModalAction,
  userClickNextAction,
} from "/src/workflow/card-activation";
import { ConnectedCardActivationEnterDetails } from "./ConnectedCardActivationEnterDetails";
import { CardActivationConfirmation } from "/src/components/card-activation/CardActivationConfirmation";
import { CardActivationModal } from "/src/components/card-activation/CardActivationModal";
import { ServerError } from "/src/components/ui/alerts/ServerError";
import { SetPinType } from "/src/components/set-pin/SetPin";
import { ConnectedSetPin } from "/src/components/set-pin/connected/ConnectedSetPin";

export interface ConnectedProps {
  readonly state: State;
  readonly dispatch: (action: Action) => void;
}

export function ConnectedCardActivationModal({ state, dispatch }: ConnectedProps) {
  const getChildren = (state: State) => {
    switch (state.screen) {
      case Screen.Details:
        return <ConnectedCardActivationEnterDetails state={state} dispatch={dispatch} />;
      case Screen.Pin:
        return (
          <ConnectedSetPin
            state={state.setPinState}
            dispatch={dispatch}
            showNav={true}
            type={SetPinType.CREATE}
            onNavClick={() => dispatch(toggleModalAction(false))}
          />
        );
      case Screen.Success:
        return <CardActivationConfirmation onDoneClick={() => dispatch(userClickNextAction())} />;
      case Screen.Error:
        return <ServerError onButtonClick={() => dispatch(toggleModalAction(false))} />;
    }
  };

  return (
    <CardActivationModal
      active={state.modalOpen}
      onClose={() => dispatch(toggleModalAction(false))}
    >
      {getChildren(state)}
    </CardActivationModal>
  );
}
