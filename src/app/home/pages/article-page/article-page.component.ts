import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from 'src/app/services/web.service';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent  implements OnInit {

  private webService = inject(WebService);
  private route = inject(ActivatedRoute);
  article: Models.Home.ArticlesHomeI;

  titleArticlePage = "Detalle del Articulo";

  constructor() {
    // this.route.params.subscribe((params: any) => {
    //   console.log('params en article: ', params);
    //   if (params.id) {
    //     this.loadArticle(params.id);
    //   }
    // });

    this.route.queryParams.subscribe((queryparams: any) => {
      console.log('QueryParams en article: ', queryparams);
      if (queryparams.id) {
        this.loadArticle(queryparams.id);
      }
    });
  }

  ngOnInit() {}

  async loadArticle(id: string) {
    const url = 'https://jsonplaceholder.typicode.com';
    const path = 'posts/' + id;
    const res = await this.webService.request<Models.Home.ArticlesHomeI>('GET', url, path);
    console.log('data del articulo => ', res);
    if(res){
      this.article = res;
    }  else {
      console.error('No se encontró el artículo');
    }
  }

}
