import { MarketField, MarketList, MarketRow, MarketSelect } from "@market/react";
import { ReactElement } from "react";
import {
  MarketSelectDetail,
  withMarketSelectCustomEvent,
} from "/src/components/ui/util/with-market-custom-event";

export interface SelectFieldProps {
  readonly value?: string;
  readonly name: string;
  readonly label: string;
  readonly listRows: ReactElement<typeof MarketRow>[];
  readonly className?: string;
  readonly disabled?: boolean;
  readonly error?: string;
  readonly readonly?: boolean;
  readonly onSelectChange?: (detail: MarketSelectDetail) => void;
}

export function SelectField({
  value,
  name,
  label,
  listRows,
  className,
  disabled = false,
  error,
  readonly = false,
  onSelectChange,
}: SelectFieldProps) {
  const onMarketSelectValueDidChange = withMarketSelectCustomEvent(onSelectChange);
  return (
    <MarketField
      className={className}
      name={name}
      invalid={Boolean(error)}
      // TODO(cvu): this is a dumb hack because disabled="false" prevents the input field from being editable
      // TODO(cvu): file a bug with the market team
      disabled={disabled}
      readonly={readonly}
    >
      <MarketSelect onMarketSelectValueDidChange={onMarketSelectValueDidChange} value={value}>
        <label>{label}</label>
        <MarketList slot="list">{listRows}</MarketList>
        <small slot="error">{error}</small>
      </MarketSelect>
    </MarketField>
  );
}
