import {createVar, globalStyle, style} from "@vanilla-extract/css";
import {responsiveStyle} from "../../../core/responsive/responsive.utils";

export const base = style({
    display: "flex",
    flexDirection: "column",
});

export const vStackVars = {
    mobile: createVar(),
    tablet: createVar(),
    desktop: createVar(),
};

// globalStyle(`${base}>*+*`, {
//
//     marginTop: vStackVars.mobile + " !important",
//     '@media': {
//         "screen and (min-width: 768px)": {
//             marginTop: vStackVars.tablet + " !important",
//         },
//         "screen and (min-width: 970px)": {
//             marginTop: vStackVars.desktop + " !important",
//         }
//     }
// });

globalStyle(`${base}>*+*`, responsiveStyle({
    mobile: {
        marginTop: vStackVars.mobile + " !important",
    },
    tablet: {
        marginTop: vStackVars.tablet + " !important",
    },
    desktop: {
        marginTop: vStackVars.tablet + " !important",
    },
}));