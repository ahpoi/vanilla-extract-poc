import {
  ConditionalValue,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
  RequiredConditionalValue,
} from "@vanilla-extract/sprinkles";
import { responsiveProperties, unresponsiveProperties } from "./atom-properties";
import { breakpointNames, responsiveConditions } from "./breakpoints";
import { vars } from "./vars.css";

export const unresponsiveAtomicProperties = defineProperties({
  properties: unresponsiveProperties,
  shorthands: {
    inset: ["top", "bottom", "left", "right"],
  },
});

export const responsiveAtomicProperties = defineProperties({
  defaultCondition: "mobile",
  conditions: responsiveConditions,
  responsiveArray: breakpointNames,
  properties: responsiveProperties,
  shorthands: {
    p: ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    py: ["paddingTop", "paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    m: ["marginBottom", "marginTop", "marginLeft", "marginRight"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    my: ["marginTop", "marginBottom"],
    mx: ["marginLeft", "marginRight"],
  },
});

export type Color = keyof typeof vars.color;
export type Space = keyof typeof vars.space;
export type FontWeight = keyof typeof vars.fontWeight;
export type FontSize = keyof typeof vars.fontSize;
export type LineHeight = keyof typeof vars.lineHeight;
export type FontFamily = keyof typeof vars.fontFamily;
export type LetterSpacing = keyof typeof vars.letterSpacing;

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
  typeof responsiveAtomicProperties,
  Value
>;

export const normalizeResponsiveValue = createNormalizeValueFn(responsiveAtomicProperties);

export const sprinkles = createSprinkles(unresponsiveAtomicProperties, responsiveAtomicProperties);
