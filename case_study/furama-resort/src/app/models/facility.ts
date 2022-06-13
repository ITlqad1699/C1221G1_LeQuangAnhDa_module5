import {RentType} from './RentType';
import {FacilityType} from './facilityType';

export class Facility {
  serviceId: number;

  serviceCode: string;

  serviceName: string;

  serviceImage: string;

  serviceArea: number;

  serviceCost: number;

  serviceMaxPeople: number;

  standardRoom: string;

  descriptionOtherConvenience: string;

  poolArea: number;

  numberOfFloors: number;

  freeAttachedService: string;

  rentType: RentType;

  facilityType: FacilityType;

  active: number;

}
