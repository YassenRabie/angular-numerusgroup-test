export interface TableHeader {
  key: string;
  index: number;
  isSelected: boolean;
}

export interface DynamicTable {
  headers: TableHeader[];
  data: any[];
}