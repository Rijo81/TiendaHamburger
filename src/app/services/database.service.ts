import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  getData() {
    console.log('DatabaseService en ejecucionado');

  }
}
