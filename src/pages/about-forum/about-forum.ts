import {Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";
import {Http} from "@angular/http";

/**
 * Generated class for the AboutForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-about-forum',
    templateUrl: 'about-forum.html',
})
export class AboutForumPage extends BaseListPageProvider {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl, navParams, events, http)
    }

    ionViewDidLoad() {
        super.ionViewDidLoad();
        //console.log('ionViewDidLoad AboutForumPage');
    }

    setRussianStrings() {
        super.setRussianStrings('О Форуме');
    }

    setEnglishStrings() {
        super.setEnglishStrings('About Forum');
    }

}
