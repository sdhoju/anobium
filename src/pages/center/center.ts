import { Item } from '../../models/lost-n-found/item.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ITEM_LIST} from '../../mocks/items/items';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-center',
  templateUrl: 'center.html',
})
export class CenterPage {


  items: Item [];
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.items= ITEM_LIST;

    // this.initializeItems();

  }
  initializeItems() {
    this.items= ITEM_LIST;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return ((item.title +" "+item.desc).toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

}
