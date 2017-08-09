import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {BaseListPageProvider} from "../../../../providers/base-list-page/base-list-page";
import {Http} from "@angular/http";

/**
 * Generated class for the HowToGetPatriotByTransportKievPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-how-to-get-patriot-by-transport-kiev',
  templateUrl: 'how-to-get-patriot-by-transport-kiev.html',
})
export class HowToGetPatriotByTransportKievPage extends BaseListPageProvider {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl,navParams, events, http)
    }

    ionViewDidLoad() {
        super.ionViewDidLoad();
        console.log('ionViewDidLoad HowToGetPage');
    }

    setRussianStrings(){
        super.setRussianStrings('На транспорте');

    }
    setEnglishStrings(){
        super.setEnglishStrings('By train and by bus');
    }

}

