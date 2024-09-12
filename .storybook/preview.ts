import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		darkMode: {
			dark: { ...themes.dark, appBg: "#101010" },
			light: { ...themes.normal },
		},
	},
};

export default preview;
