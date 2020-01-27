import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.page.html',
  styleUrls: ['./loggedin.page.scss'],
})
export class LoggedinPage implements OnInit {
  user: any = null;
  email:string = "random user";
  nameButton:string = "";
  constructor(private router :Router) { }

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
    this.user = JSON.parse(sessionStorage.getItem("userLoggedin"));
    if(this.user !== null){
      this.email = this.user.email;
      this.nameButton = "Cerrar sesion"
    }else{
      this.nameButton = "Log in";
    }
  }

  addMovie(){
    this.router.navigateByUrl("add-movie");
  }

}
