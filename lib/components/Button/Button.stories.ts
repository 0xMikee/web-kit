import type { Meta, StoryObj } from '@storybook/react';
import {Button, ButtonColor, ButtonSize, ButtonVariant} from "./Button";

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        color: ButtonColor.PRIMARY,
        variant: ButtonVariant.BORDERED,
        size: ButtonSize.SMALL,
        children: "A",
        isIconOnly: true,
    },
};

export const Secondary: Story = {
    args: {
        color: ButtonColor.SECONDARY,
        variant: ButtonVariant.BORDERED,
        size: ButtonSize.MEDIUM,
        children: "Secondary Medium"
    },
};

export const Large: Story = {
    args: {
        color: ButtonColor.SECONDARY,
        variant: ButtonVariant.FADED,
        size: ButtonSize.LARGE,
        children: "Large"
    },
};

export const Medium: Story = {
    args: {
        color: ButtonColor.PRIMARY,
        size: ButtonSize.MEDIUM,
        children: "Medium"
    },
};

export const Small: Story = {
    args: {
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
        children: "Small",
    },
};
