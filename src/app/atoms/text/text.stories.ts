import type { Meta, StoryObj } from '@storybook/angular';
import { TextComponent } from './text.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<TextComponent> = {
  title: 'Atoms/Text',
  component: TextComponent,
  tags: ['autodocs'],
  argTypes: {
   
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<TextComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Title: Story = {
  args: {
    text: 'Sample Text',
    type: 'title'
  },
};

export const Subtitle: Story = {
  args: {
    text: 'Sample Text',
    type: 'subtitle'
  },
};

export const Time: Story = {
  args: {
    text: 'Sample Text',
    type: 'time'
  },
};
