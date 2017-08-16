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

        this.events.subscribe('myforum:add:participant', (element) => {
                //console.log('was added element =', element);
                this.myForumParticipant.push(element);
                /*  if (this.lang == 'ru') this.selectParticipantRus();
                  else this.selectParticipantEng();*/
            }
        );
        this.events.subscribe('myforum:delete:participant', (participant) => {


                this.myForumParticipant = this.myForumParticipant.filter(obj => Number(obj.id) !== Number(participant.id));
            }
        );

        //for exhibit
        this.events.subscribe('myforum:add:exhibit', (element) => {
                //console.log('was added element =', element);
                this.myForumExhibit.push(element);
            }
        );
        this.events.subscribe('myforum:delete:exhibit', (id) => {
                this.myForumExhibit = this.myForumExhibit.filter(obj => Number(obj.id) !== Number(id.id));
            }
        );

//for DemoProgram
        this.events.subscribe('myforum:add:demo', (element) => {
                //console.log('was added element =', element);
                this.myForumDemoProgram.push(element);
            }
        );
        this.events.subscribe('myforum:delete:demo', (id) => {
                this.myForumDemoProgram = this.myForumDemoProgram.filter(obj => Number(obj.id) !== Number(id.id));
            }
        );
        //for conference
        this.events.subscribe('myforum:add:conference', (element) => {
                //console.log('was added element =', element);
                this.myForumConference.push(element);
            }
        );
        this.events.subscribe('myforum:delete:conference', (id) => {
                this.myForumConference = this.myForumConference.filter(obj => Number(obj.id) !== Number(id.id));
            }
        );
    }

    setRussianStrings() {
        super.setRussianStrings('Мой форум');

        this.participantStr = 'Участники';
        this.conferenceStr = 'Конференция';
        this.exhibitStr = 'Экспонаты МO';
        this.demoStr = 'Программа';


    }

    setEnglishStrings() {
        this.titleStr = 'My Forum';
        this.participantStr = 'Exhibitors';
        this.conferenceStr = 'Conference';
        this.exhibitStr = 'Exhibits of MoD';
        this.demoStr = 'Program';

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
            this.selectAllList();


        });

    }

    selectAllList() {
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
        this.myForumParticipant = [];
        this.sqlMyForum.getRusParticipantMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumParticipant = res;
            this.changeNameParticipant();
        })

    }


    selectParticipantEng() {
        //console.log('selectParticipantEng');
        this.myForumParticipant = [];
        this.sqlMyForum.getEngParticipantMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumParticipant = res;
            this.changeNameParticipant();
        })

    }


    selectExhibitRus() {
        //console.log('selectParticipantRus');
        this.myForumExhibit = [];
        this.sqlMyForum.getRusExhibitMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumExhibit = res;
        })

    }


    selectExhibitEng() {
        //console.log('selectParticipantEng');
        this.myForumExhibit = [];
        this.sqlMyForum.getEngExhibitMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumExhibit = res;
        })

    }

    selectConferenceRus() {
        //console.log('selectConferenceRus');
        this.myForumConference = [];
        this.sqlMyForum.getRusConferenceMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumConference = res;
        })

    }


    selectConferenceEng() {
        //console.log('selectConferenceEng');
        this.myForumConference = [];
        this.sqlMyForum.getEngConferenceMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumConference = res;
        })

    }

    selectDemoProgramRus() {
        //console.log('selectConferenceRus');
        this.myForumDemoProgram = [];
        this.sqlMyForum.getRusDemoProgramMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumDemoProgram = res;
            this.changeNameDepoProgram();
        })

    }


    selectDemoProgramEng() {
        //console.log('selectConferenceEng');
        this.myForumDemoProgram = [];
        this.sqlMyForum.getEngDemoProgramMyForum(this.userId).then(res => {
            //console.log('our select');
            //console.log(res);
            this.myForumDemoProgram = res;
            this.changeNameDepoProgram();
        })

    }

    changeForumSegment(itemSegment) {
        //console.log(itemSegment);
        this.forumSegment = itemSegment;

    }

    /*
      selectItems() {
        //////////console.log("this.myForumParticipant");
        // this.myForumParticipant=this.sqlMyForum.getRows2();

        //////////console.log(this.myForumParticipant);
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
            element: conferenceSingle
        });
    }

    showMapMyForum() {
        if (this.forumSegment == 'conferenceItems') {
            if (this.myForumConference.length > 0) {

                this.placeSql.selectWhere(' where id=' + this.myForumConference[0].place).then(res => {
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
        }

        if (this.forumSegment == 'participantItems') {
            if (this.myForumParticipant.length > 0) {
                let place = this.myForumParticipant.filter(obj => (obj.place&&(!obj.place.includes(','))));
                if (place) {
                    this.placeSql.selectWhere(' where id=' + place[0].place).then(res => {
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
        }
        if (this.forumSegment == 'demoProgramItems') {
            if (this.myForumDemoProgram.length > 0) {
                this.placeSql.selectWhere(' where id=' + this.myForumDemoProgram[0].place).then(res => {
                    let place: place[] = (<place[]>res);
                    this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(res => {
                        //console.log("res=", res);
                        let map = <map[]>res;
                        this.navCtrl.push(LeafletMapPage, {
                            typeOfMap: 'conference',
                            popupElement: this.myForumDemoProgram,
                            place: place,
                            map: map
                        });
                    });
                });
            }
        }
        if (this.forumSegment == 'exhibitItems') {
            if (this.myForumExhibit.length > 0) {
                this.placeSql.selectWhere(' where id=' + this.myForumExhibit[0].place).then(res => {
                    let place: place[] = (<place[]>res);
                    this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(res => {
                        //console.log("res=", res);
                        let map = <map[]>res;
                        this.navCtrl.push(LeafletMapPage, {
                            typeOfMap: 'exhibit',
                            popupElement: this.myForumExhibit,
                            place: place,
                            map: map
                        });
                    });
                });
            }

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

    changeNameDepoProgram() {
        this.myForumDemoProgram.forEach(element => {
            //element.name.replace('&quot;','"');
            let name = element.name.split('::');
            if (name[0]) element["name_first"] = name[0].replace(/&quot;/g, '"');
            else (element["name_first"] = element.name);
            if (name[1]) element["name_second"] = name[1].replace(/&quot;/g, '"');

        });
    }


    async changeNameParticipant() {
        for (let i = 0; i < this.myForumParticipant.length; i++) {
            this.myForumParticipant[i].name = this.myForumParticipant[i].name.replace(/&quot;/g, '"');
            //console.log("this.myForumParticipant[i]=", this.myForumParticipant[i]);
            //console.log("this.myForumParticipant[i].name=", this.myForumParticipant[i].name);
            //console.log("this.myForumParticipant[i].place=", this.myForumParticipant[i].place);


            //console.log(this.myForumParticipant[i].place);

            if (this.myForumParticipant[i].place && this.myForumParticipant[i].place.includes(',')) {
                let placeStr = '';

                let listPlaces = this.myForumParticipant[i].place.split(',');
                for (let m = 0; m < listPlaces.length; m++) {

                    let res = await this.placeSql.selectWhere('id=' + listPlaces[m]);
                    if (res) {
                        //console.log("res=", res);
                        placeStr += (placeStr == '' ? '' : ', ') + (this.lang == 'ru' ? res[0].name_rus : res[0].name_eng);
                        //console.log(listPlaces[m]);
                        this.myForumParticipant[i].place_name_place = placeStr;
                        this.myForumParticipant[i].place_name = placeStr;
                    }
                }

            }


        }
    }
}

