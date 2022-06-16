import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {Category} from '../../category/models/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[];
  idDelete = 0;
  nameDelete = '';
  productDelete: Product;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCateGory();
  }

  getAll() {
    this.productService.getAll()
      .subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(closeModal: HTMLButtonElement) {
    this.productService.findById(this.idDelete).subscribe(product => {
      this.productDelete = product;
      this.productService.deleteProduct(this.productDelete.id).subscribe(() => {
        this.getAll();
        this.ngOnInit();
        closeModal.click();
        this.router.navigateByUrl('/product/product-list');
      }, e => {
        console.log(e);
      });
    }, e => {
      console.log(e);
    });
  }

  getAllCateGory() {
    this.productService.getAllCategory().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }

  sendNameProduct(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }
}
