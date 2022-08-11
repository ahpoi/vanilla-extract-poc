import {createVar, globalStyle, style} from "@vanilla-extract/css";
import {responsiveStyle} from "../../../core/responsive/responsive.utils";

export const base = style({
    display: "flex",
    flexDirection: "row",
});

export const hStackVars = {
    mobile: createVar(),
    tablet: createVar(),
    desktop: createVar(),
};

globalStyle(`${base}>*+*`, responsiveStyle({
    mobile: {
        marginLeft: hStackVars.mobile + " !important",
    },
    tablet: {
        marginLeft: hStackVars.tablet + " !important",
    },
    desktop: {
        marginLeft: hStackVars.desktop + " !important",
    },
}));