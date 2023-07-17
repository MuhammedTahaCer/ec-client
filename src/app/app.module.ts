import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ShopModule } from './shop/shop.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule, // material animation
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule, //spiiner added
    AppRoutingModule,
    AdminModule, 
    ShopModule,
    HttpClientModule
  ],
  providers: [
    {provide: "baseUrl", useValue: "https://localhost:7013/api", multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
