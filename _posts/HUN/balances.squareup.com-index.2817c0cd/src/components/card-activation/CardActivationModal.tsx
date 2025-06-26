import { PropsWithChildren } from "react";
import { MarketModalPartial } from "@market/react";
import { WithBankingDialogProps } from "/src/components/ui/modals/with-market-dialog";
import { withMarketModalPartialCustomEvent } from "/src/components/ui/util/with-market-custom-event";

export interface CardActivationModalProps extends PropsWithChildren<WithBankingDialogProps> {
  readonly onClose: () => void;
}

export function CardActivationModal({ children, onClose }: CardActivationModalProps) {
  return (
    <MarketModalPartial onMarketDialogDismissed={withMarketModalPartialCustomEvent(onClose)}>
      {children}
    </MarketModalPartial>
  );
}
