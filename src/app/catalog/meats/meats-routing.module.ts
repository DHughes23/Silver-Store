import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeatsComponent } from './meats.component';

const routes: Routes = [{ path: '', component: MeatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeatsRoutingModule { }
