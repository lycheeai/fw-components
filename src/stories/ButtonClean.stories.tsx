import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ButtonClean } from '../components/ButtonClean/ButtonClean';
import { GlobalStyle } from '../assets/GlobalStyle';
import { PPTelegrafFont } from '../assets/PPTelegrafFont/PPTelegrafFont';
import { SuisseIntlFont } from '../assets/SuisseIntlFont/SuisseIntlFont';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ButtonClean',
  component: ButtonClean,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div>
        <GlobalStyle />
        <PPTelegrafFont />
        <SuisseIntlFont />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonClean>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    appearance: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    appearance: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    label: 'Button',
    appearance: 'destructive',
  },
};
