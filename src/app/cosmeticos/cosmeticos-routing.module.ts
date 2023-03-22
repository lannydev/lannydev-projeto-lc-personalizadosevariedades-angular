import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosmeticosComponent } from './cosmeticos/cosmeticos.component';

const routes: Routes = [
  { path: "", component: CosmeticosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CosmeticosRoutingModule { }
