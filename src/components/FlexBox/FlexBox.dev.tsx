import React from "react";
import { FlexBox } from "./FlexBox";
import { FlexBoxProps } from "./FlexBox.types";

/**
 * The `FlexBox` component makes it easy to build flex layouts.
 */
const FlexBoxStoryComponent = (props: FlexBoxProps & React.ComponentProps<typeof FlexBox>) => <FlexBox {...props} />;

export { FlexBoxStoryComponent };
