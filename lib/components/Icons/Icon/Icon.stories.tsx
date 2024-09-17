import { Icon } from './Icon.tsx';
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Icon",
    component: Icon,
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
    args: {
        children: "Hello World!"
    },
};
