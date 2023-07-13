import { Component, OnInit } from '@angular/core';
import { AlertfyService, MessagePosition, MessageType } from 'src/app/services/admin/alertfy.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  constructor(private alertfyjs: AlertfyService){}

  ngOnInit(): void {
    this.alertfyjs.message( "Alert" ,  {type: MessageType.Message, delay:6, position: MessagePosition.TC, dismiss: true} );
  }

}