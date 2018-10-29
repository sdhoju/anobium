import { take } from 'rxjs/operators';
import { Profile } from '../models/profile/profile.interface';

import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import {User } from 'firebase/app';



@Injectable()
export class DataService {
  profileObject: AngularFireObject <any>
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


}
