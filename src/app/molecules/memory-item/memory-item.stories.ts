import { applicationConfig, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MemoryItemComponent } from './memory-item.component';
import { APP_INITIALIZER } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { MemoryTileStatus } from '../../shared/models/memory-item.model';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<MemoryItemComponent> = {
  title: 'Molecules/MemoryItem',
  component: MemoryItemComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
    applicationConfig({
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (iconLibrary: FaIconLibrary) => async() => {
            // Add any icons needed here:
            iconLibrary.addIconPacks(fas,far);
          },
          // When using a factory provider you need to explicitly specify its dependencies.
          deps: [FaIconLibrary],
          multi: true,
        },
      ],
    }),
  ],
  argTypes: {
   
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<MemoryItemComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Closed: Story = {
  args: {
    tile: {
      icon: 'yin-yang',
      status: MemoryTileStatus.CLOSED
    }
  },
};

export const Open: Story = {
  args: {
    tile: {
      icon: 'yin-yang',
      status: MemoryTileStatus.OPEN
    }
  },
};

export const Matched: Story = {
  args: {
    tile: {
      icon: 'yin-yang',
      status: MemoryTileStatus.MATCHED
    }
  },
};


export const OpenSM: Story = {
  args: {
    tile: {
      icon: 'yin-yang',
      status: MemoryTileStatus.OPEN,
    },
    size: 'sm'
  },
};

export const OpenMD: Story = {
  args: {
    tile: {
      icon: 'yin-yang',
      status: MemoryTileStatus.OPEN,
    },
    size: 'md'
  },
};

export const OpenLG: Story = {
  args: {
    tile: {
      icon: 'yin-yang',
      status: MemoryTileStatus.OPEN,
    },
    size: 'lg'
  },
};


