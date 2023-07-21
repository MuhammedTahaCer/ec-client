import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, spinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertfyService, MessagePosition, MessageType } from 'src/app/services/admin/alertfy.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent extends BaseComponent implements OnInit {
  
  constructor(private productService: ProductService, spinner: NgxSpinnerService, private alerty: AlertfyService) {
    super(spinner);

  }

  @Output() created:EventEmitter<Create_Product> = new EventEmitter() //creatin kullandığı ana componenet hangisi; product componenet; create tetiklendiğinde bir event fılatıcaz -> products component'e / dışarıya. (EventEmitter) Ordan bir fonksiyon tetiklemek için viewchart kullanılıyor.

  ngOnInit(): void {
  }
  
  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();


  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement){
    this.showSpinner(spinnerType.Atom)
      const createProduct: Create_Product = new Create_Product();
      createProduct.name = name.value;
      createProduct.stock = parseInt(stock.value);
      createProduct.price = parseFloat(price.value);
      
        //modeli oluşturdum. Şimdi servisi çaırıcam:  //product servise callback metodundan faydalarak succusess duurumunu çağırdım
      this.productService.create(createProduct, () => {
          this.hideSpinner(spinnerType.Atom);
          this.alerty.message("Ürün başarıyla eklenmiştir.", { dismiss: false, type: MessageType.Succuess, position: MessagePosition.BC });
          this.createdProduct.emit(createProduct); // output'a creati işaret eden(selector) componenete gönderiyorum . product.component.html
          this.createdProduct.emit(createProduct);
      }, errorMessage => {
      // console.log()
      this.alerty.message(errorMessage,
        {
          dismiss: false, type: MessageType.Error, position: MessagePosition.TR
        });
        
      });

  }

}
