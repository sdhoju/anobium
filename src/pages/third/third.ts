import { FIREBASE_CONFIG } from './../../app/app.firebase.config';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {storage} from 'firebase'
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  constructor(private camera: Camera,public navCtrl: NavController) {
  }
  async takePhoto(){
    try{
      const options: CameraOptions ={
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation:true
      }
      
      const result = await  this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`
      const pictures = storage().ref(`pictures/${(Math.random()*99999999)}`);
      pictures.putString(image,'data_url')
    }
    catch(e){
      console.error(e);
    }
  }
//   public getphoto(){
//     let imgUrl: string;
//     try{
//       storage().ref().child("/venues/" + image ).getDownloadURL().then(function(url){
//         console.log("log1: " + url);
//         return url;
//       });
//     }
//     catch(e){
//       console.log(e);
//     }   
// }
  async getphoto(){
    try{
      const pictures = storage().ref('picture');
      console.log(pictures);

    }catch(e){
      console.error(e);
    }
  }

}
