import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {BaseLangPageProvider} from "../../../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";
import {BaseListPageProvider} from "../../../../providers/base-list-page/base-list-page";

/**
 * Generated class for the HowToGetPatriotByCarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-how-to-get-patriot-by-car',
  templateUrl: 'how-to-get-patriot-by-car.html',
})
export class HowToGetPatriotByCarPage extends BaseListPageProvider {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl,navParams, events, http)
    }

    ionViewDidLoad() {
        super.ionViewDidLoad();
        //console.log('ionViewDidLoad HowToGetPage');
    }

    setRussianStrings(){
        super.setRussianStrings('Как добраться на машине');

    }
    setEnglishStrings(){
        super.setEnglishStrings('How to get by car');
    }

}
