export namespace ModelsHome{

  export interface ArticleI {
    title: string;
      description: string;
      image: {
        url: string;
        alt: string;
      }
      id?: string;
  }

  export interface ArticlesHomeI {
    title: string;
    body: string;
    userId: number;
    id?: number;
  }
  export interface Interface3 {}
  export interface Interface4 {}
  export interface Interface5 {}
}

