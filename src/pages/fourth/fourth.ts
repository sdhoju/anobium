import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FourthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fourth',
  templateUrl: 'fourth.html',
})
export class FourthPage {
Inbox:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Inbox="messages";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FourthPage');
  }
}
