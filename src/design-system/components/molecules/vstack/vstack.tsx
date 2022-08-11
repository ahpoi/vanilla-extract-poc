import { assignInlineVars } from "@vanilla-extract/dynamic";
import clsx from "clsx";
import * as React from "react";
import { Atoms, atoms, extractAtomsProps } from "../../../core/atom";
import { resolveResponsiveProps } from "../../../core/responsive/responsive.utils";
import { OptionalResponsiveValue, Space } from "../../../core/sprinkles.css";
import { vars } from "../../../core/vars.css";
import { base, vStackVars } from "./vstack.css";

type VStackProps = {
  space?: OptionalResponsiveValue<Space>;
  children: React.ReactNode;
} & Omit<Atoms, "flexDirection">;

export const VStack = (props: VStackProps) => {
  const { space = "none", children, ...delegated } = props;
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const { mobile, tablet, desktop } = resolveResponsiveProps(space, vars.space);
  const atomClass = atoms({ ...atomProps });
  const classes = [atomClass, base];
  const cssVariables = assignInlineVars({
    [vStackVars.mobile]: mobile,
    [vStackVars.tablet]: tablet ?? mobile,
    [vStackVars.desktop]: desktop ?? mobile,
  });
  return (
    <div style={cssVariables} className={clsx(classes)} {...nativeProps}>
      {children}
    </div>
  );
};
