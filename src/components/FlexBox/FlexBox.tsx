import React from 'react';
import styled, { css } from 'styled-components';
import isNumber from 'lodash/isNumber';
import { FlexBoxProps } from './FlexBox.types';
import cssProp from '../../utils/cssProp';

/**
 * The `FlexBox` component makes it easy to build flex layouts.
 */
const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  box-sizing: border-box;
  ${({
    alignItems,
    alignSelf,
    background,
    flex,
    flexDirection,
    flexWrap,
    flexFlow,
    height,
    justifyContent,
    justifySelf,
    width,
    padding,
    margin
  }) => css`
    ${cssProp("align-items", alignItems)};
    ${cssProp("align-self", alignSelf)};
    ${cssProp("background", background)};
    ${cssProp("flex", isNumber(flex) ? flex.toString() : flex)};
    ${cssProp("flex-direction", flexDirection)};
    ${cssProp("flex-flow", flexFlow)};
    ${cssProp("flex-wrap", flexWrap)};
    ${cssProp("height", height)};
    ${cssProp("justify-content", justifyContent)};
    ${cssProp("justify-self", justifySelf)};
    ${cssProp("padding", padding)};
    ${cssProp("margin", margin)};
    ${cssProp("width", width)};
  `}
`;

const HorizontalFlexBox = styled(FlexBox)`
    flex-direction: row;
`;

const VerticalFlexBox = styled(FlexBox)`
    flex-direction: column;
`;

export { FlexBox, HorizontalFlexBox, VerticalFlexBox };
