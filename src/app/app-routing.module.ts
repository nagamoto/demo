import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarcodeComponent } from './barcode/barcode.component';

const routes: Routes = [
  { path: 'barcode', component: BarcodeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
