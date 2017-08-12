import {Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {BaseListPageProvider} from "../../../providers/base-list-page/base-list-page";
import {Http} from "@angular/http";
import {PlaceSql} from "../../../providers/place-sql/place-sql";
import {map, MapSql} from "../../../providers/map-sql/map-sql";
import {LeafletMapPage} from "../../leaflet-map/leaflet-map";
import {BaseLangPageProvider} from "../../../providers/base-lang-page/base-lang-page";


/**
 * Generated class for the WarTacticPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


/**
 * Generated class for the AboutForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-war-tactic-page',
    templateUrl: 'war-tactic-page.html',
})
export class WarTacticPage extends BaseLangPageProvider {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public events: Events,
                public http: Http) {
        super(navCtrl,  events, http)
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

       showLeafLetPlaceOnMap(name_rus, typeOfMap) {
      //  //console.log("item=", item);
        let placeSql = new PlaceSql(this.http);
        let mapSql = new MapSql(this.http);


        placeSql.selectWhere('name_rus=' + name_rus).then(res => {
            //console.log('showLeafLetMap res=', res);
            let place = (<any[]>res);
            mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(res => {
                //console.log("res=", res);
                let map = <map[]>res;
                this.navCtrl.push(LeafletMapPage, {
                    typeOfMap: typeOfMap,
                    popupElement: res,
                    place: place,
                    map: map
                });
            });
        });
    }

}



[{"name":"id","type":"text PRIMARY KEY"},{"name":"name_rus","type": "text"},{"name":"name_rus_upper","type": "text"},{"name":"name_eng","type": "text"},
    {"name":"image","type": "text"},{"name":"image_file","type": "text"},{"name":"place","type": "text"},{"name":"marker","type": "text"},{"name":"popup","type": "text"},
    {"name":"tooltip","type": "text"},{"name":"desc_rus","type": "text"},{"name":"desc_eng","type": "text"}]
