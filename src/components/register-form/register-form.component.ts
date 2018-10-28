import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  navigateToPage(pageName: string):void {
    //condtion to check if the page is TabsPage or other pages
    pageName =='TabsPage' ?  this.navCtrl.setRoot(pageName): this.navCtrl.push(pageName);
  }
  cancel(pageName: string): void{ 
    this.navCtrl.popTo(pageName);
  }

}
