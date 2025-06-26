import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MarketActivityIndicator,
  MarketButton,
  MarketCheckbox,
  MarketList,
  MarketPill,
  MarketRadio,
  MarketRow,
} from "@market/react";
import { nonNullable } from "/src/util/predicates";
import { MarketRowCustomEvent } from "@market/web-components/dist/types/components";
import FontFaceObserver from "fontfaceobserver";
import { WithTextRendererCardPreviewFront } from "/src/components/ui/card/WithTextRendererCardPreviewFront";
import { BUSINESS_BANKING_CARD_SIGNATURE_RECT } from "/src/util/text-renderer";
import { InputTextField } from "/src/components/ui/form/InputTextField";
import {
  cardPreview,
  cardPreviewContainer,
  container,
  loadingIndicator,
  pill,
  signatureContent,
  signaturePreview,
} from "./CardCustomization.css";
import { preview } from "../ui/card/CardPreview.css";
import { Screen } from "/src/components/ui/modals/Screen";

const SIGNATURE_FONT_SIZE = 32;

export interface CardCustomizationProps<SignatureFont> {
  readonly businessName: string;
  readonly customizeSignatureActive: boolean;
  readonly customSignatureInputError?: string;
  readonly customSignatureInputHelper?: string;
  readonly fontFamilies: SignatureFont[];
  readonly loading: boolean;
  readonly signatureInputText: string;
  readonly signatureText: string;
  readonly selectedFontFamily: string;
  readonly onCustomizeSignatureToggle: (value: boolean) => void;
  readonly onNextClick: () => void;
  readonly onSignatureFontChange: (font: SignatureFont) => void;
  readonly onSignatureTextChange: (text: string) => void;
}

export function CardCustomization<SignatureFont extends string>({
  businessName,
  customizeSignatureActive,
  customSignatureInputError,
  customSignatureInputHelper,
  fontFamilies,
  loading,
  signatureInputText,
  signatureText,
  selectedFontFamily,
  onCustomizeSignatureToggle,
  onNextClick,
  onSignatureFontChange,
  onSignatureTextChange,
}: CardCustomizationProps<SignatureFont>) {
  const { t } = useTranslation("card-issuing", { keyPrefix: "cardCustomization" });
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [loadedFontFamilies, setLoadedFontFamilies] = useState<SignatureFont[]>([]);

  const loadSignatureFont = async (font: SignatureFont): Promise<SignatureFont | null> => {
    try {
      const observer = new FontFaceObserver(font);
      await observer.load();
      return font;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    setFontsLoaded(false);
    Promise.all(fontFamilies.map(loadSignatureFont)).then((fonts) => {
      const loadedFonts = fonts.filter(nonNullable);
      setLoadedFontFamilies(loadedFonts);
      setFontsLoaded(true);
    });
  }, [fontFamilies]);

  const onFontSelectionChange = (event: MarketRowCustomEvent<{ value: string }>) => {
    const font = event.detail.value;
    onSignatureFontChange(font as SignatureFont);
  };

  const cardSignatureList = fontsLoaded ? (
    <div className={signatureContent}>
      <InputTextField
        error={customSignatureInputError}
        helper={customSignatureInputHelper}
        name={t("customSignatureTextLabel")}
        label={t("customSignatureTextLabel")}
        value={signatureInputText}
        onTextChange={onSignatureTextChange}
      />
      <MarketList interactive value={selectedFontFamily}>
        {loadedFontFamilies.map((fontFamily) => (
          <MarketRow
            value={fontFamily}
            key={fontFamily}
            onMarketRowSelected={onFontSelectionChange}
            data-testid="font-row"
          >
            <label slot="label" style={{ fontFamily }} className={signaturePreview}>
              {signatureText}
            </label>
            <MarketRadio slot="control"></MarketRadio>
          </MarketRow>
        ))}
      </MarketList>
    </div>
  ) : (
    <MarketActivityIndicator className={loadingIndicator} />
  );

  const buttons = [
    <MarketButton
      key={t("nextButtonText")}
      rank="primary"
      isLoading={loading}
      onClick={onNextClick}
    >
      {t("nextButtonText")}
    </MarketButton>,
  ];

  const content = (
    <div className={container}>
      <div className={cardPreviewContainer}>
        <div className={cardPreview}>
          <WithTextRendererCardPreviewFront
            className={preview}
            businessName={businessName}
            boundingBox={BUSINESS_BANKING_CARD_SIGNATURE_RECT}
            estimatedFontSize={SIGNATURE_FONT_SIZE}
            fontFamily={selectedFontFamily}
            nameOnCard={customizeSignatureActive ? signatureText : ""}
          />
        </div>
      </div>
      <div>
        <MarketRow
          selected={customizeSignatureActive}
          onMarketRowSelected={() => onCustomizeSignatureToggle(true)}
          onMarketRowDeselected={() => onCustomizeSignatureToggle(false)}
        >
          <label slot="label">
            {t("createCustomSignatureText")}
            <MarketPill size="small" className={pill}>
              {t("optionalPillText")}
            </MarketPill>
          </label>
          <MarketCheckbox slot="control" />
        </MarketRow>
      </div>
      {customizeSignatureActive ? cardSignatureList : <></>}
    </div>
  );

  return <Screen buttons={buttons} content={content} title={t("title")} />;
}
