import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { categoryModel } from '../_models/categoryModel';
import { CategoryDetailsComponent } from '../categoryDetails/categoryDetails.component';
import { NgFor } from '@angular/common';
import { AccountService } from '../_services/account.service';
import { ImageService } from '../_services/image.service';

@Component({
    selector: 'app-categoryList',
    standalone: true,
    templateUrl: './categoryList.component.html',
    styleUrls: ['./categoryList.component.css'],
    imports: [CategoryDetailsComponent,NgFor]
})
export class CategoryListComponent implements OnInit{
  // accountService = inject(AccountService);
  imageService = inject(ImageService);
  SeriesArray: Array<categoryModel> | null = [];

  ngOnInit(){
  /*  // get the array from the account service signal
   this.imageService.getCategories().subscribe((next)=>{
    this.SeriesArray = next;
   }); */

   // get the categories from the resolver
   


  }


  

}
