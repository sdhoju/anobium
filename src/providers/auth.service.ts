import { ToastController } from 'ionic-angular';
import { LoginResponse } from '../models/login/login-response.interface';
import { Account } from '../models/account/account.interface';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public auth: AngularFireAuth, 
    private toast: ToastController) {
  }
   getAuthenticatedUser(){
     return this.auth.authState;
   }

  async createUserWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }catch(e){
      return <LoginResponse>{
          error:e
      }
    }
  }



  async resetPassword(email: string) {
    try{
      return <any> {
        result: await this.auth.auth.sendPasswordResetEmail(email)
        .then(() => this.toast.create({
                      message: `Email Sent to : ${email}`,
                        duration: 3000,
                        position: 'top'
                      }).present()
            )
        .catch((error) =>  this.toast.create({
                            message: error.message,
                            duration: 3000,
                            position: 'top'
                          }).present())
        }
      }
      catch(e){return <LoginResponse>{error:e}}
  }
  

  get Session() {
    return this.auth.authState;
}
  async signOut(){
    try{
         await this.auth.auth.signOut();

    }catch(e){
          console.log(e); 
    }
  }

  async signInWithEmailAndPassword(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }catch(e){
      return <LoginResponse>{
          error:e
      }
    }
  }
  

}
