import SVGComponent from "tsx:*.svg";
import { PropsWithChildren } from "react";
import { MarketButton } from "@market/react";
import { BankingMarketModalFull } from "/src/components/ui/modals/BankingMarketModalFull";
import { WithBankingDialogProps } from "/src/components/ui/modals/with-market-dialog";
import { navIcon } from "./CardIssuingModal.css";

export interface CardIssuingModalProps extends PropsWithChildren<WithBankingDialogProps> {
  readonly isNavButtonVisible: boolean;
  readonly IconSVGComponent: typeof SVGComponent;
  readonly onNavButtonClick: () => void;
}

export function CardIssuingModal({
  active,
  isNavButtonVisible,
  children,
  IconSVGComponent,
  onActiveChange,
  onNavButtonClick,
}: CardIssuingModalProps) {
  return (
    <BankingMarketModalFull active={active} onActiveChange={onActiveChange}>
      {isNavButtonVisible ? (
        <div>
          <MarketButton rank="secondary" slot="navigation" onClick={onNavButtonClick}>
            <IconSVGComponent slot="icon" className={navIcon} />
          </MarketButton>
        </div>
      ) : null}
      {children}
    </BankingMarketModalFull>
  );
}
