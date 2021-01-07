import styled, { css } from "styled-components";
import isNumber from "lodash/isNumber";
import { responsiveProp } from "../../utils/breakpoints";
import cssProp from "../../utils/cssProp";
import { DEFAULT_COLUMN_WIDTH } from "../../constants";
import { FlexItemProps } from "./FlexItem.types";

const FlexItem = styled.div<FlexItemProps>`
  position: relative;
  flex: 1 1 auto;
  padding-left: 15px;
  padding-right: 15px;
  ${({
    xl,
    lg,
    md,
    sm,
    xs,
    order,
    alignSelf,
    flex,
    flexBasis,
    flexGrow,
    flexShrink,
  }) => css`
    ${responsiveProp("flex-basis", [
      { xl: xl ? `${xl * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { lg: lg ? `${lg * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { md: md ? `${md * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { sm: sm ? `${sm * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { xs: xs ? `${xs * DEFAULT_COLUMN_WIDTH}%` : undefined },
    ])}
    ${responsiveProp("max-width", [
      { xl: xl ? `${xl * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { lg: lg ? `${lg * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { md: md ? `${md * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { sm: sm ? `${sm * DEFAULT_COLUMN_WIDTH}%` : undefined },
      { xs: xs ? `${xs * DEFAULT_COLUMN_WIDTH}%` : undefined },
    ])}
    ${cssProp("align-self", alignSelf)};
    ${cssProp("flex", isNumber(flex) ? flex.toString() : flex)};
    ${cssProp(
      "flex-basis",
      isNumber(flexBasis) ? flexBasis.toString() : flexBasis
    )};
    ${cssProp(
      "flex-grow",
      isNumber(flexGrow) ? flexGrow.toString() : flexGrow
    )};
    ${cssProp("flex-shrink", flexShrink)};
    ${cssProp("order", isNumber(order) ? order.toString() : order)};
  `}
`;

export default FlexItem;
