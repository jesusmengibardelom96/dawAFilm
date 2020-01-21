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
          console.log(data.email);
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
          this.afAuth.presentToast();
          this.router.navigateByUrl("loggedin");
        }, error => {
          this.afAuth.errorToast(error);
          console.log(error);
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
        this.afAuth.singin(this.name, this.passwd)
        .then(()=>{
          this.afAuth.presentToast();
          this.router.navigateByUrl("loggedin");
        }, error => {
          this.afAuth.errorToast(error);
        });
        this.labelMsg = "";
      }
    }
  }
  resgistry(){
    this.router.navigateByUrl("register");
  }


}
