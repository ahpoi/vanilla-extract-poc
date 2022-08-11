import { styleVariants } from "@vanilla-extract/css";
import { mapToProperty } from "../../../core/utils/map-to-property";
import { vars } from "../../../core/vars.css";

export const fontFamilyStyle = styleVariants(vars.fontFamily, mapToProperty("fontFamily"));

export const fontWeightStyle = styleVariants(vars.fontWeight, mapToProperty("fontWeight"));

export const lineHeightStyle = styleVariants(vars.lineHeight, mapToProperty("lineHeight"));

export const letterSpacingStyle = styleVariants(vars.letterSpacing, mapToProperty("letterSpacing"));
