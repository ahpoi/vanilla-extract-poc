import clsx from "clsx";
import * as React from "react";
import { Atoms, atoms, extractAtomsProps } from "../../core/atom";
import { icon } from "./icon.css";

export type IconProps = {
  size?: number;
  height?: number;
  width?: number;
  viewBox?: string;
  isActionable?: boolean;
  colorScheme?: "primary";
} & React.SVGProps<SVGSVGElement> &
  Omit<Atoms, "height" | "width">;

const Icon = (props: IconProps & { children: React.ReactNode }) => {
  const { size = 24, height, width, viewBox = "0 0 24 24", colorScheme, isActionable, children, ...delegated } = props;
  const { atomProps, nativeProps } = extractAtomsProps(delegated);
  const atomClass = clsx([icon({ colorScheme: colorScheme }), atoms({ ...atomProps })]);
  return (
    <svg
      style={{ pointerEvents: isActionable ? "auto" : "none" }}
      className={atomClass}
      aria-hidden={true}
      focusable={false}
      role={"presentation"}
      viewBox={viewBox}
      width={height ?? size}
      height={width ?? size}
      children={children}
      {...nativeProps}
    />
  );
};

export const FacebookIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      fill={"currentColor"}
      d="M12 .333C5.556.333.333 5.556.333 12S5.556 23.667 12 23.667l.25-.003v-7.692H9.666v-3.23h2.584v-1.938c0-2.66 1.502-4.522 3.875-4.522h2.584v3.23h-1.291c-1.291 0-1.938.646-1.938 1.938v1.292h3.23l-.646 3.23h-2.585v7.168c4.745-1.48 8.188-5.908 8.188-11.14C23.667 5.556 18.444.333 12 .333z"
    />
  </Icon>
);

export const InstagramIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path fill={"currentColor"} d="M11.947 14.367a2.373 2.373 0 002.421-2.315 2.368 2.368 0 10-2.421 2.315z" />
    <path
      fill={"currentColor"}
      d="M15.61 12.434a3.62 3.62 0 01-1.569 2.575 3.632 3.632 0 01-3.81.163A3.55 3.55 0 018.82 13.75c-.494-.909-.573-1.863-.283-2.854H7.424v5.22c0 .249.215.463.464.463h8.228a.472.472 0 00.465-.465v-5.218h-1.115c.158.504.206 1.016.144 1.538z"
    />
    <path
      fill={"currentColor"}
      d="M14.558 8.843a.472.472 0 00.463.315h.533v-.002c.192 0 .385.003.577-.001a.469.469 0 00.45-.466V7.582a.472.472 0 00-.474-.476h-1.105a.473.473 0 00-.473.476c0 .366-.002.732 0 1.098.001.055.012.111.029.163z"
    />
    <path
      fill={"currentColor"}
      d="M12.001.333C5.558.333.334 5.556.334 12s5.224 11.667 11.667 11.667c6.444 0 11.668-5.223 11.668-11.667S18.445.333 12 .333zm5.844 16.344c-.009.052-.016.104-.026.156-.093.48-.483.878-.96.98-.06.013-.122.022-.183.032h-9.35l-.075-.012a1.265 1.265 0 01-1.06-.965c-.014-.06-.023-.12-.033-.178V7.313c.003-.022.008-.044.01-.066a1.26 1.26 0 01.976-1.06c.055-.012.112-.02.169-.03h9.377c.022.004.043.009.065.012.53.073.962.479 1.065 1.003.01.05.017.102.025.153v9.352z"
    />
  </Icon>
);

export const TwitterIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill={"currentColor"}
      d="M12 .333C5.556.333.333 5.556.333 12S5.556 23.667 12 23.667 23.667 18.444 23.667 12 18.444.333 12 .333zm5.68 8.754c.005.126.008.252.008.38 0 3.872-2.947 8.337-8.338 8.337a8.292 8.292 0 01-4.492-1.317 5.914 5.914 0 004.339-1.213 2.934 2.934 0 01-2.738-2.035 2.904 2.904 0 001.324-.05 2.933 2.933 0 01-2.351-2.873v-.038c.395.22.848.352 1.328.367a2.929 2.929 0 01-.907-3.912 8.32 8.32 0 006.04 3.061 2.93 2.93 0 014.993-2.673 5.866 5.866 0 001.861-.71 2.936 2.936 0 01-1.288 1.62 5.831 5.831 0 001.683-.46 5.933 5.933 0 01-1.462 1.516z"
    />
  </Icon>
);

export const LinkedInIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill={"currentColor"}
      d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12zm8.48-2.061H5.76v8.17h2.72V9.94zm.18-2.528C8.641 6.611 8.068 6 7.137 6 6.208 6 5.6 6.61 5.6 7.411c0 .785.59 1.413 1.503 1.413h.018c.948 0 1.538-.628 1.538-1.413zm9.628 6.014c0-2.51-1.342-3.678-3.131-3.678-1.444 0-2.09.793-2.452 1.35V9.938h-2.72c.036.767 0 8.171 0 8.171h2.72v-4.563c0-.245.018-.488.09-.663.196-.488.644-.993 1.395-.993.985 0 1.378.75 1.378 1.847v4.372h2.72v-4.685z"
    />
  </Icon>
);
