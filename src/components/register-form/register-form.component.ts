import { Component,Output, EventEmitter } from '@angular/core';
import { NavController,  ToastController } from 'ionic-angular';
import {Account} from '../../models/account/account.interface'
import { AuthService } from './../../providers/auth/auth.service';
import {LoginResponse} from '../../models/login/login-response.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})

export class RegisterFormComponent {
  
  account ={} as Account;
  @Output() registerStatus: EventEmitter<any>

  constructor(
    private navCtrl: NavController, 
    private auth: AuthService,
    private toast: ToastController) {
     this.registerStatus=new EventEmitter<any>(); 
  }
  
  async register() {
    try{
      const result = await this.auth.createUserWithEmailAndPassword(this.account)

      this.registerStatus.emit(result);
    }catch(e){
      console.error(e);
      this.registerStatus.emit(e);
    } 
  }
  navigateToPage(pageName: string):void {
    this.navCtrl.push(pageName);
  }
  cancel(pageName: string): void{ 
    this.navCtrl.popTo(pageName);
  }

}
