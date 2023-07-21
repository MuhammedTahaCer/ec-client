import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { List_Product } from 'src/app/contracts/list_product';
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

  @ViewChild(MatPaginator) paginate: MatPaginator

  async getMyProducts(){
    this.showSpinner(spinnerType.Atom);
    let allProducts: {totalCount: number; products:List_Product[]}  = await this.productService.read( this.paginate ? this.paginate.pageIndex:0, this.paginate ? this.paginate.pageSize:5 , ()=> this.hideSpinner(spinnerType.Atom), errorMessage => this.alerty.message(errorMessage,{
       type: MessageType.Error,
       position: MessagePosition.BC,
       dismiss: false,
    }
    )) // read promise data olarak List_Product[] bekliyor. Bunu data source'a göndermeliyim. Promise olduğu için await ile karşılamalıyım. Artık onit void olamaz 

    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products); // paginator implement istiyor.
    this.dataSource.paginator = this.paginate
    // this.paginate.length = allProducts.totalCount
  }

  async pageChanged(){ //from list.component.html
    await this.getMyProducts();
  }

 async ngOnInit() {
  await this.getMyProducts()  
}

//create edilen veri aynı zamanda listeyi güncellesin istiyorsam bir outpu yazıyorum: create.component.ts

}
