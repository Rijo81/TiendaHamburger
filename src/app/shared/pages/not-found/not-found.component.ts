import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [IonContent, RouterModule]
})
export class NotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
