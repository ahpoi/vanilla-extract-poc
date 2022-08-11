import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../../core/vars.css";

export const link = recipe({
  base: {
    fontFamily: vars.fontFamily.primary,
    cursor: "pointer",
    outline: "none",
    ":hover": {
      textDecoration: "underline",
    },
    ":focus": {
      textDecoration: "underline",
    },
  },
  variants: {
    colorScheme: {
      primary: {
        color: vars.color.primary,
        ":hover": {
          color: vars.color.primary400,
        },
        ":focus": {
          color: vars.color.primary400,
        },
      },
    },
  },
  defaultVariants: {
    colorScheme: "primary",
  },
});

export const textDecoration = styleVariants({
  underline: { textDecoration: "underline" },
  none: { textDecoration: "none" },
});
