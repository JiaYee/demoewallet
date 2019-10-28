import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the TopuplandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topuplanding',
  templateUrl: 'topuplanding.html',
})
export class TopuplandingPage {

  //passed variable
  user: any;
  transaction: any;

  constructor(public common: CommonProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.transaction = this.navParams.get('transaction');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopuplandingPage');
  }

  goAuto()
  {
    this.common.showToast("Navigating to AutoPayPage");
  }

  fixTwo(float)
  {
    return this.common.fixTwo(float);
  }

  goTopup(method)
  {
    this.transaction.method = method;
    this.transaction.sign = "+";
    let user = this.user;
    let transaction = this.transaction;
    this.navCtrl.push("TopupPage", { user, transaction });
  }

}
