import {Injectable} from '@angular/core';
import {FacilityType} from '../models/facilityType';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  public getFacilityType() {
    let facilityTypes: FacilityType[];

    facilityTypes = [
      {
        facilityTypeId: 1,
        facilityTypeName: 'villa',
        active: 1
      },
      {
        facilityTypeId: 2,
        facilityTypeName: 'house',
        active: 1
      },
      {
        facilityTypeId: 3,
        facilityTypeName: 'room',
        active: 1
      }
    ];
    return facilityTypes;
  }
}
