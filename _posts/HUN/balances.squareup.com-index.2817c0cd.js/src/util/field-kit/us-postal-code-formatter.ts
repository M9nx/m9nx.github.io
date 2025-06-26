/**
 * NOTE(cvu): COPIED FROM @banking DASHBOARD. DO NOT EDIT
 */
import { DelimitedTextFormatter } from "field-kit";
import type { ITextFieldStateChange } from "field-kit";

export default class USPostalCodeFormatter extends DelimitedTextFormatter {
  constructor() {
    super("-", /* isLazy = */ true);
    this.maximumLength = 10;
  }

  hasDelimiterAtIndex(index: number) {
    return index === 5;
  }

  format(str: string) {
    if (/\d{5}-\d{4}/.test(str)) {
      return super.format(str.replace(/-/, ""));
    }
    return super.format(str);
  }

  isChangeValid(change: ITextFieldStateChange, error: (error: string) => void): boolean {
    if (/^\d*$/.test(change.inserted.text)) {
      return super.isChangeValid(change, error);
    } else {
      return false;
    }
  }
}
