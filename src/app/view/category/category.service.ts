import { Injectable } from '@angular/core';
import {HttpParams, HttpClient, HttpHeaders} from '@angular/common/http';
import { PathAPI } from '../../common/api_apth';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }
  categoryParrent = '';
  listCategories = [
    {
      categoryName: 'Quần Áo',
      categorySiteId: 'TIKI'
    },
    {
      categoryName: 'Quần Áo 1 ',
      categorySiteId: 'TIKI1'
    },
    {
      categoryName: 'Quần Áo 2',
      categorySiteId: 'TIKI2'
    },
    {
      categoryName: 'Quần Áo 3',
      categorySiteId: 'TIKI3'
    },
    {
      categoryName: 'Quần Áo 4',
      categorySiteId: 'TIKI4'
    }
  ]

  getListCategory() {
    return this.http.get(PathAPI.GET_CATEGORIES);
  }

  getListSubCategory(categorySiteId) {
    const params = new HttpParams().set('categoryId', categorySiteId);
    // @ts-ignore
    return this.http.get(PathAPI.GET_CATEGORIES, {params});
  }

  getListShop() {
    return this.http.get(PathAPI.GET_SHOP);
  }
}
