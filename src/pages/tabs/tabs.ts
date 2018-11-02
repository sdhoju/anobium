import { EditProfilePage } from './../edit-profile/edit-profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: string;
  // tab2Root: string;
  tab3Root: string;
  tab4Root: string;
  tab5Root: string;


  constructor(private navCtrl: NavController) {
    this.tab1Root = 'CenterPage';
    // this.tab2Root = 'FoundPage';
    this.tab3Root = 'ThirdPage'
    this.tab4Root = 'AboutPage';
    this.tab5Root = 'ProfilePage';
  }
  signOut(){
    // this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }
}


