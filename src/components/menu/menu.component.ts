import { AuthService } from './../../providers/auth.service';
import { Component } from '@angular/core';
import {App, Platform, MenuController } from 'ionic-angular';

@Component({
  selector: 'app-menu-view',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {


  
  constructor(public platform: Platform,
    private auth: AuthService,
    public menu: MenuController,
    public app: App
  ) { }


  
  backToLogin(){
    const root = this.app.getRootNav();
    root.setRoot("LoginPage");
  }

  profile(){
    this.menu.close();
    var nav = this.app.getRootNav();
          nav.push("ProfilePage");
  }

   signOut(){
    try{
      // this.auth.signOut();
      this.menu.close();
      this.backToLogin()
    }catch(e){
      this.menu.close();
      this.backToLogin()
    }

  }

}
