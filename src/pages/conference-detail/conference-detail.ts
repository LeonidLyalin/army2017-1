import {Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {ThematicConferenceSql} from "../../providers/thematic-conference-sql/thematic-conference-sql";
import {MyForumSql} from "../../providers/my-forum-sql";
import {ConferenceSql} from "../../providers/conference-sql/conference-sql";
import {Http} from "@angular/http";
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";


@Component({
    selector: 'page-conference-detail',
    templateUrl: 'conference-detail.html'
})
export class ConferenceDetailPage extends BaseListPageProvider {

    conferenceSingle: any;
    thematic: any;
    myForum: any;

    //


    //interface strings
    title: string;
    onMapStr: string;
    myForumStr: string;
    thematicStr: string;

    constructor(public NavCtrl: NavController,
                public navParams: NavParams,
                public thematicConferenceSql: ThematicConferenceSql,
                public conferenceDetailSql: ConferenceSql,
                public sqlMyForum: MyForumSql,
                public events: Events,
                public http: Http,
                ) {
        super(NavCtrl, navParams, events, http);
        console.log("now in conference detail");
        console.log(navParams);
        this.thematic = [];
        if (navParams.data.conferenceSingle)
            this.conferenceSingle = navParams.data.conferenceSingle;
        else if (navParams.data.res) this.conferenceSingle = navParams.data.res;
        this.iblockId = 14;


    }

    setRussianStrings() {
        super.setRussianStrings('Мероприятие');

        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:'
    }

    setEnglishStrings() {
        super.setEnglishStrings('Event');
        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:'
    }


    ionViewDidLoad() {
        super.ionViewDidLoad();
        // this.userId = localStorage.getItem('userid');
        this.thematicConferenceSql.getThematicOfConference(this.conferenceSingle.id).then(
            res => {
                if (res) {
                    console.log("res in thematicConference page=", res);
                    this.thematic = <any>res;

                    /*  this.conferenceDetailSql.getFieldFromTable(this.conferenceSingle.id, 'id', 'myforum').then(
                        //getMyForumForId(this.conferenceSingle.id).then(
                        rs => {
                          if (rs) {
                            console.log("res in conferenceSingle myForumitem", rs);
                            this.myForum = <any>rs;
                          }
            
                        }
                      );*/
                }
            }
        );

    }

    /**
     * delete event of the conference from MyForum
     * @param id
     */
    deleteFromMyForum(id) {
        this.sqlMyForum.delFromMyForum(id);
    }

    /**
     * add event to MyForum on the site and the mobile app
     * @param id
     */
    addToMyForumSite(id) {
        this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId)
    }

    /*    showLeafLetMap(item, typeOfMap) {
            console.log("item=", item);


            this.placeSql.selectWhere('id=' + item.place).then(res => {
                console.log('showLeafLetMap res=', res);
                let place = (<any[]>res);
                this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(res => {
                    console.log("res=", res);
                    let map = <map[]>res;
                    this.navCtrl.push(LeafletMapPage, {
                        typeOfMap: typeOfMap,
                        popupElement: item,
                        place: place,
                        map: map
                    });
                });
            });
        }*/

}
