import React from "react";
import { FabulousButton } from ".";

export default {
  title: "FabulousButton",
  component: FabulousButton
};

export const ToStorybook = () => <FabulousButton />;

ToStorybook.story = {
  name: "default"
};
