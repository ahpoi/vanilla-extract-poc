import clsx from "clsx";
import * as React from "react";
import { atoms, Atoms, extractAtomsProps } from "../../../core/atom";
import {
  FontFamily,
  FontSize,
  FontWeight,
  LetterSpacing,
  LineHeight,
  OptionalResponsiveValue,
} from "../../../core/sprinkles.css";
import { link, textDecoration } from "./link.css";

export type LinkProps = {
  id?: string;
  fontSize?: OptionalResponsiveValue<FontSize>;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  isExternal?: boolean;
  underline?: boolean;
  children: React.ReactNode;
  href: string;
} & Atoms;

export const Link = (props: LinkProps) => {
  const {
    href,
    isExternal,
    underline,
    children,
    fontSize = "sm",
    p = "none",
    m = "none",
    fontWeight = "normal",
    lineHeight = "base",
    letterSpacing = "normal",
    ...delegated
  } = props;
  const target = isExternal ? "_blank" : "_self";
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const atomClass = atoms({ fontSize, p, m, ...atomProps });
  const classes = clsx([link({ colorScheme: "primary" }), textDecoration[underline ? "underline" : "none"], atomClass]);
  return (
    <a href={href} className={classes} target={target} {...nativeProps}>
      {children}
    </a>
  );
};
