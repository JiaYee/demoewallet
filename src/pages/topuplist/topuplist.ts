import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the TopuplistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topuplist',
  templateUrl: 'topuplist.html',
})
export class TopuplistPage {

  //list variables
  banks: any = [];
  cards: any = [];

  //passed variables
  user: any;
  transaction: any;

  constructor(public common: CommonProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.transaction = this.navParams.get('transaction');
    this.transaction.provider = {};
    this.transaction.provider.name = "";

    this.banks = [
      {
        name: "Maybank",
        icon: "assets/imgs/iconmaybank.png"
      },
      {
        name: "RHB",
        icon: "assets/imgs/iconrhb.png"
      },
      {
        name: "CIMB Bank",
        icon: "assets/imgs/iconcimb.png"
      },
      {
        name: "Bank Rakyat",
        icon: "assets/imgs/iconbankrakyat.png"
      },
      {
        name: "Bank Islam",
        icon: "assets/imgs/iconbankislam.png"
      },
      {
        name: "Hong Leong Bank",
        icon: "assets/imgs/iconhongleongbank.png"
      },
      {
        name: "Public Bank",
        icon: "assets/imgs/iconpublicbank.png"
      },
    ]

    this.cards = [
      {
        name: "MasterCard",
        icon: "assets/imgs/iconmastercard.png"
      },
      {
        name: "Visa",
        icon: "assets/imgs/iconvisa.png"
      },
      {
        name: "JCB",
        icon: "assets/imgs/iconjcb.png"
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopuplistPage');
  }

  setProvider(provider)
  {
    this.transaction.provider = provider;
  }

  chooseProvider()
  {
    this.navCtrl.pop();
  }



}
