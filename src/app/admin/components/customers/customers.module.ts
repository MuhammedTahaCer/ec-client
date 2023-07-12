import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: CustomersComponent}// tek roue olduğu için path vermeye gerek yok
    ])
  ]
})
export class CustomersModule { }
