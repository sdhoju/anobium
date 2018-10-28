import { Component } from '@angular/core';
import { NavController,  ToastController } from 'ionic-angular';
import {AngularFireAuth } from 'angularfire2/auth';
import {Account} from '../../models/account/account.interface'

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})

export class RegisterFormComponent {
  
  account ={} as Account;

  constructor(
    private navCtrl: NavController, 
    private afAuth: AngularFireAuth,
    private toast: ToastController) {
  }
  
  async register() {
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password)
      this.toast.create({
        message: "Account successfully created",
        duration: 3000
      }).present();
      console.log(result);
    }catch(e){
      console.error(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }
    
  }
  
  navigateToPage(pageName: string):void {
    //condtion to check if the page is TabsPage or other pages
    pageName =='TabsPage' ?  this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
  }
  cancel(pageName: string): void{ 
    this.navCtrl.popTo(pageName);
  }

}
