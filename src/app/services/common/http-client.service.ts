import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient, @Inject("baseUrl") private baseUrl: string) 
  { 
    //httpclient nesnesinden 4 temel f türetti
  }
  
  private Url(requestParameter: Partial<RequestParameters>): string 
  {
     return `${requestParameter.baseUrl ? requestParameter.baseUrl: this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}` : ""}`; // exporttaki baseUrl doluysa onu kullan yoksa global olarak tanımladığımı kullan. Slash Sonrası Parametreleri bildirmek
  }

  get<T>( requestParameters: Partial<RequestParameters>){
     let url: string = "";
    // url = `${this.baseUrl}/${controller}/${action}`; Artık yukarıda tanımlı Url yapısını kullanıyorum
    url = `${this.Url(requestParameters)}`;

    // get metodunun şuan parametre olan fullEndPoint'in dolu mu olup olmadığını bilmiyor
  if(requestParameters.fullEndPoint)
    url = requestParameters.fullEndPoint
  else
    url = `${this.Url(requestParameters)}`; // burada belirtmem gerekiyor

}

  //Aynısının id parametresi alan ve değer döndürecek v -> ne dönecek ->  
  getById<T>( requestParameter: Partial<RequestParameters>, id?: string ): Observable<T> {
     let url: string = "";

  if(requestParameter.fullEndPoint)
    url = requestParameter.fullEndPoint
  else
    url = `${this.Url(requestParameter)} ${id ? `/${id}` : ""}`; // burada id belirtmem gerekiyor
  return this.http.get<T>(url, {headers: requestParameter.headers})

}


  post<T>( requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> { //body'yi; özellikle türlerde, js olarak tanımlamak gerekeceğinden, post ederken partial olarak ayarlıyoum. // Örn post<Products> yaparken
    let url: string = "";
  if(requestParameter.fullEndPoint)
    url = requestParameter.fullEndPoint;
  else
    url = `${this.Url(requestParameter)}`;
  
  return this.http.post<T>(url,body, {headers: requestParameter.headers});
  
  }

  

  put<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
  if(requestParameter.fullEndPoint)
    url = requestParameter.fullEndPoint;
  else
    url = `${this.Url(requestParameter)}`;
    
  return this.http.put<T>(url, body, {headers: requestParameter.headers});
  }



  delete<T>(requestParameter: Partial<RequestParameters>, id: string): Observable <T>{
    let url: string = "";
    if(requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.Url(requestParameter)}/${id}`;

    return this.http.delete<T>(url, {headers: requestParameter.headers});
  }

}

export class RequestParameters{
  controller?: string;
  action?: string;
  queryString?: string;
  headers?: HttpHeaders;
  baseUrl?: string; //baseurlim değişeceği durumlarda kullanma ihtimali
  fullEndPoint?: string; //dış kaynaklar için
}
