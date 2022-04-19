import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogListRoutingModule } from './catalog-list-routing.module';
import { CatalogListComponent } from './catalog-list.component';


@NgModule({
  declarations: [
    CatalogListComponent
  ],
  imports: [
    CommonModule,
    CatalogListRoutingModule
  ]
})
export class CatalogListModule { }
