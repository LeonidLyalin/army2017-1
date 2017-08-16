/**
 * Created by lsl-info on 14.04.17.
 * list of participants
 */
import {Component} from '@angular/core';
import {Events, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http} from '@angular/http';

import {participant} from "../../providers/participant-sql";
import {MyForumSql} from "../../providers/my-forum-sql";
import {ParticipantDetailPage} from "../participant-detail/participant-detail";


import {FilterParticipantProvider} from "../../providers/filter-provider/filter-participant-provider";
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";
import {PlaceSql} from "../../providers/place-sql/place-sql";
import {ParticipantApi} from "../../providers/participant/participant-api.service";


@Component({
    selector: 'page-participant',
    templateUrl: 'participant.html',
    providers: [FilterParticipantProvider],
})

export class ParticipantPage extends BaseListPageProvider {


    constructor(public navCtrl: NavController,
                public http: Http,
                public participantApi: ParticipantApi,
                public sqlMyForum: MyForumSql,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public filterProvider: FilterParticipantProvider,
                public events: Events,
                public placeSql: PlaceSql) {
//подгружаем список участников выставки
        super(navCtrl, navParams, events, http);//, placeSql, mapSql);
        events.subscribe('myforum:add:participant', (participant) => {
                //console.log('was added id =', );
                let element = this.listOut.find(x => Number(x.id) == Number(participant.id));
                element.my_forum_id = participant.my_forum_id;
                //console.log('was added =', element);
            }
        );
        events.subscribe('myforum:delete:participant', (id) => {
                //console.log('was deleted id=', id);
                let element = this.listOut.find(x => Number(x.id) == Number(id.id));
                element.my_forum_id = null;
                //console.log('was deleted =', element);
            }
        );
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        let param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematic') {
            let toast = this.toastCtrl.create({
                message: this.loadStr,
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            this.listOut = navParams.data.data;
        }
        this.iblockId = 1;//for my_forum


    }

    setRussianStrings() {
        super.setRussianStrings('Участники');
    }

    setEnglishStrings() {
        super.setEnglishStrings('Exhibitors');
    }


    ionViewDidLoad() {
        super.ionViewDidLoad();
        //console.log('ionViewDidLoad MyForumPage');
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        let param = this.navParams.get('select');
        if (param == 'thematic') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data.data;
        }
       /* else {
            //console.log("this.selectParticipantAll()");
            let toast = this.toastCtrl.create({
                message: this.loadStr,
                duration: 2000
            });
            toast.present();
            this.selectParticipantAll()
        }*/

    }




    /**
     * Show the detail view of the Participant
     * @param participant - record in the json format for current Participant element
     */
    goToParticipantDetail(participant) {
        //console.log("goToParticipantDetail()");
        //console.log(participant);
        // go to the session detail page
        // and pass in the session data
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipantFull('where a.id=' + participant.id).then(res => {
                let participant = <any>res;
                //console.log("participantDetail=", participant);
                this.navCtrl.push(ParticipantDetailPage, {
                    participant: participant,
                    listOut: this.listOut
                }).then(res => {
                    //console.log("i return from page", res);
                });
            });
        } else
            this.sqlMyForum.getEngParticipantFull('where a.id=' + participant.id).then(res => {
                let participant = <any>res;
                this.navCtrl.push(ParticipantDetailPage, {
                    participant: participant,
                    listOut: this.listOut
                }).then(res => {
                        //console.log("i return from page", res);

                    }
                );
            });

    }


    async changeName() {
        for (let i = 0; i < this.listOut.length; i++) {
            this.listOut[i].name = this.listOut[i].name.replace(/&quot;/g, '"');
            //console.log("this.listOut[i]=", this.listOut[i]);
            //console.log("this.listOut[i].name=", this.listOut[i].name);
            //console.log("this.listOut[i].place=", this.listOut[i].place);


            //console.log(this.listOut[i].place);

            if (this.listOut[i].place && this.listOut[i].place.includes(',')) {
                let placeStr = '';

                let listPlaces = this.listOut[i].place.split(',');
                for (let m = 0; m < listPlaces.length; m++) {

                    let res = await this.placeSql.selectWhere('id=' + listPlaces[m]);
                    if (res) {
                        //console.log("res=", res);
                        placeStr += (placeStr == '' ? '' : ', ') + (this.lang == 'ru' ? res[0].name_rus : res[0].name_eng);
                        //console.log(listPlaces[m]);
                        this.listOut[i].place_name_place = placeStr;
                        this.listOut[i].place_name = placeStr;
                    }
                }

            }


        }
    }

    selectParticipantAll() {
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipant().then(res => {
                //console.log('this.sqlMyForum.getRusParticipant().then( res=', res);
                //console.log('(<participant[]>res).length=', (<participant[]>res).length);
                this.listOut = res;
                this.changeName();

            })
        }
        else {
            this.sqlMyForum.getEngParticipant().then(res => {
                //console.log('this.sqlMyForum.getEngParticipant().then( res=', res);
                //console.log('(<participant[]>res).length=', (<participant[]>res).length);
                this.listOut = res;
                this.changeName();

            })
        }
    }


    deleteFromMyForum(id) {
        this.sqlMyForum.delFromMyForum(id).then(res => {
                //  this.selectParticipantAll();
                this.getListOut();
                this.changeName();
            }
        );
    }

    addToMyForumSite(id) {
        this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId, this.listOut).then(res => {
            }
        );
    }


    getListOut() {
        this.filterStr = this.filterProvider.filterStr;
        //console.log("this.filterStr", this.filterStr);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipant(this.filterStr).then(res => {
                //console.log('our select');
                //console.log(res);
                this.listOut = res;
                this.changeName();

            });
        }
        else {
            this.sqlMyForum.getEngParticipant(this.filterStr).then(res => {
                //console.log('our select');
                //console.log(res);
                this.listOut = res;
                this.changeName();

            });
        }
    }

    setFilterStrParticipant() {

        this.getListOut();
        this.showHideFilter();
    }

    cancelFilterStrParticipant() {
        this.filterProvider.cancelFilter();

        this.getListOut();
        this.showHideFilter();
    }

}
