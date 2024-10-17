import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Models } from 'src/app/models/models';
import { CarritoService } from 'src/app/services/carrito.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent  implements OnInit, OnDestroy {

  //carrito: Models.Store.CarritoI;
  items: Models.Store.ItemI[];
  cargando: boolean = true;
  carrito: Models.Store.CarritoI;
  titlePage = "Tienda";
  private databaseServices = inject(DatabaseService)
  private carritoServices = inject(CarritoService);

  subscriptionCarrito: Subscription;
  //pedido: Models.Store.PedidoI;


  constructor() {
    this.loadItems();
    //this.initCarrito();
  }

  ngOnInit() {
    // this.carrito = this.carritoServices.carrito;
    // this.carritoServices.getCarritoChanges().subscribe( changes => {
    //     console.log('Carrito changes ->', changes);
    //     this.carrito = changes; // Actualizamos el carrito con los cambios del observable

    // })
    // console.log('ngOnInit');
  }

  ngOnDestroy(): void {
    // this.subscriptionCarrito.unsubscribe();
    // console.log('Desubscrito');

  }
  loadItems() {
    this.databaseServices.getData();
    setTimeout(() => {
      this.items = dataDemo;
      this.cargando = false;
      console.log('items loaded', this.items);

    }, 2000); // Simulación de carga lenta
  }

  addItemProduct(item: Models.Store.ItemI): void {
    this.carritoServices.addItemProduct(item);
    this.carrito = this.carritoServices.carrito;
  }

  removeItemProduct(item: Models.Store.ItemI): void {
    this.carritoServices.removeItemProduct(item);
    this.carrito = this.carritoServices.carrito;
  }
  // initCarrito(){
  //   this.carrito = {
  //     total: 0,
  //     cantidadTotal: 0,
  //     items: [
  //       //{ item: null, cant: 1 }
  //     ],
  //   }
  //   console.log(
  //     'Inicializando carrito...', this.carrito
  //   );

  // }

  // addProduct(){
  //   console.log('Estoy en el padres');

  // }
  // addItemProduct(item: Models.Store.ItemI): void {
  //   //console.log('Todos los datos: ', item, "--> " + index);
  //   let exist = false;
  //   this.carrito.items.every((itemExist) => {
  //     if (itemExist.item.id == item.id) {
  //       itemExist.cant++;
  //       exist = true;
  //       return false;
  //     }
  //     return true;
  //   });
  //   if (!exist) {
  //     this.carrito.items.push({ item, cant: 1 });
  //   }
  //   this.getTotal();
  // }


  // getTotal(){
  //   let total = 0;
  //   let cantidad = 0;
  //   this.carrito.items.forEach((product) => {
  //     total += product.item.price * product.cant;
  //     cantidad += product.cant;
  //   });
  //   this.carrito.total = total;
  //   this.carrito.cantidadTotal = cantidad;
  //   console.log('Total: ', total);
  // }
  // removeItemProduct(item: Models.Store.ItemI): void {
  //   console.log('Todos los datos: ', item.price);
  //   const index =  this.carrito.items.findIndex((itemExist) => {
  //     if (itemExist.item.id === item.id) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   if (index >= 0) {
  //     console.log('index: ', index);
  //     if (this.carrito.items[index].cant == 1) {
  //       this.carrito.items.splice(index, 1);
  //     }else {
  //       this.carrito.items[index].cant --;
  //     }
  //   }
  //   this.getTotal();
  // }

  onClick(){
    console.log('OnClick');

  }
}

const dataDemo: Models.Store.ItemI[] = [
  {
    id: '001',
    name: 'Hamburger XP',
    description: 'Descripción del producto 1',
    price: 100.55,
    simbolDinero: 'RD$ ',
    image: 'assets/img/hamburger1.jpg',
    stock: 10,
  },
  {
    id: '002',
    name: 'Hamburger Super',
    description: 'Descripción del producto 2',
    price: 200.45,
    simbolDinero: 'RD$ ',
    image: 'assets/img/hamburger2.jpg',
    stock: 0,
  },
  {
    id: '003',
    name: 'Hamburger Ultra',
    description: 'Descripción del producto 3',
    price: 300.45,
    simbolDinero: 'RD$ ',
    image: 'assets/img/hamburger3.jpg',
    stock: 30,
  },
  {
    id: '004',
    name: 'Hamburger Ultra Mega',
    description: 'Descripción del producto 4',
    price: 455.99,
    simbolDinero: 'US$ ',
    image: 'assets/img/hamburger4.jpg',
    stock: 10,
  },
  {
    id: '005',
    name: 'Hamburger Ultra Mega Xtreme',
    description: 'Descripción del producto 4',
    price: 647.99,
    simbolDinero: 'US$ ',
    image: 'assets/img/hamburger5.jpg',
    stock: 0,
  }
];
