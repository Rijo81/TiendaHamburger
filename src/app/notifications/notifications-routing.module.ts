import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
  { path: '', component: NotificationsComponent },
  // { path: 'new-notification', component: NewNotificationComponent },
  // { path: 'notification/:id', component: NotificationDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsRoutingModule { }
