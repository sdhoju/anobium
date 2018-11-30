import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, Platform, ActionSheetController } from 'ionic-angular';
import { ITEM_LIST} from '../../mocks/items/items';
import { Observable } from 'rxjs/Observable';

import { DataService } from './../../providers/data.service';
import { Item } from './../../models/lost-n-found/item.interface';
import 'rxjs/add/operator/map'
import { filter } from 'rxjs/operators';




@IonicPage()
@Component({
  selector: 'page-center',
  templateUrl: 'center.html',
})
export class CenterPage {


  items: Item [];

  itemList: Observable<Item []>;
  loader: Loading;
  c=1;
  Lost_and_Found: any


  constructor(private loading: LoadingController,
     private navCtrl: NavController, private navParams: NavParams,
     public platform: Platform,
     public actionsheetCtrl: ActionSheetController,
      private database: DataService) {
    this.loader=this.loading.create({
      content:"Loading..."
    })
    
    this.initializeItems();
    this.Lost_and_Found="Lost";
  }

  initializeItems() {
    // this.items= this.itemList;
    this.loader.present();
    this.itemList = this.database.getItemList()
    .snapshotChanges()
    .map(
      changes=> {
        return changes.map(c=>({
          key: c.payload.key,...c.payload.val()
        }))
      });
      this.loader.dismiss();

  }

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Report Lost or Found',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        
        {
          text: 'Report a Loss',
          icon: 'sad',
          handler: () => {
            this.navCtrl.push("LostPage")
          }
        },
        {
          text: 'Report a Found',
          icon: 'cube',
          handler: () => {
            this.navCtrl.push("FoundPage")
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close' ,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }



  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return ((item.itemType +" "+item.desc).toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

}
