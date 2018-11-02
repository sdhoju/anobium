import { Component } from '@angular/core';
import { Platform, ActionSheetController, NavController } from 'ionic-angular';

@Component({
  selector: 'app-menu-view',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {
  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private navCtrl: NavController
  ) { }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'SignOut',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            // console.log('Favorite clicked');
            this.navCtrl.setRoot('LoginPage');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
