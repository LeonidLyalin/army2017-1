import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Events, NavController} from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { TabsPage } from '../tabs/tabs';
import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage extends BaseLangPageProvider{
  signup: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController,
              public userData: UserData,
              public events:Events,
              public http:Http
              ) {
    super(navCtrl,events,http)
  }

  setRussianStrings(){
    super.setRussianStrings('Регистрация');
  }

  setEnglishStrings(){
    super.setEnglishStrings('Signup');
  }
  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }
}
