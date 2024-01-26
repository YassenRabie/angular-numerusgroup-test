import { Component } from '@angular/core';
import { SIDEMENU_DATA, SidemenuItem } from '../../constants/navigation';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  sidemenuData: SidemenuItem[] = SIDEMENU_DATA;
}
