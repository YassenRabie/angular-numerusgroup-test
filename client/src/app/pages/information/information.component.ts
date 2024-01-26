import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information/information.service';
import { IInformation } from '../../types/information';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent implements OnInit {
  data?: IInformation;

  constructor(private route: ActivatedRoute, private informationService: InformationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.getData(id);
    });
  }

  getData(id: string | number): void {
    this.data = this.informationService.getDataById(id);
  }
}
