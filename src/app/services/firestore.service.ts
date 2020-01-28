import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Person } from '../model/person.interface';
import { AuthenticationService } from './authentication.service';
import { Movies } from '../model/movies.interface';
@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private movies : Movies[] = [];
  constructor(private db : AngularFirestore, private auth: AuthenticationService) { }

  createUser(user:any){
    this.db.doc(`/users/${user.id}`).set({user});
  }

  createMovie(movie: any){
    this.db.doc(`/movies/${movie.id}`).set({movie});
  }

  getAUser(mail:string){
    let usersCollection: AngularFirestoreCollection = this.db.collection<Person>('users');
      usersCollection.valueChanges().subscribe(
      res => {
        res.forEach(element => {
          if(element.user.mail === mail) this.auth.presentToast("User exists in database");
          else this.auth.errorToast("User doesn't exists in database");

        })
      }
    );
  }

  getAMovie(){
    let movieCollection: AngularFirestoreCollection = this.db.collection<Movies>('movies');
    movieCollection.valueChanges().subscribe(
      res => {
        res.forEach(element => {
          this.movies.push(element.movie);
        })
      }
    );
    console.log(this.movies);
    return this.movies;
  }
  removeMovies(){
    this.movies = [];
    return this.movies;
  }
  generateId(){
    return this.db.createId();
  }
}
