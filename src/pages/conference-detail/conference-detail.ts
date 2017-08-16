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

    element: any;
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
                public http: Http,) {
        super(NavCtrl, navParams, events, http);
        //console.log("now in conference detail");
        //console.log(navParams);
        this.thematic = [];
        if (navParams.data.element)
            this.element = navParams.data.element;
        else if (navParams.data.res) this.element = navParams.data.res;
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
        this.thematicConferenceSql.getThematicOfConference(this.element.id).then(
            res => {
                if (res) {
                    //console.log("res in thematicConference page=", res);
                    this.thematic = <any>res;


                }
            }
        );

    }


    /**
     * add event to MyForum on the site and the mobile app
     * @param id
     */


    async changeMyForum(element) {
        if (this.userId) {
            //   let participant = this.participantList.find(x => x.id == id);
            //element.my_forum_id = id.my_forum_id;
            // //console.log('was added =', element);
            if (element.my_forum_id > 0) {

                element.my_forum_id = await this.deleteFromMyForum(element.my_forum_id);
                this.events.publish('myforum:delete:conference', (element)
                );
            }
            else {
                element.my_forum_id = await this.addToMyForumSite(element.id);
                // ''this.participantApi
                this.events.publish('myforum:add:conference', element);


            }
        }
    }

    deleteFromMyForum(id) {
        if (this.userId) {
            this.sqlMyForum.delFromMyForum(id).then(res => {
                if (res) return null;
                else return -1;
            });
        }
    }

    async addToMyForumSite(id) {
        if (this.userId) {
            return await this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId);
        }
    }


}
