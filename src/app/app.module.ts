import { DataService } from '../providers/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';


import {FIREBASE_CONFIG} from './app.firebase.config';

import { MyApp } from './app.component';
import { AuthService} from '../providers/auth.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(FIREBASE_CONFIG),
<<<<<<< HEAD
    AngularFireAuthModule

=======
    AngularFireAuthModule,
    AngularFireDatabaseModule
>>>>>>> 9063bb3a54e8ad40bdafbf15a4d69d4093aa51f9
  ],
  bootstrap: [IonicApp],
  entryComponents: [

    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService
  ]
})
export class AppModule {}
