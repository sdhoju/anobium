
import { EditProfilePage } from './../edit-profile/edit-profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: string;
  tab2Root: string;
  tab3Root: string;
  tab4Root: string;
  tab5Root: string;


  constructor(public navCtrl: NavController, public app: App) {
    this.tab1Root = 'CenterPage';
    this.tab2Root = 'FoundPage';
    this.tab3Root = 'ThirdPage'
    this.tab4Root = 'ProfilePage';
    this.tab5Root = 'AboutPage';
  }
  
  logout(){
   // this.navCtrl.setRoot
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}


