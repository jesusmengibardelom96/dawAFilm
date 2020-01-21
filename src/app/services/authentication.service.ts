import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private fAuth:AngularFireAuth, private toast:ToastController) { }

  async createUser(mail:string, password:string){
    return this.fAuth.auth.createUserWithEmailAndPassword(mail, password)
    .then((newCredential: firebase.auth.UserCredential)=>{
      console.log(newCredential);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }

  async singin(mail:string, password:string){
    return this.fAuth.auth.signInWithEmailAndPassword(mail, password)
    .then((newCredential: firebase.auth.UserCredential) =>{
      console.log(newCredential);
    }).catch(error => {
      console.log(error);
      throw new Error(error);
    });
  }

  async resetPasswd (mail:string){
    return this.fAuth.auth.sendPasswordResetEmail(mail);
  }

  async presentToast(mensaje:string) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 3000,
      position: 'middle',
      color: 'success'
    });
    toast.present();
  }

  async errorToast(message: string){

    const toast = await this.toast.create({
      message: message,
      duration: 3000,
      position: 'middle',
      color: 'danger'
    });
    toast.present();
  }
}
