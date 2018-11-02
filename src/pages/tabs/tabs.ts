<<<<<<< HEAD
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
=======
import { LoginPage } from './../login/login';

import { EditProfilePage } from './../edit-profile/edit-profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
>>>>>>> e650fef7f3e25ce92bba79e9f01937924f63b013


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  profilePage: string;
  tab3Root: string;
  aboutPage: string;
  mainPage: string;


  constructor() {
    this.mainPage = 'CenterPage';

    this.tab3Root = 'ThirdPage'
    this.aboutPage = 'AboutPage';
    this.profilePage = 'ProfilePage';
  }

  
  // logout(){
  //  // this.navCtrl.setRoot
  //  // const root = this.app.getRootNav();
  //   //root.popToRoot();
  //   this.app.getRootNav().setRoot(LoginPage);
  // }
}


