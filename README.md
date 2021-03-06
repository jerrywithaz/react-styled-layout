# React-Styled-Layout

React-Styled-Layout is a React Library built on type of styled components that combines the flexibility of css flexbox's with the responsiveness of the bootstrap grid system to give you everything you need to quickly build responsive layouts for your pages and components.

## Getting Started

```cli
yarn add react-styled-layout

# or

npm install react-styled-layout
```

## Basic Components

There are 2 basic components exported from `react-styled-layout` the `FlexBox` and the `FlexItem`. The `FlexBox` component can be used to configured flexbox containers that contain other `FlexBox` components or `FlexItem`'s.

The `FlexItem` component is meant to be used as columns that can adjust to the users device width. By default the columns are based on a 12 column system but can be adjusted.

## Example Usage

### Horizontal Columns

Below is an example of using the `FlexBox` component in conjuction with the `FlexItem`. We set up a 3 column grid where the widths of each column
are dynamically adjusted based on the users screen size.

```tsx
import { FlexBox, FlexItem } from "react-styled-layout";

const MyComponent = () => {
  return (
    <FlexBox background="#efefef">
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
};
```

### Grid System

Below is an example of using the `FlexBox` component in conjuction with the `FlexItem` to create a responsive grid system.

```tsx
import { HorizontalFlexBox, FlexItem } from "react-styled-layout";

const MyComponent = () => {
  return (
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
};
```

### Card With Header, Content and footer

Below is an example of using the `FlexBox` component in conjuction with the `FlexItem` to build a card component
that has a header, content and footer.

```tsx
import { HorizontalFlexBox, FlexItem } from "react-styled-layout";

const MyComponent = () => {
  return (
    <VerticalFlexBox
      flexWrap="wrap"
      background="#ffffff"
      width={300}
      height={200}
      justifyContent="space-between"
      padding={12}
    >
      <HorizontalFlexBox>Header</HorizontalFlexBox>
      <FlexBox flex={1}>Content</FlexBox>
      <FlexBox>Footer</FlexBox>
    </VerticalFlexBox>
  );
};
```
