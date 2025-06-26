import { userClickNextButtonAction } from "/src/workflow/card-issuing";
import { ConnectedProps } from "/src/components/card-issuing/connected/ConnectedCardIssuingModal";
import { CardOrderedConfirmation } from "/src/components/card-issuing/CardOrderedConfirmation";

export function ConnectedCardOrderConfirmation({ dispatch }: ConnectedProps) {
  return (
    <CardOrderedConfirmation
      cardCustomization={""} // TODO(cvu): replace with state value when available
      estimateArrivalDate={""} // TODO(cvu): replace with state value when available
      onDoneClick={() => dispatch(userClickNextButtonAction())}
    />
  );
}
