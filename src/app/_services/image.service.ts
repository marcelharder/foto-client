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
    return this.http.get<slideModel[]>(this.baseUrl + 'Image/getImages/' + cat)
  }

  getCategories(){
    return this.http.get<categoryModel[]>(this.baseUrl + 'Image/getCategories')
  }

  getImages(){



    return this.http.get<slideModel[]>(this.baseUrl + 'Image/getImages')
  }
}
