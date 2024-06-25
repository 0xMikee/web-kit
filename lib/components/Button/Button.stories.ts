import type { Meta, StoryObj } from '@storybook/react';
import {Button, ButtonSize, ButtonType} from './Button';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: ButtonType.PRIMARY,
        size: ButtonSize.SMALL,
        children: "Primary Small"
    },
};

export const Secondary: Story = {
    args: {
        type: ButtonType.SECONDARY,
        size: ButtonSize.MEDIUM,
        children: "Secondary Medium"
    },
};

export const Large: Story = {
    args: {
        type: ButtonType.SECONDARY,
        size: ButtonSize.LARGE,
        children: "Large"
    },
};

export const Medium: Story = {
    args: {
        type: ButtonType.PRIMARY,
        size: ButtonSize.MEDIUM,
        children: "Medium"
    },
};

export const Small: Story = {
    args: {
        type: ButtonType.PRIMARY,
        size: ButtonSize.SMALL,
        children: "Small",
    },
};
