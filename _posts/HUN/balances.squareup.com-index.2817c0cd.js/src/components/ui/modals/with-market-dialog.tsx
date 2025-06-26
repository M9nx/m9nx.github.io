/**
 * Market considers modals (full and partial), dialog and blade as DialogElements.
 */
import { PropsWithChildren, useEffect, useState } from "react";
import { MarketModalFull, MarketModalPartial } from "@market/react";

// TODO(cvu): should probably support dialog and blade but will do later
type DialogComponent = typeof MarketModalFull | typeof MarketModalPartial;

export interface WithBankingDialogProps {
  readonly active?: boolean;
  readonly onActiveChange?: (active: boolean) => void;
}

export const withMarketDialog = (Component: DialogComponent) => {
  // TODO(cvu): decide if we should disable this for the whole project later
  // eslint-disable-next-line react/display-name
  return ({ active, onActiveChange, children }: PropsWithChildren<WithBankingDialogProps>) => {
    const [_active, setActive] = useState(false);

    useEffect(() => {
      setActive(active ?? false);
    }, [active]);

    useEffect(() => {
      if (onActiveChange) onActiveChange(_active);
    }, [_active]);

    const onMarketDialogDismissed = () => {
      setActive(false);
    };
    return _active ? (
      <Component onMarketDialogDismissed={onMarketDialogDismissed}>{children}</Component>
    ) : null;
  };
};
