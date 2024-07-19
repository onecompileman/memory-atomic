import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TextComponent } from '../../atoms/text/text.component';
import { StatsComponent } from './stats.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<StatsComponent> = {
  title: 'Molecules/Stats',
  component: StatsComponent,
  decorators: [
    moduleMetadata({
      declarations: [TextComponent],
    })
  ],
  tags: ['autodocs'],
  argTypes: {
   
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<StatsComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Time: Story = {
  args: {
    label: 'Time',
    value: '0:10'
  },
};

export const Moves: Story = {
  args: {
    label: 'Moves',
    value: '10'
  },
};

