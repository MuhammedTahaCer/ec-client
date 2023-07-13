import { Injectable } from '@angular/core';
import { ToastrService } from  'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class CustomToastrService {

  constructor(private toastr: ToastrService) {}

  toastmessage(message:string,title:string, options: Partial<ToastrOparations>){
    this.toastr[options.type](message,title, {positionClass:options.position});
  }

}


export class ToastrOparations{
  type: ToastrMessageType;
  position:ToastrPosition;
}

export enum ToastrMessageType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error ="error",
}

export enum ToastrPosition {
  TFW ='toast-top-full-width',
  TR = 'toast-top-right',
  TL = 'toast-top-left',
  TC = 'toast-top-center',
  BR = 'toast-bottom-right',
  BL = 'toast-bottom-left',
  BC = 'toast-bottom-center',
  BFW ='toast-bottom-full-width',
}