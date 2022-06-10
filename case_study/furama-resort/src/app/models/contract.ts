import { Customer } from './customer';
import { Facility } from './Facility';

export class Contract {
  contractId:number;
  contractStartDate: string;
  contractEndDate: string;
  contractDeposit: number;
  contractTotalMoney: number;
  customer: Customer;
  services: Facility;
  active: number;
}
