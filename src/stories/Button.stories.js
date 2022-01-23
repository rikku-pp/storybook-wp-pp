import React from "react";
import { Button } from "@storybook/react/demo";

export default {
  title: "Button",
  component: Button
};

export const Text = () => <Button onClick={() => {}}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={() => {}}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

Emoji.story = {
  parameters: {
    layout: "centered"
  }
};
