import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeatsRoutingModule } from './meats-routing.module';
import { MeatsComponent } from './meats.component';


@NgModule({
  declarations: [
    MeatsComponent
  ],
  imports: [
    CommonModule,
    MeatsRoutingModule
  ]
})
export class MeatsModule { }
