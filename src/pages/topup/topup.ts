import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

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
  // selected: boolean = true;
  selected: boolean = false;
  mode: any = "ob";

  //passed variable
  user: any;
  transaction: any;

  constructor(public common: CommonProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.transaction = this.navParams.get('transaction');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopupPage');
  }

  fixTwo(needle)
  {
    return this.common.fixTwo(needle);
  }

  checkValue(needle)
  {
    if(this.transaction.value == needle)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  setValue(needle)
  {
    this.transaction.value = needle;
  }

  goSuccess()
  {
    let user = this.user;
    let transaction = this.transaction;
    this.navCtrl.push("SuccessfulPage", { user, transaction });
  }

  goTopuplist()
  {
    let user = this.user;
    let transaction = this.transaction;
    this.navCtrl.push("TopuplistPage", { user, transaction });
  }

}
