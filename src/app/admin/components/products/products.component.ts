import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor( spinner: NgxSpinnerService, private httpclient: HttpClientService){
    super(spinner);
  }

  ngOnInit(): void { 
    this.showSpinner(spinnerType.Atom);
    
    this.httpclient.getById<Create_Product[]>({
      controller: "products"
    }).subscribe(data => console.log(data));

    // this.httpclient.post({
    //   controller: "products"
    // },{
    //   name:"deneme_3",
    //   stock: 115,
    //   price: 100,
    // }).subscribe();

    // this.httpclient.post({
    //   controller: "products"
    // },{
    //   name:"Dönüştürücüler",
    //   stock:200,
    //   price:12,
    // }).subscribe();

    // this.httpclient.put({
    //   controller: "products",
    // },{
    //   id:"6ebc7c05-4e35-47d2-912a-e12d7f642ddd",
    //   name:"Görüntü_Dönüştürücüleri",
    //   stock:12,
    //   price:11
    // }).subscribe();

    // this.httpclient.delete({
    //   controller: "products"
    // },
    //   "993cf1ba-efa7-4078-a11c-97fe0f784053"
    // ).subscribe();

    // this.httpclient.getById({
    //   baseUrl:"https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    //   // fullEndPoint:"https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data=>console.log(data))

  }
}
