import { Component, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss'],
})
export class FormContactComponent  implements OnInit {

  form: Models.Contact.FormContactI = {
    email: '',
    name: '',
    phone: '909-998-9999',
  };
  error: string = '';
  constructor() { }

  ngOnInit() {}

  enviar(){
    if (!this.form.email || !this.form.name || !this.form.phone){
      this.error = 'Please ingrese un valor';
      return;
    }
    this.error = '';
    console.log('Boton en funcionamiento', this.form);

  }

}
