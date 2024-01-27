import { Component } from '@angular/core';
import { IArtical } from '../../types/artical';
import { ActivatedRoute } from '@angular/router';
import { ArticalService } from '../../services/artical/artical.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Array to store a list of articles to be displayed in the dashbaord
  articals: IArtical[] = [];

  // Variable to store error condition
  error: boolean = false;

  constructor(private route: ActivatedRoute, private articalService: ArticalService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.articalService.getAllArticals().subscribe((articals) => {
      this.articals = articals;
    }, (err) => this.error = !!err);
  }
}
