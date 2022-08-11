import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import * as React from "react";
import { Atoms, atoms, extractAtomsProps } from "../../../core/atom";
import { resolveResponsiveProps } from "../../../core/responsive/responsive.utils";
import { RequiredResponsiveValue, Space } from "../../../core/sprinkles.css";
import { vars } from "../../../core/vars.css";
import { rStack, rStackVars } from "./rstack.css";

type RStackProps = {
  space?: RequiredResponsiveValue<Space>;
  children: React.ReactNode;
} & Omit<Atoms, "flexDirection">;

export const RStack = (props: RStackProps) => {
  const { space = "none", children, ...delegated } = props;
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const { mobile, tablet, desktop } = resolveResponsiveProps(space, vars.space);
  const atomClass = atoms({ ...atomProps });
  const classes = [atomClass, rStack];
  const cssVariables = assignInlineVars({
    [rStackVars.mobile]: mobile,
    [rStackVars.tablet]: tablet ?? mobile,
    [rStackVars.desktop]: desktop ?? mobile,
  });
  return (
    <div style={cssVariables} className={clsx(classes)} {...nativeProps}>
      {children}
    </div>
  );
};
