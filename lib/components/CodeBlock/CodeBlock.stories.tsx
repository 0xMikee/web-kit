import { CodeBlock } from './CodeBlock';
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/CodeBlock",
    component: CodeBlock,
} satisfies Meta<typeof CodeBlock>;
export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const Primary: Story = {
    args: {
        code: "Hello World!"
    },
};
