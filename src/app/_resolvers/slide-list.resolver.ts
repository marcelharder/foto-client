import { ResolveFn } from '@angular/router';
import { slideModel } from '../_models/slideModel';
import { ImageService } from '../_services/image.service';
import { inject } from '@angular/core';

export const slideListResolver: ResolveFn<slideModel[] | null> = (route, state) => {
  const imageService = inject(ImageService);
  const category = route.paramMap.get("cat");
  if(!category) return null;
  return imageService.getDiasFromCategory(+category);
};
