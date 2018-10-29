import { Profile } from './../../models/profile/profile.interface';
import { AuthService } from './../../providers/auth.service';
import { DataService } from './../../providers/data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { LoadingController, Loading, NavController } from 'ionic-angular';

@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent {

  userProfile: Profile;
  loader: Loading
  
  constructor(private loading: LoadingController,
    private data: DataService, private auth: AuthService, private navCtrl: NavController){

      this.loader=this.loading.create({
        content:"Loading Profile..."
      })
  }

  ngOnInit():void{
    this.loader.present();
    this.auth.getAuthenticatedUser().subscribe((user: User)=>{
      this.data.getProfile(user).subscribe(profile=>{
          this.userProfile = <Profile>profile;
          this.loader.dismiss();
      })
    })
  }

  editProfile(){
    this.navCtrl.push('EditProfilePage');
  }


}
