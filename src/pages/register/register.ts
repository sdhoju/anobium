import { LoginPage } from './../login/login';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  navigateToPage(pageName: string):void {
    //condtion to check if the page is TabsPage or other pages
    pageName =='TabsPage' ?  this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
  }
  cancel(pageName: string): void{ 
    this.navCtrl.popTo(pageName);
  }
}
 