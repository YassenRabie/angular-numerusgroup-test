import { Component, Input } from '@angular/core';
import { IArtical } from '../../types/artical';

@Component({
  selector: 'app-artical-card',
  templateUrl: './artical-card.component.html',
  styleUrl: './artical-card.component.css'
})
export class ArticalCardComponent {
  // Input property to pass an article object to be displayed
  @Input() artical!: IArtical;
}
