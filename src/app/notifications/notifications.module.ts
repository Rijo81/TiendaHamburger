import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DetailNotificationComponent } from './components/detail-notification/detail-notification.component';
import { IconNotificationComponent } from './components/icon-notification/icon-notification.component';
import { IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NotificationsComponent,
    DetailNotificationComponent,
    IconNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    IonContent,
    SharedModule
  ],
  exports: [
    IconNotificationComponent
  ]
})
export class NotificationsModule { }
