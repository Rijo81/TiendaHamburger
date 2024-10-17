import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { IonContent } from '@ionic/angular/standalone';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    IonContent,
    SharedModule,
    FormsModule
  ]
})
export class ContactModule { }
