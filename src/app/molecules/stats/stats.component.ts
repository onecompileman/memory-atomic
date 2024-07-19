import { Component, Input } from '@angular/core';

@Component({
  selector: 'ma-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
 /**
   * Stats label
   */
  @Input() label: string;

   /**
   * Stats value
   */
    @Input() value: string;

}
