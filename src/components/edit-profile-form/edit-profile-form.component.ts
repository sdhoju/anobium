import { NavController } from 'ionic-angular';
import { Component, OnDestroy, EventEmitter, Output } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { User } from 'firebase/app';
import { AuthService } from './../../providers/auth.service';
import { DataService } from './../../providers/data.service';
import { Profile } from './../../models/profile/profile.interface';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy{

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;


  @Output() saveProfileResult: EventEmitter<Boolean>;
  profile = {} as Profile;

  constructor(private auth: AuthService, private data: DataService, private navCtrl: NavController) {
    this.saveProfileResult= new EventEmitter<Boolean>();
    
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user:User) =>{
      this.authenticatedUser=user;
    })
  }
  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email; 
      const result = await this.data.saveProfile(this.authenticatedUser,this.profile);
      this.saveProfileResult.emit(result);
    }

  }

  cancel(){
    this.navCtrl.pop();
  }

  ngOnDestroy(): void{
  this.authenticatedUser$.unsubscribe();
}  // cancel(pageName: string){
  //   this.NavController

  // }
}
