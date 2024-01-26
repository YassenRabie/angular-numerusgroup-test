import { Component } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent {
  tableData = {
    columns: ['name', 'role', 'skillset'],
    rows: [
      [
        'Harsha Chinni',
        'Fullstack Developer',
        'Angular 9, Python 3, Flask, DSA'
      ],
      [
        'Bob',
        'HR',
        'Finding awesome candidates like Harsha :p'
      ],
      [
        'COVID-19',
        'Making people panick',
        'Infect people'
      ],
    ]
  }
}
