import {Injectable} from '@angular/core';
import {RentType} from './models/rentType';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.url3000}`;

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  public getRentTypes() {
    let rentTypes: RentType[];
    rentTypes = [
      {
        rentTypeId: 1,
        rentTypeName: 'year',
        rentTypeCost: 10000000,
        active: 1
      },
      {
        rentTypeId: 2,
        rentTypeName: 'month',
        rentTypeCost: 10000000,
        active: 1
      },
      {
        rentTypeId: 3,
        rentTypeName: 'day',
        rentTypeCost: 10000000,
        active: 1
      },
      {
        rentTypeId: 4,
        rentTypeName: 'hour',
        rentTypeCost: 10000000,
        active: 1
      },
    ];
    return rentTypes;
  }

  constructor(private httpClient: HttpClient) {
  }

  public getAllRentTypeAPI(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>(API_URL + '/rentTypes').pipe((response: any) => response);
  }
}
