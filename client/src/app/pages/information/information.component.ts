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
  // Property to store the table data and title
  data?: IInformation;

  // Variable to store error condition
  error: boolean = false;

  constructor(private route: ActivatedRoute, private informationService: InformationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.getData(id!);
    });
  }

  getData(id: string) {
    this.informationService.getInformationById(id).subscribe((information) => {
      this.data = information;
    }, (err) => this.error = !!err);
  }
}
