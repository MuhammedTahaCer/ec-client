import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { StoreModule } from './store/store.module';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CartModule,
    ProductsModule,
    StoreModule,
    CartModule
  ]
})
export class ComponentsModule { }
