import { Injectable } from '@angular/core';
import { INFORMATION } from '../../mock-data/information';
import { IInformation } from '../../types/information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  getDataById(id: string | number): IInformation | undefined {
    return INFORMATION.find((e) => e.id == id)
  }
}
