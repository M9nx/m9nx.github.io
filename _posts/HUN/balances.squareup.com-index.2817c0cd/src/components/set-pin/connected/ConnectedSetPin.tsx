import {
  Action,
  Error,
  setPinAction,
  State,
  userChangeConfirmPinAction,
  userChangePinAction,
  ValueError,
} from "/src/workflow/set-pin";
import {
  SetPin,
  SetPinError,
  SetPinType,
  ValueError as SetPinValueError,
} from "/src/components/set-pin/SetPin";

export interface ConnectedSetPinProps {
  readonly state: State;
  readonly dispatch: (action: Action) => void;
  readonly type: SetPinType;
  readonly showNav: boolean;
  readonly onNavClick: () => void;
}

export function ConnectedSetPin({
  state,
  dispatch,
  showNav,
  type,
  onNavClick,
}: ConnectedSetPinProps) {
  /**
   * These error seem very similar but the errors in workflow and the component
   * may diverge. We do not want to couple presentational and functionality
   */
  const mapValueError = (error: ValueError) => {
    switch (error) {
      case ValueError.InvalidLength:
        return SetPinValueError.InvalidLength;
    }
  };

  const mapSetPinError = (error: Error) => {
    switch (error) {
      case Error.GenericError:
        return SetPinError.GenericError;
      case Error.InvalidPinMatch:
        return SetPinError.InvalidPinMatch;
      case Error.WeakPin:
        return SetPinError.WeakPin;
    }
  };

  return (
    <SetPin
      type={type}
      confirmPin={state.confirmPin}
      confirmPinError={
        state.confirmPinError.length ? mapValueError(state.confirmPinError[0]) : undefined
      }
      loading={state.loading}
      pin={state.pin}
      pinError={state.pinError.length ? mapValueError(state.pinError[0]) : undefined}
      setPinError={state.error.length ? mapSetPinError(state.error[0]) : undefined}
      showNav={showNav}
      onConfirmPinChange={(confirmPin: string) => dispatch(userChangeConfirmPinAction(confirmPin))}
      onPinChange={(pin: string) => dispatch(userChangePinAction(pin))}
      onNavClick={onNavClick}
      onSubmit={() => dispatch(setPinAction())}
    />
  );
}
