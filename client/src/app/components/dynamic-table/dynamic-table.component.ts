import { Component, Input } from '@angular/core';

interface TableData {
  columns: string[];
  rows: string[][];
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent {
  tableDataSrc: any;
  @Input() tableData!: TableData;
  @Input() fontSize?: string = "22px";
}
