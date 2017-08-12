import {Component} from '@angular/core';

import {Events, NavController, NavParams} from 'ionic-angular';
import {ThematicSql} from "../../providers/thematic-sql";
import {MyForumSql} from "../../providers/my-forum-sql";
import {Http} from "@angular/http";


import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";
import {place, PlaceSql} from "../../providers/place-sql/place-sql";
import {map, MapSql} from "../../providers/map-sql/map-sql";
import {LeafletMapPage} from "../leaflet-map/leaflet-map";


@Component({
    selector: 'page-participant-detail',
    templateUrl: 'participant-detail.html'

})
export class ParticipantDetailPage extends BaseLangPageProvider {

    participantList: any;
    // participant: any;
    thematic: any;
    // myForum: any;

    //   showMap: boolean;

    iblockId: any;
    //interface strings
    title: string;
    onMapStr: string;
    myForumStr: string;
    thematicStr: string;
    listOut: any;

    constructor(public navParams: NavParams,
                public navCtrl: NavController,
                public thematicSql: ThematicSql,
                public sqlMyForum: MyForumSql,
                public placeSql: PlaceSql,
                public mapSql: MapSql,
                public events: Events,
                http: Http) {
        super(navCtrl, events, http);
        //this.lang = localStorage.getItem('lang');
        //console.log("now in Participant detail");
        //console.log(navParams);
        this.thematic = [];
        /* if (this.navParams.data.map) this.showMap = this.navParams.data.map;
         else this.showMap = true;*/

        if (navParams.data.participant) {
            if (navParams.data.participant.length)
            //  this.participant = navParams.data.participant[0];
                this.participantList = navParams.data.participant
            //else this.participant = navParams.data.participant;
            else this.participantList.push(navParams.data.participant);
        }
        else {
            //   if (navParams.data.res) this.participant = navParams.data.res;
            if (navParams.data.res) this.participantList.push(navParams.data.res);
        }


        if (navParams.data.listOut) {
            this.listOut = navParams.data.listOut;
        }
        this.changeName();

        this.prepareParticipant();
        // if (this.showMap) this.showMap =
        //console.log('this.participant=', this.participantList[0]);


        this.iblockId = 1;




    }

    async prepareParticipant() {
        for (let participant of this.participantList) {
            participant["thematic"] = [];
            if (this.navParams.data.map != null)
                participant["showMap"] = this.navParams.data.map;
            else participant["showMap"] = true;
            participant["showMap"] = !!this.participantList[0].place_name;
            let res = await       this.thematicSql.getThematicOfParticipant(participant.id)
            //console.log("res in thematic page=", res);
            participant["thematic"] = res;
            //console.log("participant=", participant);
        }
    }

    setRussianStrings() {
        super.setRussianStrings('Участник');

        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:'
    }

    setEnglishStrings() {
        super.setEnglishStrings('Exhibitor');

        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:'
    }

    ionViewDidLoad() {
        super.ionViewDidLoad();
    }

    async changeMyForum(id) {
        if (this.userId) {
            let participant = this.participantList.find(x => x.id == id);
            //element.my_forum_id = id.my_forum_id;
            // //console.log('was added =', element);
            if (participant.my_forum_id > 0) {

                participant.my_forum_id = await this.deleteFromMyForum(id);
                this.events.publish('myforum:delete:participant', (id)
                );
            }
            else {
                participant.my_forum_id = await this.addToMyForumSite(id);
                // ''this.participantApi
                this.events.publish('myforum:add:participant', ({id: id, my_forum_id: participant.my_forum_id})
                );



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


    async changeName() {
        // for (let i = 0; i < this.listOut.length; i++) {

        for (let participant of  this.participantList) {
            participant.name = participant.name.replace(/&quot;/g, '"');
            participant.desc = participant.desc.replace(/&quot;/g, '"');
            participant.desc = participant.desc.replace(/\\r\\n/g, '');
            //console.log("this.listOut[i]=", participant);
            //console.log("this.listOut[i].name=", participant.name);
            //console.log("this.listOut[i].place=", participant.place);


            //console.log(participant.place);

            if (participant.place && participant.place.includes(',')) {
                let placeStr = '';

                let listPlaces = participant.place.split(',');
                for (let m = 0; m < listPlaces.length; m++) {

                    let res = await this.placeSql.selectWhere('id=' + listPlaces[m]);
                    if (res) {
                        //console.log("res=", res);
                        placeStr += (placeStr == '' ? '' : ', ') + (this.lang == 'ru' ? res[0].name_rus : res[0].name_eng);
                        //console.log(listPlaces[m]);
                        participant.place_name_place = placeStr;
                        participant.place_name = placeStr;
                    }
                }
                if ((participant["showMap"]) && (this.participantList.length==1)) participant["showMap"] = !!participant.place_name;

            }
        }

    }

    showLeafLetMap1(participant) {
        //console.log("participant=", participant);


        this.placeSql.selectWhere('id=' + participant.place).then(res => {
            //console.log('showLeafLetMap res=', res);
            let place: place[] = (<place[]>res);
            this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(res => {
                //console.log("res=", res);
                let map = <map[]>res;
                this.navCtrl.push(LeafletMapPage, {
                    typeOfMap: 'participantDetail',
                    popupElement: participant,
                    place: place,
                    map: map
                });
            });
        });
    }


}
