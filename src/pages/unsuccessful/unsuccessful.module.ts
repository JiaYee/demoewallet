import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnsuccessfulPage } from './unsuccessful';

@NgModule({
  declarations: [
    UnsuccessfulPage,
  ],
  imports: [
    IonicPageModule.forChild(UnsuccessfulPage),
  ],
})
export class UnsuccessfulPageModule {}
