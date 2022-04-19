import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  
  {
    path:'contact',
    component: ContactComponent
  },
  { 
    path: 'catalog/catalog-list', 
    loadChildren: () => import('./catalog/catalog-list/catalog-list.module').then(m => m.CatalogListModule) 
  },
  { 
    path: 'catalog/catalog-singles', 
    loadChildren: () => import('./catalog/catalog-singles/catalog-singles.module').then(m => m.CatalogSinglesModule) 
  },
  { 
    path: 'catalog/starches', 
    loadChildren: () => import('./catalog/starches/starches.module').then(m => m.StarchesModule) 
  },
  { 
    path: 'catalog/meats', 
    loadChildren: () => import('./catalog/meats/meats.module').then(m => m.MeatsModule) 
  },
  { 
    path: 'catalog/fruits', 
    loadChildren: () => import('./catalog/fruits/fruits.module').then(m => m.FruitsModule) 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
