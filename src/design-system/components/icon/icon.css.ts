import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../core/vars.css";

export const icon = recipe({
  variants: {
    colorScheme: {
      primary: {
        fill: vars.color.primary,
        ":hover": {
          fill: vars.color.primary400,
        },
        ":focus": {
          fill: vars.color.primary400,
        },
      },
    },
  },
  defaultVariants: {
    colorScheme: "primary",
  },
});
