import {Injectable} from '@angular/core';
import {Product} from '../model/Product';
import {LoggerService} from './LoggerService';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private loggerService: LoggerService) {
    this.loggerService.log('Product Service constructed');
  }

  public getProducts() {
    this.loggerService.log('get Products Caller');
    let products: Product[];
    products = [
      new Product(1, 'vip', 3000),
      new Product(2, 'vip', 4000),
      new Product(3, 'vip', 5000),
      new Product(4, 'vip', 3000),
    ];
    this.loggerService.log(products);
    return products;
  }

}
