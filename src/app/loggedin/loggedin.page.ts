import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { Movies } from '../model/movies.interface';
@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.page.html',
  styleUrls: ['./loggedin.page.scss'],
})
export class LoggedinPage implements OnInit {
  user: any = null;
  email:string = "random user";
  nameButton:string = "";
  movies: Movies [];
  constructor(private router :Router, private fire: FirestoreService) {
    /* this.fire.getAMovie(); */
  }

  logOut(){
    sessionStorage.removeItem("userLoggedin");
    this.router.navigateByUrl("home");
  }

  logIn(){
    this.router.navigateByUrl("home");
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("userLoggedin"));
    if(this.user !== null){
      this.email = this.user.email;
    }
  }

  ionViewDidEnter(){
    this.movies = this.fire.removeMovies();

    this.user = JSON.parse(sessionStorage.getItem("userLoggedin"));
    if(this.user !== null){
      this.email = this.user.email;
      console.log(this.movies);
      this.fire.getAUser(this.email);
      this.movies = this.fire.getAMovie();
      this.nameButton = "Cerrar sesion"
    }else{
      this.nameButton = "Log in";
    }
  }

  addMovie(){
    this.router.navigateByUrl("add-movie");
  }

}
