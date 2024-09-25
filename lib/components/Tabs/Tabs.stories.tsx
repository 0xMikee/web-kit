import { Tabs } from './Tabs';
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Tabs",
    component: Tabs,
} satisfies Meta<typeof Tabs>;
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        children: "Hello World!"
    },
};
