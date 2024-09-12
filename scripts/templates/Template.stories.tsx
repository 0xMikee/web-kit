import { Template } from './Template';
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Template",
    component: Template,
} satisfies Meta<typeof Template>;
export default meta;

type Story = StoryObj<typeof Template>;

export const Primary: Story = {
    args: {
        children: "Hello World!"
    },
};
