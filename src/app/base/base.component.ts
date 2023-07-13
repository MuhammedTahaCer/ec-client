import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
  constructor (private s: NgxSpinnerService){}

  showSpinner(spinner: spinnerType){
    this.s.show(spinner);
    setTimeout(() => 
      this.hideSpinner(spinner), 2700);
  }

  hideSpinner(spinner: spinnerType){
     this.s.hide(spinner);
  }
}

export enum spinnerType{
  Fusion = "s1",
  Atom ="s2"

}