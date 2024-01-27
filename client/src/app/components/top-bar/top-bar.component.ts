import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  // Property to store the title of the application
  appTitle = "Numerus Group"

  constructor(private navigationService: NavigationService) { }

  toggleMenu() {
    this.navigationService.toggleMenu();
  }
}
