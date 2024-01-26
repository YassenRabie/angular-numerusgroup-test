import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent {
  // Input property to pass an array of headers for the table
  @Input() headers!: string[];

  // Input property to pass a 2D array of data for the table
  @Input() data!: string[][];

  // Optional input property to set the font size of the table (default is "22px")
  @Input() fontSize?: string = "22px";
}
