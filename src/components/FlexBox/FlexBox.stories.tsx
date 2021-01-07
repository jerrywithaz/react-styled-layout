import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import { FlexBox, HorizontalFlexBox, VerticalFlexBox } from "./FlexBox";
import FlexItem from "../FlexItem";

export default {
  title: "FlexBox",
  component: FlexBox,
  parameters: {
    jest: [],
  },
} as Meta;

export const Simple3Column = () => (
  <FlexBox>
    <FlexItem xs={6} md={2} xl={4} padding={20}>
      Column 1
    </FlexItem>
    <FlexItem xs={3} md={6} xl={4} padding={20}>
      Column 2
    </FlexItem>
    <FlexItem xs={3} md={4} xl={4} padding={20}>
      Column 3
    </FlexItem>
  </FlexBox>
);

export const Tiles = () => (
  <HorizontalFlexBox
    flexWrap="wrap"
    background="#efefef"
    width="100%"
    height="100%"
  >
    {new Array(20).fill(null).map((_, i) => (
      <FlexItem sm={12} md={6} lg={4} xl={3} initial={3}>
        Tile {i + 1}
      </FlexItem>
    ))}
  </HorizontalFlexBox>
);

export const PageLayout = () => (
  <VerticalFlexBox width="100%" height="100%">
    <FlexItem
      displayFlex
      background="#0089cc"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      width="100%"
      flex="initial"
      flexWrap="wrap"
      sm={12}
      padding={12}
    >
      <FlexItem sm={12} initial={11}>
        Logo
      </FlexItem>
      <FlexItem sm={12} initial={1}>
        Menu
      </FlexItem>
    </FlexItem>
    <FlexItem
      displayFlex
      background="#efefef"
      flexDirection="row"
      width="100%"
      flexWrap="wrap"
      flex={1}
      sm={12}
      flexShrink={0}
      padding={12}
    >
      <FlexItem sm={12} initial={2}>
        Left
      </FlexItem>
      <FlexItem sm={12} initial={10}>
        Right
      </FlexItem>
    </FlexItem>
  </VerticalFlexBox>
);
