import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../category/models/category';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categories: Category[];
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCateGory();
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category),
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
        alert('Cập nhật thành công');
        this.productForm.reset();
        this.router.navigateByUrl('/product/product-list');
      },
      e => {
        console.log(e);
      });
  }
  compareFn(t1, t2): boolean {
    return t1 && t2 ? t1.idC === t2.idC : t1 === t2;
  }
  getAllCateGory() {
    this.productService.getAllCategory().subscribe(categories => {
      this.categories = categories;
      console.log(categories);
    });
  }
}
