import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../models/category';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  idDelete = 0;
  nameDelete = '';
  categoryDelete: Category;
  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  sendNameProduct(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteProduct(closeModal: HTMLButtonElement) {
    this.categoryService.findById(this.idDelete).subscribe(product => {
      this.categoryDelete = product;
      this.categoryService.deleteCategory(this.categoryDelete.id).subscribe(() => {
        this.getAll();
        this.ngOnInit();
        closeModal.click();
        this.router.navigateByUrl('/category/category-list');
      }, e => {
        console.log(e);
      });
    }, e => {
      console.log(e);
    });
  }
}
