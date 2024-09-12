import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip.tsx";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof Tooltip>;
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
	args: {
		content: "sss",
		children: "AA",
		align: "start"
	},
};
