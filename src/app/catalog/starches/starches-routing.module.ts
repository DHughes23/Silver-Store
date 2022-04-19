import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarchesComponent } from './starches.component';

const routes: Routes = [{ path: '', component: StarchesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarchesRoutingModule { }
