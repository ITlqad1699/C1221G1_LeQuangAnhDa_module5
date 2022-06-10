import {Injectable} from '@angular/core';
import {CustomerType} from '../models/customerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  public getCustomerTypes() {
    let customerTypes: CustomerType[];
    customerTypes = [
      {
        customerTypeId: 1,
        customerTypeName: "Diamond",
        active: 1
      },
      {
        customerTypeId: 2,
        customerTypeName: "Platinium",
        active: 1
      },
      {
        customerTypeId: 3,
        customerTypeName: "Gold",
        active: 1
      },
      {
        customerTypeId: 4,
        customerTypeName: "Silver",
        active: 1
      },
      {
        customerTypeId: 5,
        customerTypeName: "Member",
        active: 1
      }
    ];
    return customerTypes;
  }
}
