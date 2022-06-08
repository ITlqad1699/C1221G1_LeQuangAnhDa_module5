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

  constructor(customerId: number, customerCode: string, customerName: string, customerBirthday: string, customerGender: number, customerIdCard: string, customerPhone: string, customerEmail: string, customerAddress: string, customerType: CustomerType, active: number) {
    this.customerId = customerId;
    this.customerCode = customerCode;
    this.customerName = customerName;
    this.customerBirthday = customerBirthday;
    this.customerGender = customerGender;
    this.customerIdCard = customerIdCard;
    this.customerPhone = customerPhone;
    this.customerEmail = customerEmail;
    this.customerAddress = customerAddress;
    this.customerType = customerType;
    this.active = active;
  }
}
