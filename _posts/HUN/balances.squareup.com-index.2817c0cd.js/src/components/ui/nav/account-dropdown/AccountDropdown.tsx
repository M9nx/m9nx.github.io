import { MarketDropdown, MarketList, MarketPopover, MarketRow } from "@market/react";
import * as styles from "./AccountDropdown.css";

export interface AccountDropdownOption {
  readonly name: string;
  readonly callback: () => void;
}

export interface AccountDropdownProps {
  readonly accountName: string;
  readonly options: AccountDropdownOption[];
}

export function AccountDropdown({ accountName, options }: AccountDropdownProps) {
  return (
    <MarketDropdown>
      <h3 className="semibold-20" slot="trigger">
        <a className={styles.accountName}>{accountName}</a>
      </h3>
      <MarketPopover slot="popover">
        <MarketList transient>
          {options.map((option) => (
            <MarketRow key={option.name} size="small" onClick={option.callback}>
              <label slot="label">{option.name}</label>
            </MarketRow>
          ))}
        </MarketList>
      </MarketPopover>
    </MarketDropdown>
  );
}
