import { Properties } from "csstype";
import { Breakpoints } from "../breakpoints";
import { responsiveStyle } from "../responsive/responsive.utils";

export const mapToProperty =
  <Property extends keyof Properties<string | number>>(property: Property, breakpoint?: Breakpoints) =>
  (value: string | number) => {
    const styleRule = { [property]: value };
    return breakpoint ? responsiveStyle({ [breakpoint]: styleRule }) : styleRule;
  };
