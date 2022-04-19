import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarchesRoutingModule } from './starches-routing.module';
import { StarchesComponent } from './starches.component';


@NgModule({
  declarations: [
    StarchesComponent
  ],
  imports: [
    CommonModule,
    StarchesRoutingModule
  ]
})
export class StarchesModule { }
