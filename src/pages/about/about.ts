import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";
import {Http} from "@angular/http";


@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})

/*export class AboutPage extends BaseListPageProvider{

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl,navParams, events, http);
    }



    setRussianStrings(){
        super.setRussianStrings('О Форуме');

    }
    setEnglishStrings(){
        super.setEnglishStrings('About Forum');
    }





}*/
export class AboutPage extends BaseListPageProvider {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl,navParams, events, http);
    }


    ionViewDidLoad() {
        super.ionViewDidLoad();
    }

    setRussianStrings() {
        super.setRussianStrings('О Форуме');

    }

    setEnglishStrings() {
        super.setEnglishStrings('About Forum');
    }


}
