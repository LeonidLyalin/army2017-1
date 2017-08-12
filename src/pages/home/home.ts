import {Component, ViewChild} from '@angular/core';

import {
    Content, MenuController, NavController, Platform, Slides, LoadingController, Events,
    AlertController
} from 'ionic-angular';



import {ParticipantPage} from "../participant/participant";
import {ConferencePage} from "../conference/conference";
import {BaseApi} from "../../providers/base-api-service";
import {Http} from "@angular/http";
import {BaseSql} from "../../providers/base-sql";
import {TableActionSql} from "../../providers/table-action-sql/thematic-action-sql";
import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";

import {LeafletMapPage} from "../leaflet-map/leaflet-map";
import {BarScannerPage} from "../bar-scanner/bar-scanner";
import {ExhibitPage} from "../exhibit/exhibit";
import {DemoProgramPage} from "../demo-program/demo-program";
import {HowToGetPage} from "../how-to-get/how-to-get";
import {AboutForumPage} from "../about-forum/about-forum";

import {PatriotPage} from "../patriot/patriot";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends BaseLangPageProvider {
    showSkip = true;

    public iconHeight: number;
    public iconWidth: number;

    /**
     * number of times this page was loaded
     */
    public viewCount: number;
    public viewCountStr: string;
    // lang: string;
    private iconDivHeight: number = 10;//divider for the evaliation of the icon optimal size according to content width

    @ViewChild('slides') slides: Slides;
    @ViewChild(Content) content: Content;


    //interface strings
    //title: string;
    /*onMapStr: string;
    myForumStr: string;
    thematicStr: string;*/

    aboutForumStr: string;
    mapStr: string;
    participantsStr: string;
    conferenceStr: string;
    demoProgramStr: string;
    howDoYouGetStr: string;
    onTheForumStr: string;
    parkPatriotStr: string;
    answersAndQuestionsStr: string;
    entrancesExitsStr: string;
    restaurantsCafe: string;
    wcStr: string;
    infoStr: string;
    myForumStr: string;
    qrScannerStr: string;
    waitLoadStr: string;
    exhibitsMoDStr: string;

    constructor(public navCtrl: NavController,
                public menu: MenuController,
                public platform: Platform,
                public http: Http,
                public loadingCtrl: LoadingController,
                public events: Events,
                public alertCtrl: AlertController) {
        super(navCtrl, events, http);

    }

    setRussianStrings() {
        super.setRussianStrings('Армия 2017');
        //  this.title = 'Армия 2017';
        this.aboutForumStr = 'О Форуме';
        this.mapStr = 'Карта форума';
        this.participantsStr = 'Участники';
        this.exhibitsMoDStr = 'Экспонаты МО';
        this.conferenceStr = 'Конференция';
        this.demoProgramStr = 'Шоу программа';
        this.howDoYouGetStr = 'Как добраться';
        this.onTheForumStr = 'О Форуме "Армия-2017"';
        this.parkPatriotStr = 'Парк "Патриот"';
        this.answersAndQuestionsStr = 'Вопросы и ответы';
        this.entrancesExitsStr = 'Входы-выходы';
        this.restaurantsCafe = 'Рестораны/кафе';
        this.wcStr = 'Туалеты';
        this.infoStr = 'Справочная информация';
        this.myForumStr = 'Мой форум';
        this.qrScannerStr = 'QR сканнер';
        this.waitLoadStr = 'Загрузка...';
    }

    setEnglishStrings() {
        super.setEnglishStrings('Army 2017');
        //this.title = 'Army 2017';
        this.aboutForumStr = 'About';
        this.mapStr = 'Map';
        this.participantsStr = 'Exhibitors';
        this.exhibitsMoDStr = 'Exhibits of the Mod';
        this.conferenceStr = 'Conference';
        this.demoProgramStr = 'Demo program';
        this.howDoYouGetStr = 'How to get to';
        this.onTheForumStr = 'Forum "Army-2017"';
        this.parkPatriotStr = 'Park "Patriot"';
        this.answersAndQuestionsStr = 'Answers & Questions';
        this.entrancesExitsStr = 'Entrances & Exits';
        this.restaurantsCafe = 'Restaurant & Cafe';
        this.wcStr = 'WC';
        this.infoStr = 'Info';
        this.myForumStr = 'My Forum';
        this.qrScannerStr = 'QR scanner';
        this.waitLoadStr = 'Loading...';
    }

    onSlideChangeStart(slider: Slides) {
        this.showSkip = !slider.isEnd();
    }

    getDate() {
        let today = new Date();
        let dd = today.getDate();
        let ddStr: string;
        let mmStr: string;
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();

        if (dd < 10) {
            ddStr = '0' + String(dd)
        }
        else ddStr = String(dd);

        if (mm < 10) {
            mmStr = '0' + String(mm)
        }
        else mmStr = String(mm);

        return ddStr + '.' + mmStr + '.' + yyyy;
    }

    // objc[14286]: Class PLBuildVersion is implemented in both /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/System/Library/PrivateFrameworks/AssetsLibraryServices.framework/AssetsLibraryServices (0x1105cccc0) and /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/System/Library/PrivateFrameworks/PhotoLibraryServices.framework/PhotoLibraryServices (0x1103426f0). One of the two will be used. Which one is undefined.
    // [{"name": "id", "type": "text PRIMARY KEY"},{"name": "name_rus", "type": "text"},{"name": "name_eng", "type": "text"},{"name": "coords", "type": "text"},{"name": "number_on_map", "type": "text"},{"name": "name_map", "type": "text"},{"name": "goto", "type": "text"},{"name": "shape", "type": "text"}, {"name": "marker", "type": "text"}, {"name": "tooltip", "type": "text"},{"name": "popup", "type": "text"}]
//  [{"name":"id","type":"text PRIMARY KEY"},{"name":"map","type":"text"},{"name":"place_previous", "type":"text"},{"name":"name_map","type":"text"},{"name": "name_rus", "type": "text"}, {"name": "name_eng", "type": "text"}, {"name": "width", "type": "text"},{"name": "height", "type": "text"},{"name": "map_left", "type": "text"},{"name": "map_right", "type": "text"},{"name": "map_up", "type": "text"},{"name": "map_down", "type": "text"},{"name": "min_zoom", "type": "text"},{"name": "max_zoom", "type": "text"},{"name": "begin_zoom", "type": "text"}]

     loadBase() {
         let api = new BaseApi(this.http);
         // api.getApi('universal_list.php?IBLOCK=21').subscribe(data => {
         api.getApi('universal_list.php?IBLOCK=21').subscribe(data => {
                 //console.log("in home.ts after getApi=", data);

                 let tableAction = new TableActionSql(this.http);
                 for (let i = 0; i < data.length; i++) {

                     //console.log("data.id", data[i]["ID"]);
                     tableAction.checkForId(data[i]["ID"]).then(res => {
                         //console.log("tableAction.checkForId res=", res);
                         if (!res) {
                             // //console.log(
                             //console.log("data.status", data[i]["STATUS"]);
                             //console.log("data.fields", data[i]["FIELDS"]);
                             let fields = JSON.parse(data[i]["FIELDS"]);
                             //console.log("fields=", fields);
                             //console.log("fields.length=", fields.length);
                             //console.log("fields[1]", fields[1]);
                             if (!this.platform.is('core')) {
                                 let loader = this.loadingCtrl.create({
                                     content: this.waitLoadStr,
                                     duration: 30000,
                                 });
                                 loader.present().then(() => {
                                     if (data[i]["STATUS"] == 'recreate') {

                                         //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                                         //console.log('fields=', fields);
                                         //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                                         //console.log('constrains=', data[i]["CONSTRAINS"]);
                                         let table = new BaseSql(this.http, data[i]["TABLE_NAME"], fields, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                                         table.loadApi(data[i]["API_PATH"]);
                                     }
                                     if (data[i]["STATUS"] == 'update') {

                                         //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                                         //console.log('fields=', fields);
                                         //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                                         //console.log('constrains=', data[i]["CONSTRAINS"]);
                                         let table = new BaseSql(this.http, data[i]["TABLE_NAME"], fields, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                                         table.updateApi(data[i]["API_PATH"] + '?DATE_MODIFY_FROM=' + data[i]["DATE_MODIFY_FROM"]);
                                     }
                                     tableAction.addItem({
                                             id: data[i]["ID"],
                                             table_name: data[i]["TABLE_NAME"],
                                             action: data[i]["STATUS"],
                                             date_change: this.getDate(),
                                         }
                                     ).then(res => {
                                         //console.log("tableAction.addItem res=", res);
                                         loader.dismiss();
                                     });
                                     //loader.dismiss();
                                 });
                             }
                         }

                     })
                     //if this action was never make


                 }

             }
         );

     }

   /* async loadBase() {
        let api = new BaseApi(this.http);
        // api.getApi('universal_list.php?IBLOCK=21').subscribe(data => {

        let data = await  api.getApi('universal_list.php?IBLOCK=21').first().toPromise();
        //console.log("in home.ts after getApi=", data);

        let tableAction = new TableActionSql(this.http);
        for (let i = 0; i < data.length; i++) {

            //console.log("data.id", data[i]["ID"]);
            let res = await tableAction.checkForId(data[i]["ID"]);
            //console.log("tableAction.checkForId res=", res);
            if (!res) {
                // //console.log(
                //console.log("data.status", data[i]["STATUS"]);
                //console.log("data.fields", data[i]["FIELDS"]);
                let fields = JSON.parse(data[i]["FIELDS"]);
                //console.log("fields=", fields);
                //console.log("fields.length=", fields.length);
                //console.log("fields[1]", fields[1]);
                if (!this.platform.is('core')) {
                    let loader = this.loadingCtrl.create({
                        content: this.waitLoadStr,
                        duration: 30000,
                    });
                    await loader.present();
                    if (data[i]["STATUS"] == 'recreate') {

                        //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                        //console.log('fields=', fields);
                        //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                        //console.log('constrains=', data[i]["CONSTRAINS"]);
                        let table = new BaseSql(this.http, data[i]["TABLE_NAME"], fields, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                        await table.loadApi(data[i]["API_PATH"]);
                    }
                    if (data[i]["STATUS"] == 'update') {

                        //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                        //console.log('fields=', fields);
                        //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                        //console.log('constrains=', data[i]["CONSTRAINS"]);
                        let table = new BaseSql(this.http, data[i]["TABLE_NAME"], fields, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                        await table.updateApi(data[i]["API_PATH"] + '?DATE_MODIFY_FROM=' + data[i]["DATE_MODIFY_FROM"]);
                    }
                    await tableAction.addItem({
                            id: data[i]["ID"],
                            table_name: data[i]["TABLE_NAME"],
                            action: data[i]["STATUS"],
                            date_change: this.getDate(),
                        }
                    );
                    await loader.dismiss();

                }
            }


        }


    }*/


    ionViewWillEnter() {
        this.iconHeight = this.content.contentHeight / this.iconDivHeight;
        this.iconWidth = this.iconHeight;//must be th same
        //console.log("this.iconHeight=" + this.iconHeight);
        this.slides.update();
        this.menu.enable(true);

        this.viewCountStr = localStorage.getItem('viewcount');
        this.viewCount = Number(this.viewCountStr);
        //console.log('this.viewCount=', this.viewCount);

        if (this.viewCount == 0) {
            if (this.userId) {
                this.events.publish('user:login');
            }
            /**
             * init tables of database
             */

            //   [{"name":"id", "type":"text PRIMARY KEY"},{"name":"name_place","type":"text"},{"name":"coords", "type":"text"}, {"name":"name_rus", "type":"text"},{"name":"purpose", "type":"text"},{"name":"characteristics", "type":"text"}, {"name":"name_eng", "type":"text"}, {"name":"purpose_eng", "type":"text"}, {"name":"composition", "type":"text"}, {"name":"characteristics_eng", "type":"text"},{"name":"map", "type":"text"},{"name":"name_map", "type":"text"},  {"name":"place","type":"text"}]

            this.loadBase();


        }

        this.viewCount++;
        localStorage.setItem('viewcount', String(this.viewCount));
    }

    /*ionViewDidload() {


    }*/

    aboutPage() {
        this.navCtrl.push(AboutForumPage);
    }

    forumMapPage() {
        let mapSql = new BaseSql(this.http, 'map');
        mapSql.selectWhere('name_map="forum_map.jpg"').then(res => {

            //console.log("res=", res);
            let map = <any>res[0];
            this.navCtrl.push(LeafletMapPage, {
                typeOfMap: 'simple',
                icons: 'bus-stops.svg,check-in.svg',
                map: map
            });
        });
    };


    // this.navCtrl.push(ForumMapPage);


    parkPatriot() {
        this.navCtrl.push(PatriotPage,);
    }

    conferencePage() {
        this.navCtrl.push(ConferencePage, {select: 'all'});
    }


    participantPage() {
        this.navCtrl.push(ParticipantPage, {select: 'all'});
    }


    /*toggleMenu(){
      this.navCtrl.m
    }*/


    BarScannerPage() {
        this.navCtrl.push(BarScannerPage);
    }

    ExhibitListPage() {
        this.navCtrl.push(ExhibitPage);
    }


    DemoProgramPage() {
        this.navCtrl.push(DemoProgramPage);

    }

    showWC() {
        let mapSql = new BaseSql(this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(res => {

            //console.log("res=", res);
            let map = <any>res[0];
            this.navCtrl.push(LeafletMapPage, {
                typeOfMap: 'icon',
                map: map,
                icons: 'wc.svg',
                titleStr: this.wcStr
            });
        });
    }

    showCafe() {
        let mapSql = new BaseSql(this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(res => {

            //console.log("res=", res);
            let map = <any>res[0];
            this.navCtrl.push(LeafletMapPage, {
                typeOfMap: 'icon',
                map: map,
                icons: 'cafe.svg,restaurant.svg',
                titleStr: this.restaurantsCafe
            });
        });
    }

    showEnrance() {
        let mapSql = new BaseSql(this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(res => {

            //console.log("res=", res);
            let map = <any>res[0];
            this.navCtrl.push(LeafletMapPage, {
                typeOfMap: 'icon',
                map: map,
                icons: 'entranceA.svg,entranceB.svg,entranceC.svg',
                titleStr: this.entrancesExitsStr
            });
        });
    }

    showInfo() {
        let mapSql = new BaseSql(this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(res => {

            //console.log("res=", res);
            let map = <any>res[0];
            this.navCtrl.push(LeafletMapPage, {
                typeOfMap: 'icon',
                map: map,
                icons: 'medpoint.svg,meeting-point.svg,mother-and-child.svg,media-center.svg,guest-hall.svg',
                titleStr: this.infoStr
            });
        });

    }

    howToGet() {
        this.navCtrl.push(HowToGetPage);
    }


}


