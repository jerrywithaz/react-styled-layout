import { Properties } from "csstype";
import { Breakpoint } from "../../types";

type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type FlexItemProps = Partial<Record<Breakpoint, number>> & {
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
