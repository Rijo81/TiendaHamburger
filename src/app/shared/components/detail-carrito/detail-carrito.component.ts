import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Models } from 'src/app/models/models';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-detail-carrito',
  templateUrl: './detail-carrito.component.html',
  styleUrls: ['./detail-carrito.component.scss'],
})
export class DetailCarritoComponent  implements OnInit, OnDestroy {

  carrito: Models.Store.CarritoI;
  private carritoService = inject(CarritoService);
  desubcription: Subscription;

  constructor() { }

  ngOnInit() {
    this.carrito = this.carritoService.carrito;
    this.carritoService.getCarritoChanges().subscribe(changes => {
      console.log('getCarritoChanges en store', changes);
      this.carrito = changes;
    });
  }

  ngOnDestroy(): void {
    this.desubcription?.unsubscribe();
  }
}
