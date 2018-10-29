import { DataService } from './../../providers/data.service';
import { LoginResponse } from './../../models/login/login-response.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from 'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(
    private data: DataService,
    private navCtrl: NavController, 
    private navParams: NavParams, 
    private toast: ToastController) {
  }
  login(event: LoginResponse){
    console.log(event);
    if(!event.error){
      // this.navCtrl.setRoot("TabsPage");
      this.data.getProfile(<User>event.result.user).subscribe(profile =>{

        // console.log(profile);
        profile!=null ?   this.navCtrl.setRoot("TabsPage"): this.navCtrl.setRoot("EditProfilePage")

      });
    }else{
      this.toast.create({
        message:event.error.message,
        duration:3000,
        position: 'top'

      }).present();
    }
  }

  navigateToPage(pageName: string):void {
    //condtion to check if the page is TabsPage or other pages
    pageName =='TabsPage' ?  this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
  }

}
