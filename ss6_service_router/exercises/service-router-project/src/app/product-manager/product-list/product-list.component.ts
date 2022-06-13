import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  idDelete = 0;
  nameDelete = '';
  productDelete: Product;
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.products = this.productService.getAll();
  }

  deleteProduct(closeModal: HTMLButtonElement) {
    this.productDelete = this.productService.findById(this.idDelete);
    this.productService.deleteProduct(this.productDelete.id);
    this.router.navigate(['product-list']);
    this.ngOnInit();
    closeModal.click();
  }

  sendNameProduct(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }
}
