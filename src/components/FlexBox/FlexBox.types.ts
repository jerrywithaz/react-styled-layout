import { Properties } from "csstype";

type HTMLDivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type FlexBoxProps = {
  alignItems?: Properties["alignItems"];
  alignSelf?: Properties["alignSelf"];
  background?: string;
  children?: React.ReactNode;
  className?: string;
  flexDirection?: Properties["flexDirection"];
  flex?: Properties["flex"];
  flexFlow?: Properties["flexFlow"];
  flexWrap?: Properties["flexWrap"];
  height?: string | number;
  justifyContent?: Properties["justifyContent"];
  justifySelf?: Properties["justifySelf"];
  margin?: string | number;
  padding?: string | number;
  width?: string | number;
} & HTMLDivProps;