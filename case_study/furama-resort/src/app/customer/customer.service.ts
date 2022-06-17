import {Injectable} from '@angular/core';
import {Customer} from './models/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

const API_URL = `${environment.url3000}`;
const API_URL8080 = `${environment.url8080}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient) {
  }

  //TODO phần này dành cho server API của mình
  public getCustomers(page: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL8080 + '/list?page=' + page);
  }

  public createCustomer(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(API_URL8080 + '/create', customer);
  }

  public deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${API_URL8080}/delete/${id}`);
  }

  public findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL8080}/${id}`);
  }

  public updateCustomer(id: number, customer: Customer): Observable<void> {
    return this.httpClient.patch<void>(`${API_URL8080}/update/${id}`, customer);
  }

  //TODO phần này dành cho json-server
  public createCustomerAPI(customer: Customer): Observable<void> {
    return this.httpClient.post<void>(API_URL + '/customer', customer);
  }

  public getAllCustomerAPI(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL + '/customer');
  }

  public fingByIdAPI(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL}/customer/${id}`);
  }

  public updateCustomerAPI(id: number, customer: Customer): Observable<void> {
    return this.httpClient.put<void>(`${API_URL}/customer/${id}`, customer);
  }

  // public deleteCustomerAPI(id: number): Observable<Customer> {
  //   return this.httpClient.delete<Customer>(`${API_URL}/customer/${id}`);
  // }

  // private customers: Customer[] = [
  //   {
  //     id: 1,
  //
  //     customerCode: 'KH-0001',
  //
  //     customerName: 'Nguyễn Thị Hào',
  //
  //     customerBirthday: '1970-11-07',
  //
  //     customerGender: 0,
  //
  //     customerIdCard: '643431213',
  //
  //     customerPhone: '0905423362',
  //
  //     customerEmail: 'thihao07@gmail.com',
  //
  //     customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //
  //     customerType: {
  //       customerTypeId: 5,
  //       customerTypeName: 'Member',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 2,
  //
  //     customerCode: 'KH-0002',
  //
  //     customerName: 'Phạm Xuân Diệu',
  //
  //     customerBirthday: '1992-08-08',
  //
  //     customerGender: 1,
  //
  //     customerIdCard: '865342123',
  //
  //     customerPhone: '0954333333',
  //
  //     customerEmail: 'xuandieu92@gmail.com',
  //
  //     customerAddress: 'K77/22 Thái Phiên, Quảng Trị',
  //
  //     customerType: {
  //       customerTypeId: 4,
  //       customerTypeName: 'Silver',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 3,
  //
  //     customerCode: 'KH-0003',
  //
  //     customerName: 'Trương Đình Nghệ',
  //
  //     customerBirthday: '1990-02-27',
  //
  //     customerGender: 1,
  //
  //     customerIdCard: '488645199',
  //
  //     customerPhone: '0373213122',
  //
  //     customerEmail: 'nghenhan2702@gmail.com',
  //
  //     customerAddress: 'K323/12 Ông Ích Khiêm, Vinh',
  //
  //     customerType: {
  //       customerTypeId: 3,
  //       customerTypeName: 'Gold',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 4,
  //
  //     customerCode: 'KH-0004',
  //
  //     customerName: 'Dương Văn Quan',
  //
  //     customerBirthday: '1981-07-08',
  //
  //     customerGender: 1,
  //
  //     customerIdCard: '543432111',
  //
  //     customerPhone: '0490039241',
  //
  //     customerEmail: 'duongquan@gmail.com',
  //
  //     customerAddress: 'K453/12 Lê Lợi, Đà Nẵng',
  //
  //     customerType: {
  //       customerTypeId: 1,
  //       customerTypeName: 'Diamond',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 5,
  //
  //     customerCode: 'KH-0005',
  //
  //     customerName: 'Hoàng Trần Nhi Nhi',
  //
  //     customerBirthday: '1995-12-09',
  //
  //     customerGender: 0,
  //
  //     customerIdCard: '795453345',
  //
  //     customerPhone: '0312345678',
  //
  //     customerEmail: 'nhinhi123@gmail.com',
  //
  //     customerAddress: '224 Lý Thái Tổ, Gia Lai',
  //
  //     customerType: {
  //       customerTypeId: 1,
  //       customerTypeName: 'Diamond',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 6,
  //
  //     customerCode: 'KH-0006',
  //
  //     customerName: 'Tôn Nữ Mộc Châu',
  //
  //     customerBirthday: '2005-12-06',
  //
  //     customerGender: 0,
  //
  //     customerIdCard: '732434215',
  //
  //     customerPhone: '0988888844',
  //
  //     customerEmail: 'thihao07@gmail.com',
  //
  //     customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //
  //     customerType: {
  //       customerTypeId: 5,
  //       customerTypeName: 'Member',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 7,
  //
  //     customerCode: 'KH-0007',
  //
  //     customerName: 'Nguyễn Mỹ Kim',
  //
  //     customerBirthday: '1984-04-08',
  //
  //     customerGender: 0,
  //
  //     customerIdCard: '856453123',
  //
  //     customerPhone: '0912345698',
  //
  //     customerEmail: 'thihao07@gmail.com',
  //
  //     customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //
  //     customerType: {
  //       customerTypeId: 4,
  //       customerTypeName: 'Silver',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 8,
  //
  //     customerCode: 'KH-0008',
  //
  //     customerName: 'Nguyễn Thị Hào',
  //
  //     customerBirthday: '1999-04-08',
  //
  //     customerGender: 0,
  //
  //     customerIdCard: '965656433',
  //
  //     customerPhone: '0763212345',
  //
  //     customerEmail: 'thihao07@gmail.com',
  //
  //     customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //
  //     customerType: {
  //       customerTypeId: 3,
  //       customerTypeName: 'Gold',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 9,
  //
  //     customerCode: 'KH-0009',
  //
  //     customerName: 'Trần Đại Danh',
  //
  //     customerBirthday: '1994-07-01',
  //
  //     customerGender: 1,
  //
  //     customerIdCard: '432341235',
  //
  //     customerPhone: '0643343433',
  //
  //     customerEmail: 'thihao07@gmail.com',
  //
  //     customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //
  //     customerType: {
  //       customerTypeId: 2,
  //       customerTypeName: 'Platinium',
  //       active: 1
  //     },
  //
  //     active: 1
  //   },
  //   {
  //     id: 10,
  //
  //     customerCode: 'KH-0010',
  //
  //     customerName: 'Nguyễn Tâm Đắc',
  //
  //     customerBirthday: '1989-07-01',
  //
  //     customerGender: 1,
  //
  //     customerIdCard: '344343432',
  //
  //     customerPhone: '0987654321',
  //
  //     customerEmail: 'thihao07@gmail.com',
  //
  //     customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //
  //     customerType: {
  //       customerTypeId: 1,
  //       customerTypeName: 'Diamond',
  //       active: 1
  //     },
  //
  //     active: 1
  //   }
  // ];


  // public getCustomer() {
  //   return this.customers;
  // }

  // public findById(id: number) {
  //   return this.customers.find(customer => customer.id == id);
  // }
  //
  // public createCustomer(customer: Customer) {
  //   customer.id = this.customers.length + 1;
  //   customer.active = 1;
  //   this.customers.push(customer);
  // }
  //
  // public updateCustomer(id: number, customer: Customer) {
  //   for (let i = 0; i < this.customers.length; i++) {
  //     if (this.customers[i].id == id) {
  //       this.customers[i] = customer;
  //     }
  //   }
  // }
  //
  // public deleteCustomer(id: number) {
  //   this.customers = this.customers.filter(customer => {
  //     return customer.id != id;
  //   });
  // }

}
