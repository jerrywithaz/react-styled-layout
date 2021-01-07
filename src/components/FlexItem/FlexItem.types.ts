import { Properties } from "csstype";
import { Breakpoint } from "../../types";

export type FlexItemProps = Partial<Record<Breakpoint, number>> & {
  alignSelf?: Properties["alignSelf"];
  className?: string;
  flex?: Properties["flex"];
  flexBasis?: Properties["flexBasis"];
  flexGrow?: Properties["flexGrow"];
  flexShrink?: Properties["flexShrink"];
  order?: Properties["order"];
};
