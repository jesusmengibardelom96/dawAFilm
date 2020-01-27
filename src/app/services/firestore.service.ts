import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  constructor(private db : AngularFirestore) { }

  createUser(user:any){
    this.db.doc(`/users/${user.id}`).set({user});
  }

  createMovie(movie: any){
    this.db.doc(`/movies/${movie.id}`).set({movie});
  }

  generateId(){
    return this.db.createId();
  }
}
