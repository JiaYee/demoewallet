import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, Platform } from 'ionic-angular';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class CommonProvider {

  loading: any;
  spinnerLoading: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public plt: Platform,
    public loadingCtrl: LoadingController,
  )
  {
  }

  sumAll(arr, prop)
  {
      return arr.reduce((a, b) => parseInt(a) + parseInt((b[prop] || 0)), 0);
  }

  startSpinner()
  {
    this.spinnerLoading = true;
  }

  stopSpinner()
  {
    this.spinnerLoading = false;
  }

  checkSpinner()
  {
    return this.spinnerLoading;
  }

  //clean all special characters and spaces
  cleanChar(str)
  {
    return str.replace(/[^A-Z0-9]/ig, "");
  }

  //check the phone number is valid
  validatePhone(str)
  {
    if(str !== undefined)
    {
      str = this.cleanChar(str);
      let needle = parseInt(str.substr(0,3));
      let len = str.length;

      if((len == 10 || len == 11) && (needle >= 10 && needle <= 20))
      {
        //valid phone number
        return true;
      }
      else
      {
        //invalid phone number
        return false;
      }
    }
    else
    {
      return false;
    }
  }

  startLoading()
  {
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  stopLoading()
  {
    this.loading.dismiss().catch(() => {});
  }

  WSNumber(number, text)
  {
    let param = "https://api.whatsapp.com/send?phone=6" + number + "&text=" + text;
    window.open(param);
  }

  isDevice()
  {
    if(this.plt.is('cordova'))
    {
      //supports cordova, real device
      return true;
    }
    else
    {
      //not supports cordova, web version
      return false;
    }
  }

  showToast(text)
  {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }
}
