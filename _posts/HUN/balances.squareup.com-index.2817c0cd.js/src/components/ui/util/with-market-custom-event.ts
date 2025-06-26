import {
  MarketCodeInputCustomEvent,
  MarketInputTextCustomEvent,
  MarketModalPartialCustomEvent,
  MarketSelectCustomEvent,
} from "@market/web-components/dist/types/components";
import {
  DialogDismissedEvent,
  DialogLoadedEvent,
} from "@market/web-components/dist/types/utils/dialog";

export const withMarketInputTextCustomEvent =
  (callback: (value: string) => void) => (event: MarketInputTextCustomEvent<{ value: string }>) => {
    callback(event.detail.value);
  };

// TODO(cvu): figure out if I actually have to define details like this
// TODO(cvu): if I have to do things like this and market changes their detail properties... :cindy-triggered:
export interface MarketSelectDetail {
  readonly value: string | Array<unknown>;
  readonly newSelectedOption: HTMLMarketRowElement;
  readonly newDeselectedOption: HTMLMarketRowElement;
  readonly currentSelectedOptions: HTMLMarketRowElement[];
}

export const withMarketSelectCustomEvent =
  (callback?: (detail: MarketSelectDetail) => void) =>
  (event: MarketSelectCustomEvent<MarketSelectDetail>): void => {
    callback?.(event.detail);
  };

export const withMarketCodeInputValueChange =
  (callback: (value: string) => void) => (event: MarketCodeInputCustomEvent<{ code: string }>) => {
    callback(event.detail.code);
  };

export const withMarketModalPartialCustomEvent =
  (callback?: () => void) =>
  (_event: MarketModalPartialCustomEvent<DialogDismissedEvent | DialogLoadedEvent>) => {
    callback?.();
  };
