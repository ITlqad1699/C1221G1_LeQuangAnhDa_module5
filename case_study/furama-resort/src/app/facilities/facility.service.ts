import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Facility} from './models/facility';

const API_URL = `${environment.url3000}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private facilities: Facility[] = [
    {
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
    {
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
    {
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
    {
      id: 4,
      serviceCode: 'DV-0004',
      serviceName: 'Villa No Beach Front',
      serviceImage: '../../assets/img/home/explore3.png',
      serviceArea: 22000,
      serviceCost: 9000000,
      serviceMaxPeople: 8,
      standardRoom: 'normal',
      descriptionOtherConvenience: 'Có hồ bơi',
      poolArea: 300,
      numberOfFloors: 3,
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
    {
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
    {
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
    }
  ];

  public getFacilities() {
    return this.facilities;
  }

  public findById(id: number): Facility {
    return this.facilities.find(facility => facility.id == id);
  }

  public deleteService(id: number) {
    this.facilities = this.facilities.filter(facility => {
      return facility.id != id;
    });
  }

  public updateFacility(id: number, facility: Facility) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].id == id) {
        this.facilities[i] = facility;
      }
    }
  }

  constructor(private httpClient: HttpClient) {
  }

  public createFacilityAPI(facility: Facility): Observable<void> {
    console.log('abc');
    return this.httpClient.post<void>(API_URL + '/facilities', facility);
  }

  public getAllFacilityAPI(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(API_URL + '/facilities').pipe((response: any) => response);
  }

  public fingByIdAPI(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  public updateFacilityAPI(id: number, Facility: Facility): Observable<void> {
    return this.httpClient.put<void>(`${API_URL}/facilities/${id}`, Facility);
  }

  public deleteFacilityAPI(id: number): Observable<Facility> {
    return this.httpClient.delete<Facility>(`${API_URL}/facilities/${id}`);
  }
}



