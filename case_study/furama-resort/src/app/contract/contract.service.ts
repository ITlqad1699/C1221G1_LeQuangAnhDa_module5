import {Injectable} from '@angular/core';
import {Customer} from '../customer/models/customer';
import {Contract} from './models/contract';
import {environment} from '../../environments/environment';
import {Facility} from '../facilities/models/facility';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.url3000}`;

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private contracts: Contract[] = [
    {
      id: 1,
      contractStartDate: '2020-12-08',
      contractEndDate: '2020-12-08',
      contractDeposit: 0,
      contractTotalMoney: 1000000,
      customer: {
        id: 1,

        customerCode: 'KH-0001',

        customerName: 'Nguyễn Thị Hào',

        customerBirthday: '1970-11-07',

        customerGender: 0,

        customerIdCard: '643431213',

        customerPhone: '0905423362',

        customerEmail: 'thihao07@gmail.com',

        customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',

        customerType: {
          customerTypeId: 5,
          customerTypeName: 'Member',
          active: 1
        },

        active: 1
      },
      services: {
        id: 3,
        serviceCode: 'DV-0003',
        serviceName: 'Room Twin 01',
        serviceImage: '../../assets/img/home/explore2.png',
        serviceArea: 5000,
        serviceCost: 1000000,
        serviceMaxPeople: 2,
        standardRoom: 'normal',
        descriptionOtherConvenience: 'Có tivi',
        poolArea: 0,
        numberOfFloors: 0,
        freeAttachedService: '',
        rentType: {
          rentTypeId: 4,
          rentTypeName: 'hour',
          rentTypeCost: 10000000,
          active: 1
        },
        facilityType: {
          facilityTypeId: 3,
          facilityTypeName: 'room',
          active: 1
        },
        active: 1
      },
      active: 1
    },
    {
      id: 2,
      contractStartDate: '2020-07-14',
      contractEndDate: '2020-07-21',
      contractDeposit: 200000,
      contractTotalMoney: 2000000,
      customer: {
        id: 3,

        customerCode: 'KH-0003',

        customerName: 'Trương Đình Nghệ',

        customerBirthday: '1990-02-27',

        customerGender: 1,

        customerIdCard: '488645199',

        customerPhone: '0373213122',

        customerEmail: 'nghenhan2702@gmail.com',

        customerAddress: 'K323/12 Ông Ích Khiêm, Vinh',

        customerType: {
          customerTypeId: 3,
          customerTypeName: 'Gold',
          active: 1
        },

        active: 1
      },
      services: {
        id: 1,
        serviceCode: 'DV-0001',
        serviceName: 'Villa Beach Front',
        serviceImage: '../../assets/img/home/explore1.png',
        serviceArea: 25000,
        serviceCost: 10000000,
        serviceMaxPeople: 10,
        standardRoom: 'vip',
        descriptionOtherConvenience: 'Có hồ bơi',
        poolArea: 500,
        numberOfFloors: 4,
        freeAttachedService: '',
        rentType: {
          rentTypeId: 3,
          rentTypeName: 'day',
          rentTypeCost: 10000000,
          active: 1
        },
        facilityType: {
          facilityTypeId: 1,
          facilityTypeName: 'villa',
          active: 1
        },
        active: 1
      },
      active: 1
    },
    {
      id: 3,
      contractStartDate: '2021-03-15',
      contractEndDate: '2021-03-17',
      contractDeposit: 50000,
      contractTotalMoney: 1500000,
      customer: {
        id: 4,

        customerCode: 'KH-0004',

        customerName: 'Dương Văn Quan',

        customerBirthday: '1981-07-08',

        customerGender: 1,

        customerIdCard: '543432111',

        customerPhone: '0490039241',

        customerEmail: 'duongquan@gmail.com',

        customerAddress: 'K453/12 Lê Lợi, Đà Nẵng',

        customerType: {
          customerTypeId: 2,
          customerTypeName: 'Platinium',
          active: 1
        },

        active: 1
      },
      services: {
        id: 2,
        serviceCode: 'DV-0002',
        serviceName: 'House Princess 01',
        serviceImage: '../../assets/img/home/explore6.png',
        serviceArea: 14000,
        serviceCost: 5000000,
        serviceMaxPeople: 7,
        standardRoom: 'vip',
        descriptionOtherConvenience: 'Có thêm bếp nướng',
        poolArea: 0,
        numberOfFloors: 3,
        freeAttachedService: '',
        rentType: {
          rentTypeId: 2,
          rentTypeName: 'month',
          rentTypeCost: 10000000,
          active: 1
        },
        facilityType: {
          facilityTypeId: 2,
          facilityTypeName: 'house',
          active: 1
        },
        active: 1
      },
      active: 1
    },
    {
      id: 4,
      contractStartDate: '2021-01-14',
      contractEndDate: '2021-01-18',
      contractDeposit: 100000,
      contractTotalMoney: 1400000,
      customer: {
        id: 5,

        customerCode: 'KH-0005',

        customerName: 'Hoàng Trần Nhi Nhi',

        customerBirthday: '1995-12-09',

        customerGender: 0,

        customerIdCard: '795453345',

        customerPhone: '0312345678',

        customerEmail: 'nhinhi123@gmail.com',

        customerAddress: '224 Lý Thái Tổ, Gia Lai',

        customerType: {
          customerTypeId: 1,
          customerTypeName: 'Diamond',
          active: 1
        },

        active: 1
      },
      services: {
        id: 5,
        serviceCode: 'DV-0005',
        serviceName: 'House Princess 02',
        serviceImage: '../../assets/img/home/explore4.png',
        serviceArea: 10000,
        serviceCost: 4000000,
        serviceMaxPeople: 5,
        standardRoom: 'normal',
        descriptionOtherConvenience: 'Có thêm bếp nướng',
        poolArea: 0,
        numberOfFloors: 2,
        freeAttachedService: '',
        rentType: {
          rentTypeId: 3,
          rentTypeName: 'day',
          rentTypeCost: 10000000,
          active: 1
        },
        facilityType: {
          facilityTypeId: 1,
          facilityTypeName: 'villa',
          active: 1
        },
        active: 1
      },
      active: 1
    },
    {
      id: 5,
      contractStartDate: '2021-07-14',
      contractEndDate: '2021-07-15',
      contractDeposit: 0,
      contractTotalMoney: 100000,
      customer: {
        id: 2,

        customerCode: 'KH-0002',

        customerName: 'Phạm Xuân Diệu',

        customerBirthday: '1992-08-08',

        customerGender: 1,

        customerIdCard: '865342123',

        customerPhone: '0954333333',

        customerEmail: 'xuandieu92@gmail.com',

        customerAddress: 'K77/22 Thái Phiên, Quảng Trị',

        customerType: {
          customerTypeId: 4,
          customerTypeName: 'Silver',
          active: 1
        },

        active: 1
      },
      services: {
        id: 6,
        serviceCode: 'DV-0006',
        serviceName: 'Room Twin 02',
        serviceImage: '../../assets/img/home/explore5.png',
        serviceArea: 3000,
        serviceCost: 900000,
        serviceMaxPeople: 2,
        standardRoom: 'normal',
        descriptionOtherConvenience: 'Có tivi',
        poolArea: 0,
        numberOfFloors: 0,
        freeAttachedService: '',
        rentType: {
          rentTypeId: 4,
          rentTypeName: 'hour',
          rentTypeCost: 10000000,
          active: 1
        },
        facilityType: {
          facilityTypeId: 3,
          facilityTypeName: 'room',
          active: 1
        },
        active: 1
      },
      active: 1
    }
  ];

  public getContracts() {
    return this.contracts;
  }

  public createContract(contract: Contract) {
    contract.id = this.contracts.length + 1;
    contract.active = 1;
    contract.contractTotalMoney = 0;
    this.contracts.push(contract);
  }

  constructor(private httpClient: HttpClient) {
  }

  public createContractAPI(contract: Contract): Observable<void> {
    return this.httpClient.post<void>(API_URL + '/contract', contract);
  }

  public getAllContractAPI(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(API_URL + '/contract').pipe((response: any) => response);
  }

  public fingByIdAPI(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${API_URL}/contract/${id}`);
  }

  public updateContractAPI(id: number, contract: Contract): Observable<void> {
    return this.httpClient.put<void>(`${API_URL}/contract/${id}`, contract);
  }

  public deleteContractAPI(id: number): Observable<Contract> {
    return this.httpClient.delete<Contract>(`${API_URL}/contract/${id}`);
  }
}
