import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth.service';


@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  forgetEmail: string;
  constructor(public navCtrl: NavController, private auth: AuthService) {
    this.forgetEmail="";
  }

  resetPassword() {
    this.auth.resetPassword(this.forgetEmail);
  }

  cancel() {
    this.navCtrl.popTo('LoginPage');
  }
}
