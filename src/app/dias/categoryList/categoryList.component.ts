import { Component, OnInit, inject } from '@angular/core';
import { CategoryService } from '../_services/category.service';
import { categoryModel } from '../_models/categoryModel';
import { CategoryDetailsComponent } from '../categoryDetails/categoryDetails.component';
import { NgFor } from '@angular/common';
import { AccountService } from '../_services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-categoryList',
    standalone: true,
    templateUrl: './categoryList.component.html',
    styleUrls: ['./categoryList.component.css'],
    imports: [CategoryDetailsComponent,NgFor]
})
export class CategoryListComponent implements OnInit{
  SeriesArray: Array<categoryModel> | null = [];
  private route = inject(ActivatedRoute);

  ngOnInit(){
   // get the array from the resolver
   this.route.data.subscribe({
    next: data => {this.SeriesArray = data['test']}
   })
   

   // get the categories from the resolver
   


  }


  

}
