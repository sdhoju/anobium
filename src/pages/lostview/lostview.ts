import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/lost-n-found/item.interface';


@IonicPage()
@Component({
  selector: 'page-lostview',
  templateUrl: 'lostview.html',
})
export class LostviewPage {
  item: Item ={
    itemType: '',
    desc: '',
    status:false
  }
  constructor(public navCtrl: NavController,
     public navParams: NavParams     ) {
  }

  
  ionViewDidLoad() {
    this.item = this.navParams.get('item');
  }
}
