import {City} from './city';

export class Transport {
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
