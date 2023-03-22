import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CosmeticosRoutingModule } from './cosmeticos-routing.module';
import { CosmeticosComponent } from './cosmeticos/cosmeticos.component';


@NgModule({
  declarations: [
    CosmeticosComponent
  ],
  imports: [
    CommonModule,
    CosmeticosRoutingModule
  ]
})
export class CosmeticosModule { }
