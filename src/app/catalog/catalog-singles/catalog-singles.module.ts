import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogSinglesRoutingModule } from './catalog-singles-routing.module';
import { CatalogSinglesComponent } from './catalog-singles.component';


@NgModule({
  declarations: [
    CatalogSinglesComponent
  ],
  imports: [
    CommonModule,
    CatalogSinglesRoutingModule
  ]
})
export class CatalogSinglesModule { }
