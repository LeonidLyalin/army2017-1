import {Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


import {MyForumSql} from "../../providers/my-forum-sql";
import {ParticipantDetailPage} from "../participant-detail/participant-detail";
import {ConferenceDetailPage} from "../conference-detail/conference-detail";
import {PlaceSql, place} from "../../providers/place-sql/place-sql";
import {LeafletMapPage} from "../leaflet-map/leaflet-map";
import {map, MapSql} from "../../providers/map-sql/map-sql";
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";
import {ExhibitDetailPage} from "../exhibit-detail/exhibit-detail";
import {DemoProgramDetailPage} from "../demo-program-detail/demo-program-detail";

/**
 * Generated class for the MyForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-my-forum',
    templateUrl: 'my-forum.html',
})
export class MyForumPage extends BaseListPageProvider {

    public myForumParticipant: any;
    public myForumApi: any;

    public myForumConference: any;
    public myForumExhibit: any;
    public myForumDemoProgram: any;


    public forumSegment: string = 'conferenceItems';


    participantStr: string;
    conferenceStr: string;
    exhibitStr: string;
    demoStr: string;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public http: Http,
                public sqlMyForum: MyForumSql,
                public placeSql: PlaceSql,
                public mapSql: MapSql,
                public events: Events,) {
        super(navCtrl, navParams, events, http);
        this.setEvents();


    }

    setEvents() {
        //for participants

        this.events.subscribe('myforum:add:participant', (id) => {
                //console.log('was added id =', id);
                
                let participant = this.myForumParticipant.find(x => x.id == id.id);
            participant.my_forum_id = id.my_forum_id;
                //console.log('was added =', participant);
            }
        );
        this.events.subscribe('myforum:delete:participan', (id) => {
                //console.log('was deleted id=', id);
                let participant = this.myForumParticipant.find(x => x.id == id);
            participant.my_forum_id = null;
                //console.log('was deleted =', participant);
                if (this.lang == 'ru') this.selectParticipantRus();
                else this.selectParticipantEng();
            }
        );

        //for exhibit
        this.events.subscribe('myforum:add:exhibit', (id) => {
                //console.log('was added id =', id);
                let exhibit = this.myForumExhibit.find(x => x.id == id.id);
                exhibit.my_forum_id = id.my_forum_id;
                //console.log('was added =', exhibit);
                if (this.lang == 'ru') this.selectExhibitRus();
                else this.selectExhibitEng();

            }
        );
        this.events.subscribe('myforum:delete:exhibit', (id) => {
                //console.log('was deleted id=', id);
                let exhibit = this.myForumExhibit.find(x => x.id == id);
                exhibit.my_forum_id = null;
                //console.log('was deleted =', exhibit);
                if (this.lang == 'ru') this.selectExhibitRus();
                else this.selectExhibitEng();
            }
        );

//for DemoProgram
        this.events.subscribe('myforum:add:demo', (id) => {
                //console.log('was added id =', id);
                let demo = this.myForumDemoProgram.find(x => x.id == id.id);
                demo.my_forum_id = id.my_forum_id;
                //console.log('was added =', demo);
                if (this.lang == 'ru') this.selectDemoProgramRus();
                else this.selectDemoProgramEng();
            }
        );
        this.events.subscribe('myforum:delete:demo', (id) => {
                //console.log('was deleted id=', id);
                let demo = this.myForumDemoProgram.find(x => x.id == id);
                demo.my_forum_id = null;
                //console.log('was deleted =', demo);
                if (this.lang == 'ru') this.selectDemoProgramRus();
                else this.selectDemoProgramEng();
            }
        );
        //
        this.events.subscribe('myforum:add:conference', (id) => {
                //console.log('was added id =', id);
                let conferenceSingle = this.myForumConference.find(x => x.id == id.id);
                conferenceSingle.my_forum_id = id.my_forum_id;
                //console.log('was added =', conferenceSingle);
            }
        );
        this.events.subscribe('myforum:delete:conference', (id) => {
                //console.log('was deleted id=', id);
                let conferenceSingle = this.myForumConference.find(x => x.id == id);
                conferenceSingle.my_forum_id = null;
                //console.log('was deleted =', conferenceSingle);
            }
        );
    }

    setRussianStrings() {
        super.setRussianStrings('Мой форум');

        this.participantStr = 'Участники';
        this.conferenceStr = 'Конференция';
        this.exhibitStr = 'Экспонаты МO';
        this.demoStr = 'Шоу программа';


    }

    setEnglishStrings() {
        this.titleStr = 'My Forum';
        this.participantStr = 'Exhibitors';
        this.conferenceStr = 'Conference';
        this.exhibitStr = 'Exhibits of MoD';
        this.demoStr = 'Show program';

    }

    getApi() {
        //get My Forum for the User
        if (!this.userId) alert("Незарегистрированный пользователь");
        //console.log('run promise for myForumParticipant. run!');
        this.http.get('http://army2017.ru/api/my_forum/my_forum_list.php?USER=' + this.userId + '&LOWERCASE=1').map(res => res.json()).subscribe(data => {
            this.myForumApi = data;
            //console.log(this.myForumApi);
            //console.log('delete all');
            this.sqlMyForum.delAll();
            //console.log('insert new elements for myforum');
            this.sqlMyForum.addItemList(this.myForumApi);
            if (this.lang == 'ru') {
                this.selectParticipantRus();
                this.selectConferenceRus();
                this.selectExhibitRus();
                this.selectDemoProgramRus();
            }
            else {
                this.selectParticipantEng();
                this.selectConferenceEng();
                this.selectExhibitEng();
                this.selectDemoProgramEng();
            }


        });

    }

    ionViewDidLoad() {

        super.ionViewDidLoad();
        this.getApi();


    }

    ionViewWillEnter() {
        //  this.refreshMyForum();
    }

    refreshMyForum() {
        //console.log("refreshMyForum");
        this.getApi();


    }

    selectParticipantRus() {
        //console.log('selectParticipantRus');
        this.sqlMyForum.getRusParticipantMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumParticipant = res;
        })

    }


    selectParticipantEng() {
        //console.log('selectParticipantEng');
        this.sqlMyForum.getEngParticipantMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumParticipant = res;
        })

    }


    selectExhibitRus() {
        //console.log('selectParticipantRus');
        this.sqlMyForum.getRusExhibitMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumExhibit = res;
        })

    }


    selectExhibitEng() {
        //console.log('selectParticipantEng');
        this.sqlMyForum.getEngExhibitMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumExhibit = res;
        })

    }

    selectConferenceRus() {
        //console.log('selectConferenceRus');
        this.sqlMyForum.getRusConferenceMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumConference = res;
        })

    }


    selectConferenceEng() {
        //console.log('selectConferenceEng');
        this.sqlMyForum.getEngConferenceMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumConference = res;
        })

    }

    selectDemoProgramRus() {
        //console.log('selectConferenceRus');
        this.sqlMyForum.getRusDemoProgramMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumDemoProgram = res;
        })

    }


    selectDemoProgramEng() {
        //console.log('selectConferenceEng');
        this.sqlMyForum.getEngDemoProgramMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumDemoProgram = res;
        })

    }

    changeForumSegment(itemSegment) {
        //console.log(itemSegment);
        this.forumSegment = itemSegment;

    }

    /*
      selectItems() {
        ////////console.log("this.myForumParticipant");
        // this.myForumParticipant=this.sqlMyForum.getRows2();

        ////////console.log(this.myForumParticipant);
        this.sqlMyForum.select().then(res => {
          //console.log('our select');
          //console.log(res);
          this.myForumParticipant = res;
        })
      }
    */

    goToParticipantDetail(participant) {
        //console.log("goToParticipantDetail()");
        //console.log(participant);
        // go to the session detail page
        // and pass in the session data
        /* this.navCtrl.push(ParticipantDetailPage, {
             participant
         });*/
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipantFull('where a.id=' + participant.id).then(res => {
                let participant = <any>res;
                //console.log("participantDetail=", participant);
                this.navCtrl.push(ParticipantDetailPage, {
                    participant: participant,
                    listOut: this.myForumParticipant
                }).then(res => {
                    //console.log("i return from page", res);
                });
            });
        } else
            this.sqlMyForum.getEngParticipantFull('where a.id=' + participant.id).then(res => {
                let participant = <any>res;
                this.navCtrl.push(ParticipantDetailPage, {
                    participant: participant,
                    listOut: this.myForumParticipant
                }).then(res => {
                        //console.log("i return from page", res);

                    }
                );
            });
    }

    /*  delFromMyForum(id) {
        this.sqlMyForum.delFromMyForum(id).then(res => {
          if (res) this.refreshMyForum();
        });
      }*/


    goToConferenceDetail(conferenceSingle) {
        //console.log("goToParticipantDetail()");
        //console.log(conferenceSingle);
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(ConferenceDetailPage, {
            conferenceSingle
        });
    }

    showMapMyForum() {
        if (this.forumSegment == 'conferenceItems') {

            this.placeSql.select().then(res => {
                let place: place[] = (<place[]>res);
                this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(res => {
                    //console.log("res=", res);
                    let map = <map[]>res;
                    this.navCtrl.push(LeafletMapPage, {
                        typeOfMap: 'conference',
                        popupElement: this.myForumConference,
                        place: place,
                        map: map
                    });
                });
            });
        }
        if (this.forumSegment == 'participantItems') {

            this.placeSql.select().then(res => {
                let place: place[] = (<place[]>res);
                this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(res => {
                    //console.log("res=", res);
                    let map = <map[]>res;
                    this.navCtrl.push(LeafletMapPage, {
                        typeOfMap: 'participant',
                        popupElement: this.myForumParticipant,
                        place: place,
                        map: map
                    });
                });
            });
        }
    }


    /**
     *
     * @param exhibitSingle
     */
    goToExhibitDetail(elementSingle) {
        //console.log("goToExhibitDetail()");
        //console.log(elementSingle);
        // go to the session detail page
        // and pass in the session data
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusExhibitFull('where a.id=' + elementSingle.id).then(res => {
                let element = <any>res;
                //console.log("participantDetail=", element);
                this.navCtrl.push(ExhibitDetailPage, {
                    element
                });
            });
        } else
            this.sqlMyForum.getEngExhibitFull('where a.id=' + elementSingle.id).then(res => {
                let element = <any>res;
                this.navCtrl.push(ExhibitDetailPage, {element});
            });
    }


    goToDemoProgramDetail(element) {
        //console.log("goToParticipantDetail()");
        //console.log(element);
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(DemoProgramDetailPage, {
            element
        });
    }

}

