import {Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";
import {HowToGetPatriotPage} from "./how-to-get-patriot/how-to-get-patriot";
import {HowToGetRoutesPage} from "./how-to-get-routes/how-to-get-routes";

/**
 * Generated class for the HowToGetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-how-to-get',
    templateUrl: 'how-to-get.html',
})
export class HowToGetPage extends BaseLangPageProvider {

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
        super.setRussianStrings('Как добраться');

    }
    setEnglishStrings(){
        super.setEnglishStrings('How to get to');
    }

    getPatriotAndAlabino(){
        this.navCtrl.push(HowToGetPatriotPage);
    }

    getRoutesPage(){
        this.navCtrl.push(HowToGetRoutesPage);
    }

}
