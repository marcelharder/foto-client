import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { slideModel } from '../_models/slideModel';
import { categoryModel } from '../_models/categoryModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  http = inject(HttpClient);
  baseUrl = environment.apiUrl;

  constructor() { }

  getDiasFromCategory(cat: number){
    return this.http.get<slideModel[]>(this.baseUrl + 'Images/getImagesByCategory/' + cat)
  }
  getCategoryList(){ return this.http.get<categoryModel[]>(this.baseUrl + 'Images/getCategories')}

  //getImageFile(no: number){return this.http.get<any>(this.baseUrl + 'Images/getImageFile/'+ no)}
  //getImageFile(no: number){return this.http.get<any>(this.baseUrl + 'Images/getImageFile/'+ no, {responseType: 'text' as 'json'})}
}
