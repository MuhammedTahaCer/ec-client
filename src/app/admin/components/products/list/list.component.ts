import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { AlertfyService, MessagePosition, MessageType } from 'src/app/services/admin/alertfy.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {
  
  constructor(private productService:ProductService, private alerty: AlertfyService,spinner: NgxSpinnerService,){  super(spinner)  }

  displayedColumns: string[]=['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource:       MatTableDataSource<any> = null;

  ngOnInit(): void {
    this.showSpinner(spinnerType.Atom);
    this.productService.read(()=>this.hideSpinner(spinnerType.Atom), errorMessage => this.alerty.message(errorMessage,{
       type: MessageType.Error,
       position: MessagePosition.BC,
       
    }
    )})

  }

}
