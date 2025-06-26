import {
  Action,
  CardIssuingError,
  Screen,
  shouldNavIconCloseModal,
  shouldShowNavButton,
  State,
  toggleModalAction,
  userClickBackButtonAction,
  userClickCloseButtonAction,
} from "/src/workflow/card-issuing";
import { Screen as CardShippingScreen } from "/src/workflow/card-issuing/card-shipping";
import { ConnectedCardCustomization } from "/src/components/card-issuing/connected/ConnectedCardCustomization";
import { ConnectedShippingAddress } from "/src/components/card-issuing/connected/ConnectedShippingAddress";
import { ConnectedCardOrderConfirmation } from "/src/components/card-issuing/connected/ConnectedCardOrderConfirmation";
import { ConnectedVerifyName } from "/src/components/card-issuing/connected/ConnectedVerifyName";
import CloseIcon from "tsx:/public/assets/svg/market-icons/action-x.svg";
import LeftIcon from "tsx:/public/assets/svg/market-icons/arrow-left.svg";
import { CardIssuingModal } from "/src/components/card-issuing/CardIssuingModal";
import { ServerError } from "/src/components/ui/alerts/ServerError";
import { IneligibilityError } from "/src/components/card-issuing/IneligibilityError";

export interface ConnectedProps {
  readonly state: State;
  readonly dispatch: (action: Action) => void;
}

export function ConnectedCardIssuingModal({ state, dispatch }: ConnectedProps) {
  const getNavIcon = (state: State) => (shouldNavIconCloseModal(state) ? CloseIcon : LeftIcon);
  const getChildren = (state: State) => {
    const { current } = state.navigation;
    switch (current) {
      case Screen.VerifyName:
        return <ConnectedVerifyName state={state} dispatch={dispatch} />;
      case Screen.Customization:
        return <ConnectedCardCustomization state={state} dispatch={dispatch} />;
      case Screen.ShippingAddress: {
        switch (state.cardShippingState.screen) {
          case CardShippingScreen.EnterAddress:
            return <ConnectedShippingAddress state={state} dispatch={dispatch} />;
        }
        break;
      }
      case Screen.OrderConfirmation:
        return <ConnectedCardOrderConfirmation state={state} dispatch={dispatch} />;
      case Screen.Error: {
        switch (state.error) {
          case CardIssuingError.Ineligible:
            return <IneligibilityError onButtonClick={() => dispatch(toggleModalAction(false))} />;
          case CardIssuingError.Generic: {
            return <ServerError onButtonClick={() => dispatch(toggleModalAction(false))} />;
          }
        }
      }
    }
  };

  const mapToProps = ({ state, dispatch }: ConnectedProps) => {
    return {
      active: state.modalOpen,
      children: getChildren(state),
      IconSVGComponent: getNavIcon(state),
      isNavButtonVisible: shouldShowNavButton(state),
      onActiveChange: (value: boolean) => dispatch(toggleModalAction(value)),
      onNavButtonClick: shouldNavIconCloseModal(state)
        ? () => dispatch(userClickCloseButtonAction())
        : () => dispatch(userClickBackButtonAction()),
    };
  };

  return <CardIssuingModal {...mapToProps({ state, dispatch })} />;
}
