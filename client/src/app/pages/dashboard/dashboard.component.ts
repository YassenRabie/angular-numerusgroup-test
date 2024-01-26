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
  articals: IArtical[] = [];

  constructor(private route: ActivatedRoute, private articalService: ArticalService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.articalService.getAllArticals().subscribe((articals) => {
      this.articals = articals;
    });
  }
}
