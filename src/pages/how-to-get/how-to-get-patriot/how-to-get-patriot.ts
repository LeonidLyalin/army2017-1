import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {BaseLangPageProvider} from "../../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";
import {HowToGetPatriotByCarPage} from "./how-to-get-patriot-by-car/how-to-get-patriot-by-car";
import {HowToGetPatriotByTransportPage} from "./how-to-get-patriot-by-transport/how-to-get-patriot-by-transport";
import {HowToGetPatriotByTransportKievPage} from "./how-to-get-patriot-by-transport-kiev/how-to-get-patriot-by-transport-kiev";

/**
 * Generated class for the HowToGetPatriotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-how-to-get-patriot',
    templateUrl: 'how-to-get-patriot.html',
})
export class HowToGetPatriotPage extends BaseLangPageProvider {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl, events, http)
    }

    ionViewDidLoad() {
        super.ionViewDidLoad();
        //console.log('ionViewDidLoad HowToGetPage');
    }

    setRussianStrings(){
        super.setRussianStrings('КАК ДОБРАТЬСЯ ДО КВЦ ПАТРИОТ И ПОЛИГОНА АЛАБИНО');

    }
    setEnglishStrings(){
        super.setEnglishStrings('How to get to');
    }


    byCar(){
        this.navCtrl.push(HowToGetPatriotByCarPage);
    }
    byTransport(){
        this.navCtrl.push(HowToGetPatriotByTransportPage);
    }

    byTransportKiev(){
        this.navCtrl.push(HowToGetPatriotByTransportKievPage);
    }
}

