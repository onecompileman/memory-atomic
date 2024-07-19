import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ma-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  /**
   * Button text
   */
  @Input() text: string;

  /**
   * Button type
   */
  @Input() type: 'primary' | 'secondary' = 'primary';

  /**
   * Action on button click
   */
  @Output() click = new EventEmitter();
}
