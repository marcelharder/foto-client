import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { categoryModel } from '../_models/categoryModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  getAllowedCategories(){
    return this.http.get<categoryModel[]>(this.baseUrl + 'Category/getAllowedCategories')
  }

  getDescription(category: any){
    return this.http.get<string>(this.baseUrl + 'Category/getDescription/' + category)
  }

  getCategoryList(){ return this.http.get<categoryModel[]>(this.baseUrl + 'Category/getAllCategories')}

  
}
