import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UnsuccessfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unsuccessful',
  templateUrl: 'unsuccessful.html',
})
export class UnsuccessfulPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnsuccessfulPage');
  }

  goHome()
  {
    this.navCtrl.popToRoot();
  }

}
