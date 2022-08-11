import { element } from "./reset.css";
import * as resetStyles from "./reset.css";
import { sprinkles } from "./sprinkles.css";

export type Atoms = {
  reset?: keyof JSX.IntrinsicElements;
} & Parameters<typeof sprinkles>[0];

export const atoms = ({ reset, ...rest }: Atoms) => {
  if (!reset) {
    return sprinkles(rest);
  }
  const elementReset = element[reset as keyof typeof element];
  const sprinklesClasses = sprinkles(rest);
  return `${resetStyles.base}${elementReset ? ` ${elementReset}` : ""}${
    sprinklesClasses ? ` ${sprinklesClasses}` : ""
  }`;
};

export const extractAtomsProps = (props: unknown) => {
  const nativeProps: Record<string, unknown> = {};
  const atomProps: Record<string, unknown> = {};
  // @ts-ignore
  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Omit<Atoms, "reset">)) {
      // @ts-ignore
      atomProps[key] = props[key as keyof typeof props];
    } else {
      // @ts-ignore
      nativeProps[key] = props[key as keyof typeof props];
    }
  }
  return { nativeProps, atomProps };
};
