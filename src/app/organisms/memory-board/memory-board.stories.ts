import { MemoryBoardComponent } from './memory-board.component';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { APP_INITIALIZER } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MemoryItemComponent } from '../../molecules/memory-item/memory-item.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MemoryBoardComponent> = {
  title: 'Organisms/MemoryBoard',
  component: MemoryBoardComponent,
  decorators: [
    moduleMetadata({
      declarations: [MemoryItemComponent, ],
      imports: [FontAwesomeModule]
    }),
    applicationConfig({
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async () => {
            // Add any icons needed here:
            iconLibrary.addIconPacks(fas, far);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<MemoryBoardComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const BoardEasy: Story = {
  args: {
    difficulty: 'easy',
  },
};


export const BoardMedium: Story = {
  args: {
    difficulty: 'medium',
  },
};


export const BoardHard: Story = {
  args: {
    difficulty: 'hard',
  },
};
