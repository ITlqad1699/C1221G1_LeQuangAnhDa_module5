import {RentType} from './rentType';
import {FacilityType} from './facilityType';

export class Facility {
  id: number;

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
