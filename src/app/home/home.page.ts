import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    disableInput : boolean = true;
    forgotString : string = "Forgot your password?";
    name: string = "";
    passwd: string = "";
    labelMsg: string = "";
    validator: boolean  = true;
    mensaje: string = "";

  constructor(private router:Router, public alertController: AlertController, private afAuth:AuthenticationService) {}
  async handleButtonClick() {
    const alert = await this.alertController.create({
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'Please put ur e-mail here...'
        }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: data => {
          if(data.email.trim() === ""){
            this.mensaje = "U can't leave the email input empty, please fill it";
            this.afAuth.errorToast(this.mensaje);
          }else{
            this.afAuth.resetPasswd(data.email);
          }
        }
      }]
    }).then(alert => {
      alert.present();
    });
  }
  notify(){
    console.log("Toggled: " + this.disableInput);
  }
  changeButtonString(){
    this.forgotString="Set your password";
  }
  validateInputs(){
    if(this.name.trim() === "" || this.passwd.trim() === ""){
      this.labelMsg = "You cannot make that!";
      this.validator = false;
    }else{
      this.afAuth.singin(this.name, this.passwd)
        .then(()=>{
          this.mensaje = "You logged in successfully";
          this.afAuth.presentToast(this.mensaje);
          let user = {
            email : this.name,
            password : this.passwd
          }
          sessionStorage.setItem("userLoggedin", JSON.stringify(user));
          this.router.navigateByUrl("loggedin");
        }, error => {
          /* this.afAuth.errorToast(error); */
          console.log(error);
          if(error.message.includes("email")){
            this.mensaje = "E-mail is badly formed";
          }else if(error.message.includes("user")){
            this.mensaje = "The user doesn't exist, please try again";
          }else if(error.message.includes("password")){
            this.mensaje = "Password incorrect, please try again";
          }
          this.afAuth.errorToast(this.mensaje);
        });
      this.labelMsg = "";
    }
  }
  validateInputs2(){
    if(this.validator === false){
      if(this.name.trim() === "" || this.passwd.trim() === ""){
        this.labelMsg = "You cannot make that!";
        this.validator = false;
      }else{
        this.labelMsg = "";
      }
    }
  }
  resgistry(){
    this.router.navigateByUrl("register");
  }


}
//sessionStorage.setItem(id, cosa);
//sessionStorage.getItem(id);
//sessionStorage.removeItem(id);