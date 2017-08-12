import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {BaseListPageProvider} from "../../../providers/base-list-page/base-list-page";

/**
 * Generated class for the HowToGetRoutesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-how-to-get-routes',
  templateUrl: 'how-to-get-routes.html',
})
export class HowToGetRoutesPage extends BaseListPageProvider {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl, navParams, events, http)
    }

    ionViewDidLoad() {
        super.ionViewDidLoad();
        //console.log('ionViewDidLoad HowToGetPage');
    }

    setRussianStrings() {
        super.setRussianStrings('Маршруты');

    }

    setEnglishStrings() {
        super.setEnglishStrings('Routes');
    }
}


