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

  // private contracts: Contract[] = [
  //   {
  //     id: 1,
  //     contractStartDate: '2020-12-08',
  //     contractEndDate: '2020-12-08',
  //     contractDeposit: 0,
  //     contractTotalMoney: 1000000,
  //     customer: {
  //       id: 1,
  //
  //       customerCode: 'KH-0001',
  //
  //       name: 'Nguyễn Thị Hào',
  //
  //       birthDay: '1970-11-07',
  //
  //       gender: 0,
  //
  //       idCard: '643431213',
  //
  //       phone: '0905423362',
  //
  //       email: 'thihao07@gmail.com',
  //
  //       address: '23 Nguyễn Hoàng, Đà Nẵng',
  //
  //       customerType: {
  //         id: 5,
  //         name: 'Member',
  //         active: 1
  //       },
  //
  //     },
  //     services: {
  //       id: 3,
  //       serviceCode: 'DV-0003',
  //       serviceName: 'Room Twin 01',
  //       serviceImage: '../../assets/img/home/explore2.png',
  //       serviceArea: 5000,
  //       serviceCost: 1000000,
  //       serviceMaxPeople: 2,
  //       standardRoom: 'normal',
  //       descriptionOtherConvenience: 'Có tivi',
  //       poolArea: 0,
  //       numberOfFloors: 0,
  //       freeAttachedService: '',
  //       rentType: {
  //         rentTypeId: 4,
  //         rentTypeName: 'hour',
  //         rentTypeCost: 10000000,
  //         active: 1
  //       },
  //       facilityType: {
  //         facilityTypeId: 3,
  //         facilityTypeName: 'room',
  //         active: 1
  //       },
  //       active: 1
  //     },
  //     active: 1
  //   },
  //   {
  //     id: 2,
  //     contractStartDate: '2020-07-14',
  //     contractEndDate: '2020-07-21',
  //     contractDeposit: 200000,
  //     contractTotalMoney: 2000000,
  //     customer: {
  //       id: 3,
  //
  //       customerCode: 'KH-0003',
  //
  //       name: 'Trương Đình Nghệ',
  //
  //       birthDay: '1990-02-27',
  //
  //       gender: 1,
  //
  //       idCard: '488645199',
  //
  //       phone: '0373213122',
  //
  //       email: 'nghenhan2702@gmail.com',
  //
  //       address: 'K323/12 Ông Ích Khiêm, Vinh',
  //
  //       customerType: {
  //         id: 3,
  //         name: 'Gold',
  //         active: 1
  //       },
  //
  //     },
  //     services: {
  //       id: 1,
  //       serviceCode: 'DV-0001',
  //       serviceName: 'Villa Beach Front',
  //       serviceImage: '../../assets/img/home/explore1.png',
  //       serviceArea: 25000,
  //       serviceCost: 10000000,
  //       serviceMaxPeople: 10,
  //       standardRoom: 'vip',
  //       descriptionOtherConvenience: 'Có hồ bơi',
  //       poolArea: 500,
  //       numberOfFloors: 4,
  //       freeAttachedService: '',
  //       rentType: {
  //         rentTypeId: 3,
  //         rentTypeName: 'day',
  //         rentTypeCost: 10000000,
  //         active: 1
  //       },
  //       facilityType: {
  //         facilityTypeId: 1,
  //         facilityTypeName: 'villa',
  //         active: 1
  //       },
  //       active: 1
  //     },
  //     active: 1
  //   },
  //   {
  //     id: 3,
  //     contractStartDate: '2021-03-15',
  //     contractEndDate: '2021-03-17',
  //     contractDeposit: 50000,
  //     contractTotalMoney: 1500000,
  //     customer: {
  //       id: 4,
  //
  //       customerCode: 'KH-0004',
  //
  //       name: 'Dương Văn Quan',
  //
  //       birthDay: '1981-07-08',
  //
  //       gender: 1,
  //
  //       idCard: '543432111',
  //
  //       phone: '0490039241',
  //
  //       email: 'duongquan@gmail.com',
  //
  //       address: 'K453/12 Lê Lợi, Đà Nẵng',
  //
  //       customerType: {
  //         id: 2,
  //         name: 'Platinium',
  //         active: 1
  //       },
  //
  //       active: 1
  //     },
  //     services: {
  //       id: 2,
  //       serviceCode: 'DV-0002',
  //       serviceName: 'House Princess 01',
  //       serviceImage: '../../assets/img/home/explore6.png',
  //       serviceArea: 14000,
  //       serviceCost: 5000000,
  //       serviceMaxPeople: 7,
  //       standardRoom: 'vip',
  //       descriptionOtherConvenience: 'Có thêm bếp nướng',
  //       poolArea: 0,
  //       numberOfFloors: 3,
  //       freeAttachedService: '',
  //       rentType: {
  //         rentTypeId: 2,
  //         rentTypeName: 'month',
  //         rentTypeCost: 10000000,
  //         active: 1
  //       },
  //       facilityType: {
  //         facilityTypeId: 2,
  //         facilityTypeName: 'house',
  //         active: 1
  //       },
  //       active: 1
  //     },
  //     active: 1
  //   },
  //   {
  //     id: 4,
  //     contractStartDate: '2021-01-14',
  //     contractEndDate: '2021-01-18',
  //     contractDeposit: 100000,
  //     contractTotalMoney: 1400000,
  //     customer: {
  //       id: 5,
  //
  //       customerCode: 'KH-0005',
  //
  //       name: 'Hoàng Trần Nhi Nhi',
  //
  //       birthDay: '1995-12-09',
  //
  //       gender: 0,
  //
  //       idCard: '795453345',
  //
  //       phone: '0312345678',
  //
  //       email: 'nhinhi123@gmail.com',
  //
  //       address: '224 Lý Thái Tổ, Gia Lai',
  //
  //       customerType: {
  //         id: 1,
  //         name: 'Diamond',
  //         active: 1
  //       },
  //
  //       active: 1
  //     },
  //     services: {
  //       id: 5,
  //       serviceCode: 'DV-0005',
  //       serviceName: 'House Princess 02',
  //       serviceImage: '../../assets/img/home/explore4.png',
  //       serviceArea: 10000,
  //       serviceCost: 4000000,
  //       serviceMaxPeople: 5,
  //       standardRoom: 'normal',
  //       descriptionOtherConvenience: 'Có thêm bếp nướng',
  //       poolArea: 0,
  //       numberOfFloors: 2,
  //       freeAttachedService: '',
  //       rentType: {
  //         rentTypeId: 3,
  //         rentTypeName: 'day',
  //         rentTypeCost: 10000000,
  //         active: 1
  //       },
  //       facilityType: {
  //         facilityTypeId: 1,
  //         facilityTypeName: 'villa',
  //         active: 1
  //       },
  //       active: 1
  //     },
  //     active: 1
  //   },
  //   {
  //     id: 5,
  //     contractStartDate: '2021-07-14',
  //     contractEndDate: '2021-07-15',
  //     contractDeposit: 0,
  //     contractTotalMoney: 100000,
  //     customer: {
  //       id: 2,
  //
  //       customerCode: 'KH-0002',
  //
  //       name: 'Phạm Xuân Diệu',
  //
  //       birthDay: '1992-08-08',
  //
  //       gender: 1,
  //
  //       idCard: '865342123',
  //
  //       phone: '0954333333',
  //
  //       email: 'xuandieu92@gmail.com',
  //
  //       address: 'K77/22 Thái Phiên, Quảng Trị',
  //
  //       customerType: {
  //         id: 4,
  //         name: 'Silver',
  //         active: 1
  //       },
  //
  //       active: 1
  //     },
  //     services: {
  //       id: 6,
  //       serviceCode: 'DV-0006',
  //       serviceName: 'Room Twin 02',
  //       serviceImage: '../../assets/img/home/explore5.png',
  //       serviceArea: 3000,
  //       serviceCost: 900000,
  //       serviceMaxPeople: 2,
  //       standardRoom: 'normal',
  //       descriptionOtherConvenience: 'Có tivi',
  //       poolArea: 0,
  //       numberOfFloors: 0,
  //       freeAttachedService: '',
  //       rentType: {
  //         rentTypeId: 4,
  //         rentTypeName: 'hour',
  //         rentTypeCost: 10000000,
  //         active: 1
  //       },
  //       facilityType: {
  //         facilityTypeId: 3,
  //         facilityTypeName: 'room',
  //         active: 1
  //       },
  //       active: 1
  //     },
  //     active: 1
  //   }
  // ];
  //
  // public getContracts() {
  //   return this.contracts;
  // }

  // public createContract(contract: Contract) {
  //   contract.id = this.contracts.length + 1;
  //   contract.active = 1;
  //   contract.contractTotalMoney = 0;
  //   this.contracts.push(contract);
  // }

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
