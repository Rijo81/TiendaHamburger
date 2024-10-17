import { Injectable } from '@angular/core';
import { Models } from '../models/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  //Observable
  private carrito$ = new Subject<Models.Store.CarritoI>();
  carrito: Models.Store.CarritoI;

  constructor() {
    this.initCarrito();
  }

  private initCarrito(){
    this.carrito = {
      total: 0,
      cantidadTotal: 0,
      items: [
        //{ item: null, cant: 1 }
      ],
    }
    console.log(
      'Inicializando carrito...', this.carrito
    );
  }

  getCarritoChanges(){
    return this.carrito$.asObservable();
  }

  addItemProduct(item: Models.Store.ItemI): void {
    //console.log('Todos los datos: ', item, "--> " + index);
    let exist = false;
    this.carrito.items.every((itemExist) => {
      if (itemExist.item.id == item.id) {
        itemExist.cant++;
        exist = true;
        return false;
      }
      return true;
    });
    if (!exist) {
      this.carrito.items.push({ item, cant: 1 });
    }
    this.getTotal();
  }

  getTotal(){
    let total = 0;
    let cantidad = 0;
    this.carrito.items.forEach((product) => {
      total += product.item.price * product.cant;
      cantidad += product.cant;
    });
    this.carrito.total = total;
    this.carrito.cantidadTotal = cantidad;
    console.log('Total: ', total);
    this.carrito$.next(this.carrito);
    return this.carrito.total;
  }
  removeItemProduct(item: Models.Store.ItemI): void {
    console.log('Todos los datos: ', item.price);
    const index =  this.carrito.items.findIndex((itemExist) => {
      if (itemExist.item.id === item.id) {
        return true;
      }
      return false;
    });
    if (index >= 0) {
      console.log('index: ', index);
      if (this.carrito.items[index].cant == 1) {
        this.carrito.items.splice(index, 1);
      }else {
        this.carrito.items[index].cant --;
      }
    }
    this.getTotal();
  }

}
