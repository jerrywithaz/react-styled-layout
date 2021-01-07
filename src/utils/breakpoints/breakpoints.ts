import { Breakpoint, Breakpoints } from "../../types";
import notEmpty from "../notEmpty";

const BREAKPOINTS: Record<Breakpoint, string> = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1400px",
};

const breakpoints = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  return {
    ...accumulator,
    [label]: `@media (max-width: ${BREAKPOINTS[label as Breakpoint]})`,
  };
}, {} as Breakpoints);

const responsiveProp = (
  cssProp: string,
  variations: Partial<Record<Breakpoint, string | number | undefined | null>>[],
  customBreakpoints?: Breakpoints
) => {
  const keys = variations
    .map((variation) => {
      const breakpoint = Object.keys(variation)[0] as Breakpoint;
      const value = variation[breakpoint];
      const media = (customBreakpoints || breakpoints)[breakpoint as Breakpoint];
      if (notEmpty(value)) return `${media} { ${cssProp}: ${value}; }`;
      return undefined;
    })
    .filter(notEmpty);
  return keys;
};

export { responsiveProp };
export default breakpoints;
