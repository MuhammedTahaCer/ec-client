import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { List_Product } from 'src/app/contracts/list_product';



@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClientService) { }
 // old v successCallBack?: any, errorCallBack?: any
  create(product: Create_Product, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
    this.httpClient.post({
      controller: "products"
    }, product)
      .subscribe(result => {
        successCallBack();
      }, (errorResponse: HttpErrorResponse) => {
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error;
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);
      });
  }

  //api dan data dönemsini bekleyen; lsit komponente dataya erecek olan işlem
  async read(successCallback:()=> void , errorCallback?: (errorMessage: string) => void): Promise<List_Product[]> {
  const firstValueFrom: any = this.httpClient.get<List_Product[]>({ //await yaptığımda callbak şlemleri yapamam. Bi const bağlıyorum
      controller: "products"
    }); // veri geleceğini,

    firstValueFrom.then( d => successCallback() ) // verinin işeneceğii
      .catch( (error : HttpErrorResponse) =>errorCallback(error.message) ) // sonrasında await ile verinin metoda ulaşacağını

     return await firstValueFrom; 
  }

}

