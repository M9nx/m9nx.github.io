/**
 * NOTE(cvu): To try to not bake a specific translations library into in the card customization workflow
 * and not require CardCustomizationComponent to not import or reference the workflow, an intermediary
 * place was needed to map the error states to translation strings. ConnectedCardCustomization was the best
 * place for it. But for the sake of allowing me to test these functions easier, I have moved these functions
 * into a separate file.
 */

import type { TFunction } from "react-i18next";
import {
  CardCustomizationSignatureError,
  MAXIMUM_CUSTOMIZATION_LENGTH,
} from "/src/workflow/card-issuing/card-customization";

export const getCustomSignatureErrorString =
  (t: TFunction) =>
  (
    customSignatureInputError: CardCustomizationSignatureError[],
    signatureInputText: string
  ): string => {
    if (customSignatureInputError.length === 0) {
      return "";
    }
    switch (customSignatureInputError[0]) {
      case CardCustomizationSignatureError.ContainsEmoji:
        return t("customSignatureError.containsEmoji");
      case CardCustomizationSignatureError.Empty:
        return t("customSignatureError.empty");
      case CardCustomizationSignatureError.ExceededMaxLength:
        return t("customSignatureError.exceedsMaxLength", {
          replace: {
            overLimitAmount: signatureInputText.length - MAXIMUM_CUSTOMIZATION_LENGTH,
          },
        });
    }
  };

export const getCustomSignatureHelperString = (t: TFunction) => (signatureText: string) => {
  return t("customSignatureHelper", {
    replace: {
      charactersLeft: MAXIMUM_CUSTOMIZATION_LENGTH - signatureText.length,
    },
  });
};

export const resolveSignatureText = (t: TFunction) => (signatureText: string) =>
  signatureText || t("emptySignaturePlaceholder");
