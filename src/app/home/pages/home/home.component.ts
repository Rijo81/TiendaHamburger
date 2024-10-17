import { Component, inject, OnInit } from '@angular/core';
import { Models } from 'src/app/models/models';
import { DatabaseService } from 'src/app/services/database.service';
import { WebService } from 'src/app/services/web.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  private webService = inject(WebService);
  articleH: Models.Home.ArticlesHomeI[];
  cargando: boolean = false;

  constructor() {}


  ngOnInit() {
    this.getArticles();
    this.creatArticle(); // Este metodo simula el creacion de un nuevo articulo
  }

  async getArticles(){
    this.cargando = true;
    const url = 'https://jsonplaceholder.typicode.com';
    const res = await this.webService.request<Models.Home.ArticlesHomeI[]>('GET', url, 'posts');
    console.log('data => ', res);
    if(res){
      this.articleH = res;
    }
    this.cargando = false;
  }

  async creatArticle(){
    const url = 'https://jsonplaceholder.typicode.com';
    const data: Models.Home.ArticlesHomeI = {
      title: 'Nuevo Articulo',
      body: 'Este es un nuevo articulo creado desde Angular',
      userId: 1,
    };
    const res = await this.webService.request<Models.Home.ArticlesHomeI>('POST', url, 'posts', data);
    console.log('data del post => ', res);

  }
}
