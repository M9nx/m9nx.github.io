// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// DO NOT EDIT! This is copy and pasted from dashboard
// frontend/@banking/ui/addon/utils/text-renderer.ts
// TODO(cvu): eventually import this from dashboard via bazel

import { assertNonNullable } from "./assert";

type Rect = {
  width: number;
  height: number;
};

type Coordinates = {
  x: number;
  y: number;
};

export type TextRenderingParams = {
  fontSize: number;
  fontFamily: string;
  coordinates: Coordinates;
};

export interface ITextRenderingStrategy {
  calculateTextRenderingParams: (
    context: CanvasRenderingContext2D,
    fontSize: number,
    fontFamily: string,
    text: string
  ) => TextRenderingParams;
  createCanvas: () => HTMLCanvasElement;
}

export interface ITextRenderer {
  fontFamily: string;
  text: string;

  toDataURL(): string;

  toBytes(): Promise<Uint8Array>;
}

export interface ITextRendererCtor {
  new (
    estimatedfontSize: number,
    fontFamily: string,
    text: string,
    boundingBox: Rect,
    strategy: ITextRenderingStrategy
  ): ITextRenderer;
}

const BUSINESS_BANKING_CARD_SIGNATURE_RECT_WIDTH = 1062;
const BUSINESS_BANKING_CARD_SIGNATURE_RECT_HEIGHT = 354;
const SIGNATURE_PADDING = 4;

export const BUSINESS_BANKING_CARD_SIGNATURE_RECT: Rect = {
  width: BUSINESS_BANKING_CARD_SIGNATURE_RECT_WIDTH,
  height: BUSINESS_BANKING_CARD_SIGNATURE_RECT_HEIGHT,
};

/**
 * Returns a DOMString-compatible string with CSS font specifier syntax
 * describing the given font-size and font-family.
 */
export function fontString(fontSize: number, fontFamily: string): string {
  return `${fontSize}px ${fontFamily}`;
}

/**
 * Returns whether the first given rectangle dimensions can contain the second
 */
export function contains(a: Rect, b: Rect): boolean {
  return a.height >= b.height && a.width >= b.width;
}

/**
 * Created measurements for text/font on a canvas configured for text-align
 * right and justified middle text within canvas bounds.
 *
 * TODO(steckel): Report errors.
 *
 * This relies upon browser support for TextMetrics' properties
 * actualBoundingBoxAscent, actualBoundingBoxDescent, actualBoundingBoxLeft and
 * actualBoundingBoxRight.
 *
 * At the time of writing this, Dashboard browser
 * support does not include browsers where this API is unavailable, but it
 * should be noted that it can throw an Error in the environments where it is
 * not.
 *
 * Additionally, the functions in this file and TextRenderer and
 * ITextRenderingStrategy are organized in a way that would allow "more
 * intelligent" rendering strategies to implement backwards-compatible
 * measuring logic if need be.
 */
export function measureCanvasText(
  context: CanvasRenderingContext2D,
  font: string,
  text: string
): { coordinates: Coordinates; rect: Rect } {
  context.textAlign = "right";
  context.textBaseline = "middle";
  context.font = font;
  const {
    actualBoundingBoxAscent,
    actualBoundingBoxDescent,
    actualBoundingBoxLeft,
    actualBoundingBoxRight,
  } = context.measureText(text);
  if (
    actualBoundingBoxAscent == null ||
    actualBoundingBoxDescent == null ||
    actualBoundingBoxLeft == null ||
    actualBoundingBoxRight == null
  ) {
    throw new Error("TextMetrics does not support required actualBoundingBox properties");
  }
  const height = Math.ceil(actualBoundingBoxAscent + actualBoundingBoxDescent) + SIGNATURE_PADDING;
  const width = Math.ceil(actualBoundingBoxLeft + actualBoundingBoxRight) + SIGNATURE_PADDING;
  const x = context.canvas.width - Math.ceil(actualBoundingBoxRight) - SIGNATURE_PADDING / 2;
  const y =
    (context.canvas.height - height) / 2 +
    Math.ceil(actualBoundingBoxAscent) +
    SIGNATURE_PADDING / 2;
  return { coordinates: { x, y }, rect: { width, height } };
}

type MeasureTextFn = (
  ...args: Parameters<typeof measureCanvasText>
) => ReturnType<typeof measureCanvasText>;

/**
 * Linearly increases/decreases the fontSize until it finds an augmentation
 * that no longer fits within the target bounding box.
 *
 * This method can take O(n+2) time where n is the distance between fontSize
 * and the ideal font size.
 *
 * The time complexity can surely be tweaked, but the use-case should result in
 * more iterations up front and fewer if incrementally changing text (e.g.
 * typing the name 'Bobert' and passing in the previous calculated font size as
 * the fontSize upon each letter entry).
 *
 */
export function calculateParameters(
  context: CanvasRenderingContext2D,
  fontFamily: string,
  fontSize: number,
  measureTextFn: MeasureTextFn,
  text: string
): TextRenderingParams {
  if (fontSize <= 0 || fontSize > Number.MAX_VALUE) {
    throw new RangeError("Calculated font size fell outside bounds before reaching a solution.");
  }

  if (!/\S/.test(text)) {
    return { fontFamily, fontSize, coordinates: { x: 0, y: 0 } };
  }

  const font = fontString(fontSize, fontFamily);
  const targetSize = {
    width: context.canvas.width,
    height: context.canvas.height,
  };
  const actualSize = measureTextFn(context, font, text);
  const fits = contains(targetSize, actualSize.rect);

  if (fits) {
    const increasedFontSize = fontSize + 1;
    const increasedFont = fontString(increasedFontSize, fontFamily);
    const increasedActualSize = measureTextFn(context, increasedFont, text);
    const increasedFits = contains(targetSize, increasedActualSize.rect);

    if (increasedFits) {
      return calculateParameters(context, fontFamily, fontSize + 2, measureTextFn, text);
    }

    // if this size fits, but n + 1 doesn't, we found our match
    return {
      fontFamily,
      fontSize,
      coordinates: actualSize.coordinates,
    };
  }

  const decreasedFontSize = fontSize - 1;
  const decreasedFont = fontString(decreasedFontSize, fontFamily);
  const decreasedActualSize = measureTextFn(context, decreasedFont, text);
  const decreasedFits = contains(targetSize, decreasedActualSize.rect);

  if (decreasedFits) {
    // if this size doesn't fit, but n - 1 does, we found our match
    return {
      fontFamily,
      fontSize: decreasedFontSize,
      coordinates: decreasedActualSize.coordinates,
    };
  }

  return calculateParameters(context, fontFamily, fontSize - 2, measureTextFn, text);
}

/**
 * The default signature strategy maximizes the font size to fill the height of
 * the available bounding box, text-align right and text-justified in the
 * middle.
 */
export const BUSINESS_BANKING_LOWER_RIGHT_RENDER_STRATEGY: ITextRenderingStrategy = {
  calculateTextRenderingParams(
    context: CanvasRenderingContext2D,
    fontSize: number,
    fontFamily: string,
    text: string
  ) {
    return calculateParameters(context, fontFamily, fontSize, measureCanvasText, text);
  },
  createCanvas() {
    return document.createElement("canvas");
  },
};

/**
 * TextRenderer class is intended to manage state for executing a given text
 * rendering strategy and provide opportunity for incremental text rendering
 * calculation.
 */
export default class TextRenderer implements ITextRenderer {
  #canvas: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;
  #textRenderingParams: TextRenderingParams;
  #strategy: ITextRenderingStrategy;
  #text: string;

  constructor(
    estimatedfontSize: number,
    fontFamily: string,
    text: string,
    boundingBox: Rect,
    strategy: ITextRenderingStrategy
  ) {
    this.#canvas = strategy.createCanvas();
    this.#canvas.height = boundingBox.height;
    this.#canvas.width = boundingBox.width;
    this.#context = assertNonNullable(this.#canvas.getContext("2d"));
    this.#strategy = strategy;
    this.#text = text;
    this.#textRenderingParams = this.#strategy.calculateTextRenderingParams(
      this.#context,
      estimatedfontSize,
      fontFamily,
      text
    );
  }

  get fontFamily() {
    return this.#textRenderingParams.fontFamily;
  }

  set fontFamily(newFontFamily: string) {
    if (this.#textRenderingParams.fontFamily !== newFontFamily) {
      const { fontSize } = this.#textRenderingParams;
      this.#textRenderingParams = this.#strategy.calculateTextRenderingParams(
        this.#context,
        fontSize,
        newFontFamily,
        this.#text
      );
    }
  }

  get text() {
    return this.#text;
  }

  set text(newText: string) {
    if (this.#text !== newText) {
      this.#text = newText;
      const { fontFamily, fontSize } = this.#textRenderingParams;
      this.#textRenderingParams = this.#strategy.calculateTextRenderingParams(
        this.#context,
        fontSize,
        fontFamily,
        this.#text
      );
    }
  }

  toDataURL(): string {
    this.render();
    return this.#canvas.toDataURL();
  }

  toBytes(): Promise<Uint8Array> {
    this.render();
    return new Promise<Blob | null>((resolve, reject) => {
      try {
        this.#canvas.toBlob((blob) => resolve(blob), "image/png");
      } catch (e) {
        reject(e);
      }
    })
      .then((blob: Blob | null) => blob ?? new Blob())
      .then((blob: Blob): Promise<ArrayBuffer> => blob.arrayBuffer())
      .then((buffer: ArrayBuffer) => new Uint8Array(buffer));
  }

  private render() {
    const context = assertNonNullable(this.#canvas.getContext("2d"));
    context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    if (/\S/.test(this.#text)) {
      const { fontFamily, fontSize, coordinates } = this.#textRenderingParams;
      context.font = fontString(fontSize, fontFamily);
      context.fillText(this.#text, coordinates.x, coordinates.y);
    }
  }
}
