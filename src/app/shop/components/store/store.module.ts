import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: StoreComponent}
    ])
  ]
})
export class StoreModule { }