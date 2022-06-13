import {Injectable} from '@angular/core';
import { RentType } from '../models/rentType';

@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  public getRentTypes(){
    let rentTypes: RentType[];
    rentTypes = [
      {
        rentTypeId: 1,
        rentTypeName: "year",
        rentTypeCost: 10000000,
        active: 1
      },
      {
        rentTypeId: 2,
        rentTypeName: "month",
        rentTypeCost: 10000000,
        active: 1
      },
      {
        rentTypeId: 3,
        rentTypeName: "day",
        rentTypeCost: 10000000,
        active: 1
      },
      {
        rentTypeId: 4,
        rentTypeName: "hour",
        rentTypeCost: 10000000,
        active: 1
      },
    ]
    return rentTypes;
  }

  findById(id:any) {
    return this.getRentTypes().filter(rt => rt.rentTypeId == id);
  }
}
