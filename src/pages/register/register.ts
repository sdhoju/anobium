import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from './../../models/login/login-response.interface';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private toast: ToastController) {
  }

  register(event: LoginResponse){
    if(!event.error){
        this.toast.create({
        message: `Account created: ${event.result.email}`,
        duration: 3000
      }).present();
      this.navCtrl.setRoot("TabsPage")
    }
    else{
        this.toast.create({
        message: `Account not created: ${event.error.message}`,
        duration: 3000
      }).present();
    }
  }

}
 