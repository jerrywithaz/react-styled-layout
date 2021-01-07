import { Properties } from "csstype";

export type FlexBoxProps = {
  alignItems?: Properties["alignItems"];
  alignSelf?: Properties["alignSelf"];
  children?: React.ReactNode;
  className?: string;
  flexDirection?: Properties["flexDirection"];
  flex?: Properties["flex"];
  flexFlow?: Properties["flexFlow"];
  flexWrap?: Properties["flexWrap"];
  height?: Properties["height"];
  justifyContent?: Properties["justifyContent"];
  justifySelf?: Properties["justifySelf"];
  width?: Properties["width"];
};