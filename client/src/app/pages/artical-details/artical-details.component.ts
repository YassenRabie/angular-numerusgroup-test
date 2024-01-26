import { Component } from '@angular/core';
import { IArtical } from '../../types/artical';
import { ActivatedRoute } from '@angular/router';
import { ArticalService } from '../../services/artical/artical.service';

@Component({
  selector: 'app-artical-details',
  templateUrl: './artical-details.component.html',
  styleUrl: './artical-details.component.css'
})
export class ArticalDetailsComponent {
  // Property to store the details of the displayed article
  artical!: IArtical;

  constructor(private route: ActivatedRoute, private articalService: ArticalService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getData(id!);
    });
  }

  getData(id: string) {
    this.articalService.getArticalById(id).subscribe((artical) => {
      this.artical = artical;
    });
  }
}
