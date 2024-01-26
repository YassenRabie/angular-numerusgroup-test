export interface INavigationItem {
  name: string;
  id: string;
  url?: string;
  children?: INavigationItem[];
}