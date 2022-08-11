import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { responsiveStyle } from "../../../core/responsive/responsive.utils";

export const rStackVars = {
  mobile: createVar(),
  tablet: createVar(),
  desktop: createVar(),
};

export const rStack = style(
  responsiveStyle({
    mobile: {
      display: "flex",
      flexDirection: "column",
    },
    tablet: {
      display: "flex",
      flexDirection: "row",
    },
    desktop: {
      display: "flex",
      flexDirection: "row",
    },
  })
);

globalStyle(
  `${rStack}>*+*`,
  responsiveStyle({
    mobile: {
      marginTop: rStackVars.mobile + " !important",
    },
    tablet: {
      marginTop: "0 !important",
      marginLeft: rStackVars.tablet + " !important",
    },
    desktop: {
      marginTop: "0 !important",
      marginLeft: rStackVars.desktop + " !important",
    },
  })
);
