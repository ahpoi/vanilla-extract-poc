import * as React from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import { Atoms, atoms, extractAtomsProps } from "../../../core/atom";
import { resolveResponsiveProps } from "../../../core/responsive/responsive.utils";
import { OptionalResponsiveValue, Space } from "../../../core/sprinkles.css";
import { vars } from "../../../core/vars.css";
import {base, hStackVars} from "./hstack.css";

type HStackProps = {
  space?: OptionalResponsiveValue<Space>;
  children: React.ReactNode;
} & Omit<Atoms, "flexDirection">;

export const HStack = (props: HStackProps) => {
  const { space = "none", children, ...delegated } = props;
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const { mobile, tablet, desktop } = resolveResponsiveProps(space, vars.space);
  const atomClass = atoms({ ...atomProps });
  const classes = [atomClass, base];
  const cssVariables = assignInlineVars({
    [hStackVars.mobile]: mobile,
    [hStackVars.tablet]: tablet ?? mobile,
    [hStackVars.desktop]: desktop ?? mobile,
  });
  return (
    <div style={cssVariables} className={clsx(classes)} {...nativeProps}>
      {children}
    </div>
  );
};
