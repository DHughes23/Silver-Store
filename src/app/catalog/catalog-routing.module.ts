import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogSinglesComponent } from './catalog-singles/catalog-singles.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogListComponent
  },
  {
    path: ':catalog',

    component: CatalogSinglesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
