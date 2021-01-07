import React from "react";
import FlexItem from "./FlexItem";
import { FlexItemProps } from "./FlexItem.types";

/**
 * The `FlexItem` component makes it easy to build responsive columns and grids.
 */
const FlexItemStoryComponent = (props: FlexItemProps & React.ComponentProps<typeof FlexItem>) => <FlexItem {...props} />;

export { FlexItemStoryComponent };
