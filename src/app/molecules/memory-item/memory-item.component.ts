import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  MemoryTile,
  MemoryTileStatus,
} from '../../shared/models/memory-item.model';

@Component({
  selector: 'ma-memory-item',
  templateUrl: './memory-item.component.html',
  styleUrl: './memory-item.component.scss',
})
export class MemoryItemComponent {
  memoryTileStatus = MemoryTileStatus;
  /**
   * Memmory tile object
   */
  @Input() tile!: MemoryTile;

  /**
   * Memmory tile size
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * On open
   */
  @Output() open = new EventEmitter();

  onOpen() {
    this.open.emit(null);
  }

  get sizeInIcon(): string {
    switch (this.size) {
      case 'sm':
        return '1x';
      case 'md':
        return '2x';
      case 'lg':
        return '3x';
    }
  }
}
