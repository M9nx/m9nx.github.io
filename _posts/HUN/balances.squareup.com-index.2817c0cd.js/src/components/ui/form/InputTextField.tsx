import { MarketField } from "@market/react";
import {
  FormattedInputText,
  FormattedInputTextProps,
} from "/src/components/ui/field-kit/FormattedInputText";

export interface InputTextFieldProps<T = string> extends FormattedInputTextProps<T> {
  readonly className?: string;
  readonly error?: string;
  readonly maxlength?: number;
  readonly helper?: string;
  readonly label: string;
  readonly name: string;
}

export function InputTextField<T = string>({
  className,
  disabled = false,
  error,
  formatter,
  helper,
  label,
  maxlength,
  name,
  placeholder,
  readonly = false,
  value,
  onTextChange,
}: InputTextFieldProps<T>) {
  return (
    <MarketField
      data-testid={name}
      className={className}
      name={name}
      invalid={Boolean(error)}
      // NOTE(cvu): this is a hack because disabled="false" prevents the input field from being editable
      // TODO(cvu): Change once issue is fixed. Ticket: https://github.com/squareup/market/issues/4880
      disabled={disabled}
      readonly={readonly}
    >
      <FormattedInputText<T>
        value={value}
        placeholder={placeholder}
        maxlength={maxlength}
        formatter={formatter}
        onTextChange={onTextChange}
      >
        <label htmlFor={label}>{label}</label>
      </FormattedInputText>
      <small data-testid="error" slot="error">
        {error}
      </small>
      {/* The margin bottom for the helper slot component cause a shift when switching between the helper and error slot element */}
      <small slot="helper" style={{ marginBottom: 0 }}>
        {helper}
      </small>
    </MarketField>
  );
}
