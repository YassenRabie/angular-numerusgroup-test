import { Component } from '@angular/core';
import { INavigationItem } from '../../types/navigation';
import { SIDEMENU_DATA } from '../../mock-data/sidemenu';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  sidemenuData: INavigationItem[] = [];

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.navigationService.getNavigation().subscribe((navigation) => {
      this.sidemenuData = navigation;
    });
  }
}
