import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  profilePage: string;
  tab3Root: string;
  message: string;
  aboutPage: string;
  mainPage: string;


  constructor() {
    this.mainPage = 'CenterPage';
    this.message = 'FourthPage'
    this.tab3Root = 'ThirdPage'
    this.aboutPage = 'AboutPage';
    this.profilePage = 'ProfilePage';
  }


}


