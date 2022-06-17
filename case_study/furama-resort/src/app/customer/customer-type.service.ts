import {Injectable} from '@angular/core';
import {CustomerType} from './models/customerType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './models/customer';
import {environment} from '../../environments/environment';
const API_URL8080 = `${environment.url8080}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  public getCustomerTypes() {
    let customerTypes: CustomerType[];
    customerTypes = [
      {
        id: 1,
        name: 'Diamond',
        active: 1
      },
      {
        id: 2,
        name: 'Platinium',
        active: 1
      },
      {
        id: 3,
        name: 'Gold',
        active: 1
      },
      {
        id: 4,
        name: 'Silver',
        active: 1
      },
      {
        id: 5,
        name: 'Member',
        active: 1
      }
    ];
    return customerTypes;
  }


  constructor(private httpClient: HttpClient) {
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<Customer[]>(API_URL8080 + '/customer_type_list').pipe((response: any) => response);
  }

}
