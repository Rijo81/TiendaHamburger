import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Models } from 'src/app/models/models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {

  //private router = inject(Router);

  @Input() article : Models.Home.ArticlesHomeI;

  constructor(private router: Router) {
    //this.loadArticle();
  }

  ngOnInit() {}

  loadArticle(){
    // const data = {
    //   title: 'Angular & Ionic Aplication',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut laoreet est, ac tristique neque. Donec faucibus, turpis vel rutrum fermentum, nunc lectus bibendum risus, at mollis enim neque non felis.',
    //   image: {
    //     url: '/assets/icon/favicon.png',
    //     alt: 'Article Image'
    //   }
    // }
    // this.article = data;
  }

  gotoArticles() {
    //this.router.navigate([`/home/article/${this.article.id}`]);
    this.router.navigate([`/home/article`], {queryParams: {id: this.article.id, b: 'Hola a todos'}});
  }
}
