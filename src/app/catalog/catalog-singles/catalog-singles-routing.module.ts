import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogSinglesComponent } from './catalog-singles.component';

const routes: Routes = [{ path: '', component: CatalogSinglesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogSinglesRoutingModule { }
