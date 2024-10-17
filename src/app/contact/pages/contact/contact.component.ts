import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {
  titleContact = "Contactos";
  description = `Se llama contacto a la información digital
  que contiene los datos personales de un individuo. Del
  latín contactus, el contacto es la acción y efecto de
  tocarse dos o más cosas o personas. Para que exista el contacto
  tiene que haber algún tipo de relación, vínculo, enlace o encuentro.`;

  constructor() { }

  ngOnInit() {}

}
