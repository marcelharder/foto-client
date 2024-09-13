import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryListComponent } from './categoryList/categoryList.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { AboutComponent } from './About/About.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { TapeListComponent } from './tape-list/tape-list.component';
import { DiaListComponent } from './dia-list/dia-list.component';
import { categoryListResolver } from './_resolvers/category-list.resolver';
import { slideListResolver } from './_resolvers/slide-list.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categoryList', component: CategoryListComponent, resolve: {test: categoryListResolver}},
  { path: 'photoList', component: PhotoListComponent},
  { path: 'tapeList', component: TapeListComponent},
  { path: 'diaList/:cat', component: DiaListComponent, resolve: {lof: slideListResolver}},
  { path: 'imageViewer/:id', component: ImageViewerComponent},
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];
