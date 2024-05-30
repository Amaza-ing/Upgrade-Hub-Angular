import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieTitle: string;

  constructor() {
    this.movieTitle = "El Señor de los Anillos";
  }
}
