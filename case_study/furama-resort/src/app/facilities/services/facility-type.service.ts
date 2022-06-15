import {Injectable} from '@angular/core';
import {FacilityType} from '../models/facilityType';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.url3000}`;

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

  constructor(private httpClient: HttpClient) {
  }

  public getAllFacilityTypeAPI(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>(API_URL + '/facilityTypes').pipe((response: any) => response);
  }
}
