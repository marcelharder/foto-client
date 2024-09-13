import { ResolveFn } from '@angular/router';
import { categoryModel } from '../_models/categoryModel';
import { ImageService } from '../_services/image.service';
import { inject } from '@angular/core';

export const categoryListResolver: ResolveFn<categoryModel[] | null> = (route, state) => {
  const imageService = inject (ImageService);
  return imageService.getCategoryList();
};
