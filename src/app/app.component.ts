import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/shop/toastr.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private m: CustomToastrService) {
    m.toastmessage('hello', 'friend', {
      type: ToastrMessageType.Success, position: ToastrPosition.BR
    });
  }
}
 
$.get("https://localhost:7013/api/Products", data=>{ console.log(data); });