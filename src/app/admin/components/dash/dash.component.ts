import { Component } from '@angular/core';
import { AlertfyService, MessagePosition, MessageType } from 'src/app/services/admin/alertfy.service';
declare var $: any;

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent {
  constructor(private alertfyjs: AlertfyService){}

  ngOnInit(): void {
  }

  m(){
    // this.alertfyjs.message( "Hello Customer!" , MessageType.Notify, MessagePosition.BL, 11, true) //delay default değeere de sahip.
    this.alertfyjs.message( "Hello Customer!" , { type: MessageType.Notify, delay:3, position: MessagePosition.BL } )
  }

  d(){
    this.alertfyjs.dismiss();

  //   $('body').one('click', function(){
  //     alertfyjs.dismiss();
  //  });

  }
  
}
