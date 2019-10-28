import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topup',
  templateUrl: 'topup.html',
})
export class TopupPage {

  //UI display variable
  selected: boolean = true;
  // selected: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupPage');
  }

  goSuccess()
  {
    this.navCtrl.push("SuccessfulPage");
    // this.navCtrl.push("UnsuccessfulPage");
  }

  goTopupbank()
  {
    // this.navCtrl.push("TopupcardPage");
    // this.navCtrl.push("TopupbankPage");
  }

}
