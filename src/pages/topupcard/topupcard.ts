import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopupcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topupcard',
  templateUrl: 'topupcard.html',
})
export class TopupcardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupcardPage');
  }

  goTopupcarddetail()
  {
    this.navCtrl.push("TopupcarddetailPage");
  }

}
