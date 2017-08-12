import {Component} from '@angular/core';
import {Events, NavController, NavParams, ToastController} from 'ionic-angular';


import {Http} from "@angular/http";
import {PatriotDetailPage} from "../patriot-detail/patriot-detail";

import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";
import {PatriotSql} from "../../providers/patriot/patriot-sql";


@Component({
    selector: 'page-Patriot',
    templateUrl: 'patriot.html',
   // providers: [FilterPatriotProvider],
})
export class PatriotPage extends BaseListPageProvider {


    constructor(public navCtrl: NavController,
                public http: Http,
                public patriotSql: PatriotSql,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                //  public filterProvider: FilterPatriotProvider,
                public events: Events) {

        super(navCtrl, navParams, events, http);//, placeSql, mapSql);
        // this.listOut = [];
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        let param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematicPatriot') {
            let toast = this.toastCtrl.create({
                message: 'Загрузка из API ',
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            this.listOut = navParams.data.data;
        }
        this.iblockId = 10;//number of the infoblock in bitrix
        this.events.subscribe('myforum:add:patriot', (id) => {
                //console.log('was added id =', id);
                let element = this.listOut.find(x => x.id == id.id);
                element.my_forum_id = id.my_forum_id;
                //console.log('was added =', element);
            }
        );
        this.events.subscribe('myforum:delete:patriot', (id) => {
                //console.log('was deleted id=', id);
                let element = this.listOut.find(x => x.id == id);
                element.my_forum_id = null;
                //console.log('was deleted =', element);
            }
        );
    }


    ionViewDidLoad() {
        super.ionViewDidLoad();

        //console.log('ionViewDidLoad PatriotPage');
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        let param = this.navParams.get('select');
        if (param == 'thematicPatriot') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data;
        }
        else {
            this.PatriotRefresh();
        }
    }

    PatriotRefresh() {
        //console.log("this.selectPatriotAll()");
        let toast = this.toastCtrl.create({
            message: this.loadStr,
            duration: 5000
        });
        toast.present();
        this.selectPatriotAll();


    }

    /**
     *
     * @param PatriotSingle
     */
    goToPatriotDetail(elementSingle) {
        //console.log("goToParticipantDetail()");
        //console.log(elementSingle);
        // go to the session detail page
        // and pass in the session data
        if (this.lang == 'ru') {
            this.patriotSql.selectPatriotRusFull(' where id=' + elementSingle.id).then(res => {
                let element = <any>res;
                //console.log("participantDetail=", element);
                this.navCtrl.push(PatriotDetailPage, {
                    element
                });
            });
        } else
            this.patriotSql.selectPatriotEngFull(' where id=' + elementSingle.id).then(res => {
                let element = <any>res;
                this.navCtrl.push(PatriotDetailPage, {element});
            });
    }


    selectPatriotAll(whereStr = '') {
        //console.log("selectPatriotAll() where=", whereStr);
        //console.log("selectPatriotAll() lang", this.lang);
        if (this.lang == 'ru') {
            this.patriotSql.selectPatriotRus(whereStr).then(res => {
                //console.log('this.patriotSql.getRusPatriot().then( res=', res);
                //console.log('(<PatriotRusMyForum[]>res).length=', (<any[]>res).length);
                if ((<any[]>res).length) {
                    //console.log('selectPatriotAll() after  select res');
                    //console.log(res);
                    this.listOut = <any[]>res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }

            })
        }
        else {
            this.patriotSql.selectPatriotEng(whereStr).then(res => {
                //console.log('this.patriotSql.getEngPatriot().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if ((<any[]>res).length) {
                    //console.log('selectPatriotAll() after  select res');
                    //console.log(res);
                    this.listOut = <any[]>res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }

            })
        }
    }


    setRussianStrings() {
        super.setRussianStrings('Парка Патриот')

    }

    setEnglishStrings() {
        super.setEnglishStrings('Park Patriot');

    }


}
//было 404 строки до рефакторинга 2
