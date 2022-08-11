import clsx from "clsx";
import * as React from "react";
import { Atoms, atoms, extractAtomsProps } from "../../../core/atom";
import {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
  OptionalResponsiveValue,
} from "../../../core/sprinkles.css";
import { fontFamilyStyle, fontWeightStyle, letterSpacingStyle, lineHeightStyle } from "./typography.css";

export type TypographyProps = {
  id?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  fontSize?: OptionalResponsiveValue<FontSize>;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  children?: React.ReactNode;
} & Atoms;

export const Heading = (props: TypographyProps) => {
  const {
    id,
    as = "h1",
    p = "none",
    m = "none",
    fontSize = "xl",
    fontFamily = "heading",
    fontWeight = "bold",
    lineHeight = "normal",
    letterSpacing = "normal",
    children,
    ...delegated
  } = props;
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const atomClass = atoms({ fontSize, p, m, ...atomProps });
  return createElement(as, {
    id: id,
    children: children,
    className: clsx([
      fontFamilyStyle[fontFamily],
      fontWeightStyle[fontWeight],
      lineHeightStyle[lineHeight],
      letterSpacingStyle[letterSpacing],
      atomClass,
    ]),
    ...nativeProps,
  });
};

export type TextProps = {
  id?: string;
  fontSize?: OptionalResponsiveValue<FontSize>;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  children?: React.ReactNode;
} & Atoms;

export const Text = (props: TextProps) => {
  const {
    id,
    p = "none",
    m = "none",
    fontSize = "sm",
    fontFamily = "body",
    fontWeight = "normal",
    children,
    ...delegated
  } = props;
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const atomClass = atoms({ fontSize, p, m, ...atomProps });
  return createElement("div", {
    id: id,
    children: children,
    className: clsx([
      fontFamilyStyle[fontFamily],
      fontWeightStyle[fontWeight],
      lineHeightStyle["base"],
      letterSpacingStyle["normal"],
      atomClass,
    ]),
    ...nativeProps,
  });
};

export const Paragraph = (props: TextProps) => {
  const {
    id,
    p = "none",
    m = "none",
    fontSize = "sm",
    fontFamily = "body",
    fontWeight = "normal",
    children,
    ...delegated
  } = props;
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const atomClass = atoms({ fontSize, p, m, ...atomProps });
  return createElement("p", {
    id: id,
    children: children,
    className: clsx([
      fontFamilyStyle[fontFamily],
      fontWeightStyle[fontWeight],
      lineHeightStyle["base"],
      letterSpacingStyle["normal"],
      atomClass,
    ]),
    ...nativeProps,
  });
};

const createElement = (
  as: TypographyProps["as"],
  props: {
    id?: string;
    children?: React.ReactNode;
    className?: string;
  }
) => React.createElement(as as never, props);
