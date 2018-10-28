import { Component } from '@angular/core';
import {NavController} from 'ionic-angular'
/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {


  constructor(private navCtrl: NavController) {

  }

  navigateToPage(pageName: string):void {
    //condtion to check if the page is TabsPage or other pages
    pageName =='TabsPage' ?  this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
  }

}
