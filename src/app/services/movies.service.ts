import { Injectable } from '@angular/core';
import {Movies} from '../model/movies.interface'
import { FirestoreService } from './firestore.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies : Movies;

  constructor(private db : FirestoreService) {}

  createAMovie(name:string, type:string, actors:string){
    let movie = {
      id: this.db.generateId(),
      name: name,
      type: type,
      actors: actors
    };
    this.db.createMovie(movie);
  }


}
