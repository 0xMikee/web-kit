import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#101010',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: '#101010' },
      light: { ...themes.normal },
    },
  },
};

export default preview;
