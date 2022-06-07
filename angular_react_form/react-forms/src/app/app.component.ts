import {Component} from '@angular/core';
import {Product} from './model/Product';
import {ProductService} from './service/product.service';
import {LoggerService} from './service/LoggerService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, LoggerService]
})
export class AppComponent {
  products: Product[];
  constructor(private productService: ProductService) {
  }

  public getProducts() {
    this.products = this.productService.getProducts();
  }
}
