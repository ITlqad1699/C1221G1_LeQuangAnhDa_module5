import {Injectable} from '@angular/core';
import {FacilityType} from '../models/facilityType';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  public getFacilityType(){

    let facilityTypes: FacilityType[];
    facilityTypes = [
      {
      serviceTypeId: 1,
      serviceTypeName: 'villa',
      active: 1
    },
      {
        serviceTypeId: 2,
        serviceTypeName: 'house',
        active: 1
      },
      {
        serviceTypeId: 3,
        serviceTypeName: 'room',
        active: 1
      }

    ]
  }
}
