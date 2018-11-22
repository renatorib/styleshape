# styleshape

**Only 180 bytes without any dependency.**  
Create components with default styles passed to `style`.

```js
import shape from "styleshape";

const SliderWrapper = shape("div")({
  position: "relative",
  whiteSpace: "nowrap",
  overflowX: "hidden",
  textAlign: "center",
  userSelect: "none"
});

const SliderTracker = shape("div")(props => ({
  width: "100%",
  display: "flex",
  alignItems: "stretch",
  transtion: "all 0.3s ease",
  margin: `0 ${-props.gutter / 2}px`
}));

const Slide = shape("div")(props => ({
  position: "static",
  whiteSpace: "normal",
  overflowX: "visible",
  textAlign: "left",
  flexShrink: 0,
  margin: `0 ${props.gutter / 2}px`
}));
```

```jsx
<SliderWrapper>
  <SliderTracker gutter={10}>
    <Slide>First slide</Slide>
    <Slide>Second slide</Slide>
  </SliderTracker>
</SliderWrapper>
```
