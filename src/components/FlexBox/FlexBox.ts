import styled, { css } from 'styled-components';
import isNumber from 'lodash/isNumber';
import { FlexBoxProps } from './FlexBox.types';
import cssProp from '../../utils/cssProp';

const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  ${({
    alignItems,
    alignSelf,
    flex,
    flexDirection,
    flexWrap = "wrap",
    flexFlow,
    height,
    justifyContent,
    justifySelf,
    width
  }) => css`
    ${cssProp("align-items", alignItems)};
    ${cssProp("align-self", alignSelf)};
    ${cssProp("flex", isNumber(flex) ? flex.toString() : flex)};
    ${cssProp("flex-direction", flexDirection)};
    ${cssProp("flex-flow", flexFlow)};
    ${cssProp("flex-wrap", flexWrap)};
    ${cssProp("height", height)};
    ${cssProp("justify-content", justifyContent)};
    ${cssProp("justify-self", justifySelf)};
    ${cssProp("width", width)};
  `}
`;

export default FlexBox;
