import { Code } from './Code';
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Code",
    component: Code,
} satisfies Meta<typeof Code>;
export default meta;

type Story = StoryObj<typeof Code>;

export const Primary: Story = {
    args: {
        children: "Hello World!"
    },
};
