import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopuplistPage } from './topuplist';

@NgModule({
  declarations: [
    TopuplistPage,
  ],
  imports: [
    IonicPageModule.forChild(TopuplistPage),
  ],
})
export class TopuplistPageModule {}
