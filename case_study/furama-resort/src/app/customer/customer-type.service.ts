import {Injectable} from '@angular/core';
import {CustomerType} from './models/customerType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  public getCustomerTypes() {
    let customerTypes: CustomerType[];
    customerTypes = [
      {
        customerTypeId: 1,
        customerTypeName: 'Diamond',
        active: 1
      },
      {
        customerTypeId: 2,
        customerTypeName: 'Platinium',
        active: 1
      },
      {
        customerTypeId: 3,
        customerTypeName: 'Gold',
        active: 1
      },
      {
        customerTypeId: 4,
        customerTypeName: 'Silver',
        active: 1
      },
      {
        customerTypeId: 5,
        customerTypeName: 'Member',
        active: 1
      }
    ];
    return customerTypes;
  }

  private readonly API_URL_CUSTOMER_TYPE = 'http://localhost:3000/customerTypes';

  constructor(private httpClient: HttpClient) {
  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<Customer[]>(this.API_URL_CUSTOMER_TYPE).pipe((response: any) => response);
  }

}
