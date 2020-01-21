import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  disableInput: boolean = true;
  forgotString: string = "Forgot your password?";
  name: string = "";
  passwd: string = "";
  labelMsg: string = "";
  validator: boolean = true;

  constructor(private router: Router, private afAuth: AuthenticationService) { }

  ngOnInit() {
  }

  notify() {
    console.log("Toggled: " + this.disableInput);
  }
  changeButtonString() {
    this.forgotString = "Set your password";
  }
  validateInputs() {
    if (this.name.trim() === "" || this.passwd.trim() === "") {
      this.labelMsg = "You cannot make that!";
      this.validator = false;
    } else {
      this.afAuth.createUser(this.name, this.passwd)
        .then(() => {
          console.log("Usuario creado correctamente");
        }, error => {
          console.log(error);
        });
      this.name = "";
      this.passwd = "";
      this.router.navigateByUrl("home");
      this.labelMsg = "";
    }
  }
  validateInputs2() {
    if (this.validator === false) {
      if (this.name.trim() === "" || this.passwd.trim() === "") {
        this.labelMsg = "You cannot make that!";
        this.validator = false;
      } else {
        this.afAuth.createUser(this.name, this.passwd)
          .then(() => {
            console.log("Usuario creado correctamente");
          }, error => {
            console.log(error);
          });
        this.name = "";
        this.passwd = "";
        this.router.navigateByUrl("home");
        this.labelMsg = "";
      }
    }
  }
}
