import { useEffect, useState } from "react";
import TextRenderer, {
  BUSINESS_BANKING_LOWER_RIGHT_RENDER_STRATEGY,
} from "/src/util/text-renderer";
import { CardPreviewFront, CardPreviewFrontProps } from "/src/components/ui/card/CardPreviewFront";

export interface WithTextRendererProps {
  readonly boundingBox: {
    width: number;
    height: number;
  };
  readonly estimatedFontSize: number;
  readonly fontFamily: string;
  readonly nameOnCard: string;
}

export function WithTextRendererCardPreviewFront(
  props: Omit<CardPreviewFrontProps, "signatureDataUri"> & WithTextRendererProps
) {
  const [signatureDataUri, setSignatureDataUri] = useState("");
  const [textRenderer, setTextRenderer] = useState<TextRenderer | null>(null);

  useEffect(() => {
    const txtRenderer = new TextRenderer(
      props.estimatedFontSize,
      props.fontFamily,
      props.nameOnCard,
      props.boundingBox,
      BUSINESS_BANKING_LOWER_RIGHT_RENDER_STRATEGY
    );
    setTextRenderer(txtRenderer);
  }, []);

  useEffect(() => {
    if (textRenderer) {
      textRenderer.fontFamily = props.fontFamily;
      textRenderer.text = props.nameOnCard;
      setSignatureDataUri(textRenderer.toDataURL());
    }
  }, [textRenderer, props.nameOnCard, props.fontFamily]);

  return <CardPreviewFront {...props} signatureDataUri={signatureDataUri}></CardPreviewFront>;
}
