import {CustomerType} from './customerType';

export class Customer {
  id: number;

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
