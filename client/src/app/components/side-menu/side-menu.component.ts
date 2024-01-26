import { Component } from '@angular/core';
import { ISidemenuItem } from '../../types/navigation';
import { SIDEMENU_DATA } from '../../mock-data/sidemenu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  sidemenuData: ISidemenuItem[] = SIDEMENU_DATA;
}
