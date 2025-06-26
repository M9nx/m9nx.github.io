import { MarketList } from "@market/react";
import { list } from "./List.css";
import { ListItem, Props as ListItemProps } from "./ListItem";

export interface Props {
  items: ListItemProps[];
}

export function List({ items }: Props) {
  return (
    <MarketList className={list} transient={true} name="card-settings-list">
      {items.map(({ Icon, text, subtext, control, hidden, loading, value, action }) => {
        return (
          <ListItem
            key={text}
            Icon={Icon}
            text={text}
            subtext={subtext}
            control={control}
            hidden={hidden}
            loading={loading}
            value={value}
            action={action}
          />
        );
      })}
    </MarketList>
  );
}
