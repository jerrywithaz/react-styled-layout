import { Properties } from "csstype";
import { Breakpoint } from "../../types";

type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type FlexItemProps =  {
  /** The number of columns to fill when the item reaches the `xs` breakpoint. */
  xs?: number;
  /** The number of columns to fill when the item reaches the `sm` breakpoint. */
  sm?: number;
  /** The number of columns to fill when the item reaches the `md` breakpoint. */
  md?: number;
  /** The number of columns to fill when the item reaches the `lg` breakpoint. */
  lg?: number;
  /** The number of columns to fill when the item reaches the `xl` breakpoint. */
  xl?: number;
  alignSelf?: Properties["alignSelf"];
  className?: string;
  initial?: number;
  flex?: Properties["flex"];
  flexBasis?: Properties["flexBasis"];
  flexGrow?: Properties["flexGrow"];
  flexShrink?: Properties["flexShrink"];
  order?: Properties["order"];
  displayFlex?: boolean;
} & HTMLDivProps;
