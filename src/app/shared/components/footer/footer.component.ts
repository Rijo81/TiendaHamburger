import { Component, inject, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  cant: number = 0;
  private carritoService = inject(CarritoService);

  constructor() { }

  ngOnInit() {
    this.cant = this.carritoService.carrito.cantidadTotal;
    this.carritoService.getCarritoChanges().subscribe(carrito => {
      this.cant = carrito.cantidadTotal;
    })
  }

}
