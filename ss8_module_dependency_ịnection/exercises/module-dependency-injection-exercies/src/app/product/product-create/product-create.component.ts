import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {Category} from '../../category/models/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  categories: Category[];

  constructor(private productService: ProductService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAllCateGory();
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
        this.productForm.reset();
        alert('Tạo thành công');
        this.route.navigateByUrl('/product/product-list');
      },
      e => {
        console.log(e);
      });
  }

  getAllCateGory() {
    this.productService.getAllCategory().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }
}
