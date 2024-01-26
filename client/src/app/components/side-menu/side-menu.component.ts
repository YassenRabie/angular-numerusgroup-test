import { Component } from '@angular/core';
import { SIDEMENU_DATA, ISidemenuItem } from '../../types/navigation';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  sidemenuData: ISidemenuItem[] = SIDEMENU_DATA;
}
