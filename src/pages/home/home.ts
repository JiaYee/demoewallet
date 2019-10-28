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

  //object variable
  user: any = {};
  transaction: any = {};

  constructor(public common: CommonProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user.balance = 0;
    this.user.transactions = [];
  }

  ionViewDidEnter()
  {
    this.transaction = {};
  }

  goAddP()
  {
    this.common.showToast("Navigating to AddPaymentPage");
  }

  goSMore()
  {
    this.common.showToast("Navigating to SeeMorePage");
  }

  quickPay()
  {
    this.transaction.method = "cc";
    this.transaction.provider = this.user.card;
    let user = this.user;
    let transaction = this.transaction;
    this.navCtrl.push("SuccessfulPage", { user, transaction });
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

  maskThis(n)
  {
    if(n.length > 3)
    {
      let needle = n.length-4;
      let haystack = n.substring(needle, n.length);
      let newn = "**** **** **** " + haystack;
      return newn;
    }
    else
    {
      let newn = "**** **** **** " + n;
      return newn;
    }

  }

  fixTwo(float)
  {
    return this.common.fixTwo(float);
  }

  goTopuplanding()
  {
    let user = this.user;
    let transaction = this.transaction;
    this.navCtrl.push("TopuplandingPage", { user, transaction });
  }

  goPay()
  {
    this.common.showToast("Navigating to PayPage");
  }

}
