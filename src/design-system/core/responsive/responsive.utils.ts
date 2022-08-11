import { StyleRule } from "@vanilla-extract/css";
import { responsiveConditions } from "../breakpoints";
import { normalizeResponsiveValue, OptionalResponsiveValue } from "../sprinkles.css";

type CSSProps = Omit<StyleRule, "@media" | "@supports">;

export const resolveResponsiveProps = <Keys extends string | number>(
  value: OptionalResponsiveValue<Keys>,
  atoms: Record<Keys, string>
) => {
  if (typeof value === "string" || typeof value === "number") {
    return { mobile: atoms[value!] };
  }
  const normalized = normalizeResponsiveValue(value);
  const mobileAtom = atoms[normalized.mobile!];
  const tabletAtom = atoms[normalized.tablet!];
  const desktopAtom = atoms[normalized.desktop!];
  return { mobile: mobileAtom, tablet: tabletAtom, desktop: desktopAtom };
};

const createMediaQuery = (bk: "tablet" | "desktop") => (styles: CSSProps) =>
  !styles || Object.keys(styles).length === 0 ? {} : { [responsiveConditions[bk]["@media"]]: styles };

const mediaQuery = {
  tablet: createMediaQuery("tablet"),
  desktop: createMediaQuery("desktop"),
};

type ResponsiveStyle = Partial<{
  base: CSSProps;
  mobile: CSSProps;
  tablet: CSSProps;
  desktop: CSSProps;
}>;

export const responsiveStyle = ({ mobile, tablet, desktop }: ResponsiveStyle) => ({
  ...mobile,
  "@media": {
    ...mediaQuery.tablet(tablet ?? {}),
    ...mediaQuery.desktop(desktop ?? {}),
  },
});
