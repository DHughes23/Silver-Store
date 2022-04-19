import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogSinglesComponent } from './catalog-singles/catalog-singles.component';


@NgModule({
  declarations: [
    CatalogListComponent,
    CatalogSinglesComponent

  ],
  imports: [
    CommonModule,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
