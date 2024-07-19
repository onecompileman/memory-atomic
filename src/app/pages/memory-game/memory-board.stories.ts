import { MemoryGameComponent } from './memory-game.component';
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
import { MemoryBoardComponent } from '../../organisms/memory-board/memory-board.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { TextComponent } from '../../atoms/text/text.component';
import { StatsComponent } from '../../molecules/stats/stats.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MemoryGameComponent> = {
  title: 'Pages/MemoryGame',
  component: MemoryGameComponent,
  decorators: [
    moduleMetadata({
      declarations: [MemoryItemComponent, MemoryBoardComponent, ButtonComponent, TextComponent, StatsComponent ],
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
type Story = StoryObj<MemoryGameComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/arg


export const Game: Story = {
  args: {
  },
};
