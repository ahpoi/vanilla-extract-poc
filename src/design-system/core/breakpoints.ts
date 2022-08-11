export type Breakpoints = "mobile" | "tablet" | "desktop";
export const breakpointNames = ["mobile", "tablet", "desktop"] as const;

const breakpoints = {
  mobile: 576,
  tablet: 768,
  desktop: 970,
} as const;

export const responsiveConditions = {
  mobile: {},
  tablet: {
    "@media": `screen and (min-width: ${breakpoints.tablet}px)`,
  },
  desktop: {
    "@media": `screen and (min-width: ${breakpoints.desktop}px)`,
  },
};
