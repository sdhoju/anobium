import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/lost-n-found/item.interface';


@IonicPage()
@Component({
  selector: 'page-foundview',
  templateUrl: 'foundview.html',
})
export class FoundviewPage {
  item: Item = {
    image: '',
    itemType: '',
    desc: '',
    status:true
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    this.item = this.navParams.get('item');
  }
}
