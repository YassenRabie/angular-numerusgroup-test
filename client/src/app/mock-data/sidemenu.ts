import { INavigationItem } from "../types/navigation";

export const SIDEMENU_DATA: INavigationItem[] = [
  {
    id: "dasboard",
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    id: "table-data",
    name: "Tables",
    children: [
      {
        id: "table-data-1",
        name: "Table Data 1",
        url: "/information/0"
      },
      {
        id: "table-data-2",
        name: "Table Data 2",
        url: "/information/1"
      },
      {
        id: "table-data-3",
        name: "Table Data 3",
        url: "/information/2"
      },
    ]
  },
  {
    id: "dasboard",
    name: "About Us",
    url: "",
  },
  {
    id: "dasboard",
    name: "Contact",
    url: "",
  },
  {
    id: "dasboard",
    name: "Logout",
    url: "",
  },
];