import { ISidemenuItem } from "../types/navigation";

export const SIDEMENU_DATA: ISidemenuItem[] = [
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
        url: "/table/0"
      },
      {
        id: "table-data-2",
        name: "Table Data 2",
        url: "/table/1"
      },
      {
        id: "table-data-3",
        name: "Table Data 3",
        url: "/table/2"
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