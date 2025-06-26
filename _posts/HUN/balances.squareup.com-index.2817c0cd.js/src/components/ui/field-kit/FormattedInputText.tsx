import { PropsWithChildren } from "react";
import { MarketInputText } from "@market/react";
import { Formatter, IFormatter, TextField } from "field-kit";

export interface FormattedInputTextProps<T> {
  readonly value?: T;
  readonly disabled?: boolean;
  readonly maxlength?: number;
  readonly formatter?: IFormatter<T>;
  readonly placeholder?: string;
  readonly readonly?: boolean;
  readonly type?: string;
  readonly onTextChange?: (value: T) => void;
}

/**
 * This component is to provide a (hopefully) convenient MarketInputText with
 * field-kit formatter support.
 */
export function FormattedInputText<T = string>({
  value,
  children,
  disabled = false,
  formatter = new Formatter<T>(),
  maxlength,
  placeholder,
  readonly = false,
  type = "string",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTextChange = () => {},
}: PropsWithChildren<FormattedInputTextProps<T>>) {
  /**
   * Add field kit text field when MarketInputText has loaded. This is determined by
   * onMarketInputDidLoad. This was the most consistent way to ensure that the HTML
   * input was loaded.
   *
   * Other attempts included adding a ref and useEffect and adding
   * the field kit text field. In theory, it would have been called after first render
   * but HTML input in MarketInputText was occasionally returning `undefined` when
   * calling `getInputElement`
   */
  const addFieldKit = (input: HTMLInputElement) => {
    if (value) {
      input.value = formatter.format(value);
    }
    const textField = new TextField(input, formatter);
    /**
     * Forgo using the onMarketInputValueChange to handle text change and use
     * text field textDidChange
     */
    const textDidChange = (field: TextField<T>) => onTextChange(field.value());
    textField.setDelegate({ textDidChange });
  };

  return (
    <MarketInputText
      data-testid="formatted-input-text"
      value={value && formatter ? formatter.format(value) : ""}
      // NOTE(cvu): this is a hack because disabled="false" prevents the input field from being editable
      // TODO(cvu): Change once issue is fixed. Ticket: https://github.com/squareup/market/issues/4880
      disabled={disabled}
      maxlength={maxlength}
      readonly={readonly}
      placeholder={placeholder}
      onMarketInputDidLoad={(event) => addFieldKit(event.detail.input)}
      type={type}
    >
      {children}
    </MarketInputText>
  );
}
