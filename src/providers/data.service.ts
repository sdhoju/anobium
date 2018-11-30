import { Item } from './../models/lost-n-found/item.interface';
import { take } from 'rxjs/operators';
import { Profile } from '../models/profile/profile.interface';

import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import {User } from 'firebase/app';




@Injectable()
export class DataService {
  profileObject: AngularFireObject <any>
  itemObject:AngularFireObject <any>
    //Refercence https://grokonez.com/firebase/ionic-3-firebase-example-crud-operations-with-firebase-realtime-database
  private itemListRef = this.database.list<Item>('item-list');

  constructor(private database: AngularFireDatabase) {
  }

  getProfile(user: User){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    return this.profileObject.valueChanges();
  }


  async saveProfile(user:User,profile:Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try{
      await this.profileObject.set(profile);
      return true;
    }catch(e){
        console.error(e);
        return false;
    }
  }

  getItems(item: Item){
    this.itemObject = this.database.object(`/item-list/${item.key}`);
    return this.itemObject.valueChanges();
  }
  getItemList(){
    return this.itemListRef;
  }

  createItem(item: Item){
    return this.itemListRef.push(item);
  }

  updateItem(item: Item){
    return this.itemListRef.update(item.key, item);
  }

  deleteItem(item: Item){
    return this.itemListRef.remove(item.key);
  }

  serchUser(desc: string){

  }

}
