import { useTranslation } from "react-i18next";
import { ConnectedProps } from "/src/components/card-issuing/connected/ConnectedCardIssuingModal";
import { CardCustomization } from "/src/components/card-issuing/CardCustomization";
import { SIGNATURE_FONT_MEMBERS, SignatureFont } from "/src/models/card-customization";
import {
  userChangeSignatureFontAction,
  userChangeSignatureTextAction,
  userClickNextAction,
  userToggleCustomizeSignatureAction,
} from "/src/workflow/card-issuing/card-customization";
import "/src/styles/fonts.scss";
import {
  getCustomSignatureErrorString,
  getCustomSignatureHelperString,
  resolveSignatureText,
} from "/src/components/card-issuing/connected/card-customization-strings";

export function ConnectedCardCustomization({ state, dispatch }: ConnectedProps) {
  const { t } = useTranslation("card-issuing", { keyPrefix: "cardCustomization" });

  const mapToProps = ({ state, dispatch }: ConnectedProps) => ({
    // TODO(cvu): replace this with business name from state when implemented
    businessName: "Business Name",
    loading: state.cardCustomizationState.loading,
    customizeSignatureActive: state.cardCustomizationState.toggleCustomSignature,
    customSignatureInputError: getCustomSignatureErrorString(t)(
      state.cardCustomizationState.customSignatureInputError,
      state.cardCustomizationState.signatureInputText
    ),
    customSignatureInputHelper: getCustomSignatureHelperString(t)(
      state.cardCustomizationState.signatureText
    ),
    signatureInputText: state.cardCustomizationState.signatureInputText,
    signatureText: resolveSignatureText(t)(state.cardCustomizationState.signatureInputText),
    selectedFontFamily: state.cardCustomizationState.signatureFont,
    fontFamilies: SIGNATURE_FONT_MEMBERS,
    onCustomizeSignatureToggle: (value: boolean) =>
      dispatch(userToggleCustomizeSignatureAction(value)),
    onNextClick: () => dispatch(userClickNextAction()),
    onSignatureFontChange: (signatureFont: SignatureFont) =>
      dispatch(userChangeSignatureFontAction(signatureFont)),
    onSignatureTextChange: (signatureInputText: string) =>
      dispatch(userChangeSignatureTextAction(signatureInputText)),
  });

  return <CardCustomization {...mapToProps({ state, dispatch })} />;
}
