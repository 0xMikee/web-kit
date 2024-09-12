import { Carousel } from './Carousel';
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: "Components/Carousel",
    component: Carousel,
} satisfies Meta<typeof Carousel>;
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
    args: {
        children: "Hello World!"
    },
};
