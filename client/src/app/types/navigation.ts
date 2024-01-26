export interface ISidemenuItem {
  name: string;
  id: string;
  url?: string;
  children?: ISidemenuItem[];
}