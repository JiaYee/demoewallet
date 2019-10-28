import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public common: CommonProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad()
  {
  }

  goTopuplanding()
  {
    this.navCtrl.push("TopuplandingPage");
  }

  goPay()
  {
    this.common.showToast("Navigating to PayPage");
  }

}
