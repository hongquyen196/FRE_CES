import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category/category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  listCategory: any = [];
  showListProduct = false;
  showProcess = false;
  showProduct = false;
  showDetailProduct = false;
  parentName;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // @ts-ignore
    const id;
    // @ts-ignore
    this.route.params.subscribe( params => id = params.id);
    this.categoryService.getListSubCategory(id).subscribe( res => {
      this.listCategory = res;
    });
    this.parentName = this.categoryService.categoryParrent;
  }

  openCategory(id_category) {
    this.categoryService.getListSubCategory(id_category).subscribe( res => {
      this.listCategory = res;
    });
  }

  loadProduct() {
    this.showProcess = true;
    setTimeout( () => {
      this.showProcess = false;
      this.showProduct = true;
    }, 3000);
    this.showListProduct = true;
  }

  openProduct() {
    this.showDetailProduct = true;
  }

}