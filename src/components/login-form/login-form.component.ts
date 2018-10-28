import { Component, EventEmitter, Output } from '@angular/core';
import {NavController} from 'ionic-angular'

import {Account} from '../../models/account/account.interface'
import { AuthService } from './../../providers/auth/auth.service';
import {LoginResponse} from '../../models/login/login-response.interface'
  
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;
  @Output() loginStatus: EventEmitter<any>;

    
    constructor(private auth: AuthService, private navCtrl: NavController) {
      this.loginStatus = new EventEmitter<any>();
    }

    // Login Function for an account.
    async login(){
      const result = await  this.auth.signInWithEmailAndPassword(this.account)
      this.loginStatus.emit(result);
    }

  navigateToPage(pageName: string):void {
    //condtion to check if the page is TabsPage or other pages
    // pageName =='TabsPage' ?  this.navCtrl.setRoot(pageName): 
    this.navCtrl.push(pageName);
  }

}
