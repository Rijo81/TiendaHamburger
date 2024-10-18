import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  cargando: boolean = false;

  private fb = inject(FormBuilder);

  dataForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    phone: ['8099028301', [Validators.required, this.isValid]]  // Valida que sea un número de teléfono con guiones.
  });
  constructor() { }

  ngOnInit() {
    //OBSERVAR LOS CAMBIOS QUE SE REALICEN...
    this.dataForm.controls['email'].valueChanges.subscribe(changes => {
      console.log('email changed ->', changes);
    });

    this.loadInfo();
  }

  loadInfo() {
    // setTimeout(() => {
    //   this.dataForm.controls['phone'].setValue("8099684118");
    // }, 2000);
  }

  enviar(){
    if (!this.form.email || !this.form.name || !this.form.phone){
      this.error = 'Please ingrese un valor';
      return;
    }
    this.error = '';
    console.log('Boton en funcionamiento', this.form);

  }
  enviarForm(){
    this.cargando = true;
    console.log('dataForm -> ', this.dataForm);
    if (this.dataForm.valid){
      console.log('valid');
      const data = this.dataForm.value;
      console.log(data);

    }
    this.cargando = false;
  }

  //VALIDADOR PERSONALIZADO.

  isValid(input: FormControl){
    console.log('input valid -> ', input.value);
    if(input.value.length != 10){
      return {invalidPhone: true};
    }
    return {};
  }
}
