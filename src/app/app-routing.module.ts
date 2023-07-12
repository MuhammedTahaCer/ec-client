import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashComponent } from './admin/components/dash/dash.component';
import { StoreComponent } from './shop/components/store/store.component';

const routes: Routes = [
  {
    path: 'admin', component: LayoutComponent, children: [
      {path: '', component: DashComponent},
      {
        path: "customers", loadChildren: () => import("./admin/components/customers/customers.module").then(module => module.CustomersModule)
      },
      {
        path: "products", loadChildren: () => import("./admin/components/products/products.module").then(module => module.ProductsModule)
      },
      {
        path: "orders", loadChildren: () => import("./admin/components/orders/orders.module").then(module => module.OrdersModule)
      }
    ]
  },
  {//fronta link vericem. bundan sonrası load children
    path: '', component: StoreComponent }
    ,
    {
      path: 'cart', loadChildren: () => import("./shop/components/cart/cart.module").then(module => module.CartModule)
    }
    ,
    {
      path: 'products', loadChildren: () => import("./shop/components/products/products.module").then(module => module.ProductsModule)
    }
    ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
