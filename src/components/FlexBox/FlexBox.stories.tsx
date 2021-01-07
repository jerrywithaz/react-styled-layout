import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import FlexBox from "./FlexBox";
import { FlexBoxProps } from "./FlexBox.types";
import FlexItem from "../FlexItem";

export default {
  title: "FlexBox",
  component: FlexBox,
} as Meta;

export const parameters = {
  controls: { expanded: true },
};

const Template: Story<FlexBoxProps> = (args) => <FlexBox {...args} />;

export const Interactive = Template.bind({});

Interactive.args = {
  children: (
    <>
      <FlexItem>Column 1</FlexItem>
      <FlexItem>Column 2</FlexItem>
      <FlexItem>Column 3</FlexItem>
    </>
  ),
};
