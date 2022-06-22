import {City} from '../model/city';

export class TransportDto {
  id: number;
  numberOfTransport: number;
  typeOfTransport: string;
  name: string;
  pointStart: City;
  pointEnd: City;
  phone: string;
  email: string;
  timeStart: string;
  timeEnd: string;
  active: number;
}
