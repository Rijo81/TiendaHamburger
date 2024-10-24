import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DetailCarritoComponent } from './components/detail-carrito/detail-carrito.component';
import { NotificationsModule } from '../notifications/notifications.module';
import { ShortPipe } from './pipes/short.pipe';
import { IconNotificationComponent } from '../notifications/components/icon-notification/icon-notification.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DetailCarritoComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    //IconNotificationComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DetailCarritoComponent,
    //ShortPipe
  ]
})
export class SharedModule { }
