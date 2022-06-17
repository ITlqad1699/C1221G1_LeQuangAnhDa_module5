import {CustomerType} from '../customer/models/customerType';

export class CustomerDto {
  id: number;

  customerCode: string;

  name: string;

  birthDay: string;

  gender: number;

  idCard: string;

  phone: string;

  email: string;

  address: string;

  customerType: CustomerType;

}
