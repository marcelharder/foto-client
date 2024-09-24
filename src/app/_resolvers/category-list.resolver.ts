import { ResolveFn } from '@angular/router';
import { categoryModel } from '../_models/categoryModel';
import { inject } from '@angular/core';
import { CategoryService } from '../_services/category.service';

export const categoryListResolver: ResolveFn<categoryModel[] | null> = (route, state) => {
  const catService = inject (CategoryService);
  return catService.getAllowedCategories();
};
