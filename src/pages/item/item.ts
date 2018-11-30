import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, Platform } from 'ionic-angular';
import { DataService } from './../../providers/data.service';
import { Observable } from 'rxjs/Observable';

import { Item } from './../../models/lost-n-found/item.interface';
import 'rxjs/add/operator/map'


@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  items: Item [];

  loader: Loading;
  Lost_and_Found: any
  itemList: Observable<Item []>;

  query: string;
    constructor(private loading: LoadingController,
    private navCtrl: NavController, private navParams: NavParams,
    public platform: Platform,
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


}
