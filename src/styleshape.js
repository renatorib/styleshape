import React from "react";

export default function shape(Component = "div") {
  return style =>
    React.forwardRef((props, ref) =>
      React.createElement(Component, {
        ...props,
        ref,
        style: {
          ...(typeof style === "function" ? style(props) : style),
          ...props.style
        }
      })
    );
}
