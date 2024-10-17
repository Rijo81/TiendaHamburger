import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {

@Input() item: Models.Store.ItemI;
@Output() add = new EventEmitter();
@Output() remove = new EventEmitter();

colores: '#b02239' | '#af30ec' | '#6176e7' | '#cbfe5f' | '#00906a';
count : number = 0;
  //@Input() index: number;
//cantidad: number = 0;

  constructor() { }

  ngOnInit() {
    this.getColor();

  }

  addItem(item: Models.Store.ItemI): void {
   console.log('Add Item Product');
   this.add.emit(); // Emitimos el evento para que el padre (StoreComponent) lo procese.  // En este caso, simplemente imprime el item para ver si se está emitiendo correctamente.  // Este evento puede ser utilizado para realizar acciones adicionales, como agregar el producto al carrito.  // En este caso, simplemente imprime el item para ver si se está emitiendo correct
    this.count++;
   }
  removeItem(item: Models.Store.ItemI): void {
    console.log('Remove Item Product', item);
    this.remove.emit();
    if (this.count > 0) {
      this.count--;
    }
  }

  getColor(){
    if (this.item.stock === 0) {
      this.colores = '#b02239'
    }else if (this.item.stock <= 10) {
      this.colores = '#cbfe5f'
    } else{
      this.colores = '#6176e7'
    }
  }
}
