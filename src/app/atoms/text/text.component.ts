import { Component, Input } from '@angular/core';

@Component({
  selector: 'ma-text',
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent {
 /**
   * Text content
   */
  @Input() text: string;

  /**
   * Text type
   */
  @Input() type: 'title' | 'subtitle' | 'time' = 'title';
}
