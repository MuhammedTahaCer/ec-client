import { Injectable } from '@angular/core';
import * as alertifyjs from 'alertifyjs';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class AlertfyService {

  constructor() { }

  // message(message: string, type: MessageType, position: MessagePosition, delay: number = 5, dismiss: boolean = false){
  message(message: string, options: Partial<AlertOperation> ){
    // alertifyjs.success('message');
    // alertifyjs.error('message')
    // alertifyjs.alert('Ready!');
    alertifyjs.set('notifier','position', options.position);
    alertifyjs.set('notifier', 'delay', options.delay);
   const m = alertifyjs[options.type](message);

    if(options.dismiss)
      m.dismiss();
    
  }

  dismiss(){
    alertifyjs.dismissAll();
  }
}


export class AlertOperation {
  type: MessageType = MessageType.Message;
  position: MessagePosition = MessagePosition.BL;
  delay: number = 5;
  dismiss: boolean = false;
}


export enum MessageType{
  // Error = "You have a problem",
  // Message= "Something goes",
  // Notify= "Notifying ...",
  // Succuess= "Success Operation",
  // Warning= "You had Warning"
  Error = "error",
  Message= "message",
  Notify= "notify",
  Succuess= "success",
  Warning= "warning"
}

export enum MessagePosition{
  TR="top-right",
  TC="top-center",
  TL="top-left",
  BR="bottom-right",
  BC="bottom-center",
  BL="bottom-left"
}