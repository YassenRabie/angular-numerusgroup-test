import { Component } from '@angular/core';
import { INavigationItem } from '../../types/navigation';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  // Array to store navigation items for the side menu
  sidemenuData: INavigationItem[] = [];

  // Variable to track the state of the side menu
  isMenuOpen: boolean = false;

  constructor(private navigationService: NavigationService) { }

  ngOnInit(): void {
    this.navigationService.isMenuOpen$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });

    this.getData();
  }

  getData() {
    this.navigationService.getNavigation().subscribe((navigation) => {
      this.sidemenuData = navigation;
    });
  }

  toggleMenu() {
    const isSmallScreen = window.innerWidth < 1080;

    if (isSmallScreen)
      this.navigationService.toggleMenu();
  }
}
