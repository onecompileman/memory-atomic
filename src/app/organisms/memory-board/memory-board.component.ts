import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import {
  MemoryTile,
  MemoryTileStatus,
} from '../../shared/models/memory-item.model';

@Component({
  selector: 'ma-memory-board',
  templateUrl: './memory-board.component.html',
  styleUrl: './memory-board.component.scss',
})
export class MemoryBoardComponent implements OnInit, OnChanges {
  /**
   * Board difficulty
   */
  @Input() difficulty: 'easy' | 'medium' | 'hard' = 'medium';

  @Input() gameCounter = 1;

  @Output() gameFinished = new EventEmitter();
  @Output() moves = new EventEmitter();

  easyTile: MemoryTile[] = [
    {
      icon: 'yin-yang',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'yen-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'x-ray',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wrench',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'won-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-glass',
      status: MemoryTileStatus.CLOSED,
    },
  ];

  mediumTiles: MemoryTile[] = [
    {
      icon: 'yin-yang',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'yen-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'x-ray',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wrench',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'won-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-glass',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-glass-alt',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-bottle',
      status: MemoryTileStatus.CLOSED,
    },
  ];

  hardTiles: MemoryTile[] = [
    {
      icon: 'yin-yang',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'yen-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'x-ray',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wrench',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'won-sign',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-glass',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-glass-alt',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'wine-bottle',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'image',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'user',
      status: MemoryTileStatus.CLOSED,
    },

    {
      icon: 'download',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'star',
      status: MemoryTileStatus.CLOSED,
    },

    {
      icon: 'heart',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'bomb',
      status: MemoryTileStatus.CLOSED,
    },
    {
      icon: 'music',
      status: MemoryTileStatus.CLOSED,
    },
  ];

  tiles: MemoryTile[] = [];
  openedTile: MemoryTile;
  canOpenTile: boolean = true;

  ngOnInit(): void {
    this.initGame();
  }

  get tileSize() {
    switch (this.difficulty) {
      case 'easy':
        return 'lg';
      case 'medium':
        return 'md';
      case 'hard':
        return 'sm';
    }
  }

  openTile(tile: MemoryTile) {
    if (tile.status === MemoryTileStatus.MATCHED || !this.canOpenTile) return;

    this.moves.emit();

    if (this.openedTile) {
      tile.status = MemoryTileStatus.OPEN;
      if (this.openedTile.icon === tile.icon) {
        this.openedTile.status = tile.status = MemoryTileStatus.MATCHED;
        this.openedTile = undefined;
      } else {
        this.canOpenTile = false;
        setTimeout(() => {
          this.openedTile.status = tile.status = MemoryTileStatus.CLOSED;
          this.openedTile = undefined;
          this.canOpenTile = true;
        }, 1000);
      }
    } else {
      this.openedTile = tile;
      this.openedTile.status = MemoryTileStatus.OPEN;
    }

    if (this.gameFinishedCheck()) this.gameFinished.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['difficulty'] || changes['gameCounter']) {
      this.initGame();
    }
  }

  private initGame() {
    this.tiles = [];
    
    switch (this.difficulty) {
      case 'easy':
        this.tiles.push(...this.easyTile.map((tile) => ({ ...tile })));
        this.tiles.push(...this.easyTile.map((tile) => ({ ...tile })));
        break;
      case 'medium':
        this.tiles.push(...this.mediumTiles.map((tile) => ({ ...tile })));
        this.tiles.push(...this.mediumTiles.map((tile) => ({ ...tile })));
        break;
      case 'hard':
        this.tiles.push(...this.hardTiles.map((tile) => ({ ...tile })));
        this.tiles.push(...this.hardTiles.map((tile) => ({ ...tile })));
        break;
    }

    this.tiles = this.shuffleArray(this.tiles);
  }

  private gameFinishedCheck(): boolean {
    return this.tiles.every((tile) => tile.status === MemoryTileStatus.MATCHED);
  }

  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
