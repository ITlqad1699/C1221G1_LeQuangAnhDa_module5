import { Customer } from '../../customer/models/customer';
import { Facility } from '../../facilities/models/facility';

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
