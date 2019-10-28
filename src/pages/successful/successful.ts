import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the SuccessfulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-successful',
  templateUrl: 'successful.html',
})
export class SuccessfulPage {

  //passed variables
  user: any;
  transaction: any;

  constructor(public common: CommonProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.transaction = this.navParams.get('transaction');

    this.performMath();
    if(this.transaction.method == 'cc' && this.transaction.provider.isSave)
    {
      this.pushQA();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessfulPage');
  }

  pushQA()
  {
    this.user.card = this.transaction.provider;
  }

  performMath()
  {
    this.transaction.id = Math.random().toPrecision(10).toString().slice(2);
    this.user.transactions.push(this.transaction);
    this.user.balance = parseInt(this.user.balance)+parseInt(this.transaction.value);
  }

  goHome()
  {
    this.navCtrl.popToRoot();
  }

  fixTwo(needle)
  {
    return this.common.fixTwo(needle);
  }

  getID()
  {
    let r = Math.random();
    return r;
  }

  getDate()
  {
    return this.setDate(Date.now());
  }

  setDate(date)
  {
    //generate weekday
    var d = new Date(date);
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let minutes = d.getMinutes();
    let hours = d.getHours();
    let day = d.getDate();
    let month = d.getMonth()+1;
    let year = d.getFullYear();
    weekday = weekday[d.getDay()];
    return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
  }

}
