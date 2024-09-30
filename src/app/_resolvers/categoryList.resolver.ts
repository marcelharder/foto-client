import {inject} from "@angular/core";
import { ResolveFn} from "@angular/router";
import { ImageService } from "../_services/image.service";

export const CategoryListResolver: ResolveFn<Object> = (route, state) => {
   // const gameId = route.paramMap.get('id');
    /* if(gameId != null){
        return inject(ImageService).getCategories();
    }
    else {
        return !null;
    } */
        return inject(ImageService).getCategories();
    
}