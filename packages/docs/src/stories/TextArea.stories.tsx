import type { Meta, StoryObj } from "@storybook/react";
import { Box, TextArea, Text, TextAreaProps } from "@ignite-ui/react";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observation</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observation",
  },
};
export const Disable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
