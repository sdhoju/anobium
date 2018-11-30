import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LostviewPage } from './lostview';

@NgModule({
  declarations: [
    LostviewPage,
  ],
  imports: [
    IonicPageModule.forChild(LostviewPage),
  ],
})
export class LostviewPageModule {}
