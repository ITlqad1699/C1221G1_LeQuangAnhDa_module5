import {CustomerType} from './CustomerType';

export class Customer {
  customerId: number;

  customerCode: string;

  customerName: string;

  customerBirthday: string;

  customerGender: number;

  customerIdCard: string;

  customerPhone: string;

  customerEmail: string;

  customerAddress: string;

  customerType: CustomerType;

  active: number = 1;

}
