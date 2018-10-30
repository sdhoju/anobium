import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from './../../providers/data.service';
import { Item } from './../../models/lost-n-found/item.interface';


@IonicPage()
@Component({
  selector: 'page-found',
  templateUrl: 'found.html',
})
export class FoundPage {
  item: Item = {
    itemType: '',
    desc: ''
  };

  
  constructor(private navCtrl: NavController, private navParams: NavParams, private database: DataService) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNotePage');
  }
 
  addItem(item: Item) {
    this.database.createItem(item).then(ref => {
      this.navCtrl.setRoot('TabsPage');
    })
  }
}
