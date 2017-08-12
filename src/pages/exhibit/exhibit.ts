import {Component} from '@angular/core';
import {Events, NavController, NavParams, ToastController} from 'ionic-angular';
import {MyForumSql} from "../../providers/my-forum-sql";

import {Http} from "@angular/http";
import {ExhibitDetailPage} from "../exhibit-detail/exhibit-detail";
import {FilterExhibitProvider} from "../../providers/filter-provider/filter-exhibit-provider";
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";


@Component({
    selector: 'page-exhibit',
    templateUrl: 'exhibit.html',
    providers: [FilterExhibitProvider],
})
export class ExhibitPage extends BaseListPageProvider {


    constructor(public navCtrl: NavController,
                public http: Http,
                public sqlMyForum: MyForumSql,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public filterProvider: FilterExhibitProvider,
                public events: Events) {

        super(navCtrl, navParams, events, http);//, placeSql, mapSql);
        // this.listOut = [];
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        let param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematicexhibit') {
            let toast = this.toastCtrl.create({
                message: 'Загрузка из API ',
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            this.listOut = navParams.data.data;
        }
        this.iblockId = 10;//number of the infoblock in bitrix
        this.events.subscribe('myforum:add:exhibit', (id) => {
                //console.log('was added id =', id);
                let element = this.listOut.find(x => x.id == id.id);
                element.my_forum_id = id.my_forum_id;
                //console.log('was added =', element);
            }
        );
        this.events.subscribe('myforum:delete:exhibit', (id) => {
                //console.log('was deleted id=', id);
                let element = this.listOut.find(x => x.id == id);
                element.my_forum_id = null;
                //console.log('was deleted =', element);
            }
        );
    }


    ionViewDidLoad() {
        super.ionViewDidLoad();

        //console.log('ionViewDidLoad exhibitPage');
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        let param = this.navParams.get('select');
        if (param == 'thematicexhibit') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data;
        }
        else {
            this.exhibitRefresh();
        }
    }

    exhibitRefresh() {
        //console.log("this.selectexhibitAll()");
        let toast = this.toastCtrl.create({
            message: this.loadStr,
            duration: 5000
        });
        toast.present();
        this.selectExhibitAll();


    }

    /**
     *
     * @param exhibitSingle
     */
    goToExhibitDetail(elementSingle) {
        //console.log("goToParticipantDetail()");
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


    selectExhibitAll(whereStr = '') {
        //console.log("selectexhibitAll() where=", whereStr);
        //console.log("selectexhibitAll() lang", this.lang);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusExhibit(whereStr).then(res => {
                //console.log('this.sqlMyForum.getRusexhibit().then( res=', res);
                //console.log('(<exhibitRusMyForum[]>res).length=', (<any[]>res).length);
                if ((<any[]>res).length) {
                    //console.log('selectexhibitAll() after  select res');
                    //console.log(res);
                    this.listOut = <any[]>res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }

            })
        }
        else {
            this.sqlMyForum.getEngExhibit(whereStr).then(res => {
                //console.log('this.sqlMyForum.getEngexhibit().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if ((<any[]>res).length) {
                    //console.log('selectexhibitAll() after  select res');
                    //console.log(res);
                    this.listOut = <any[]>res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }

            })
        }
    }


    deleteFromMyForum(id) {
        this.sqlMyForum.delFromMyForum(id).then(res => {
            this.exhibitRefresh();
        });

    }

    /**
     * add a record in to the myforum table and in site infoblock "myforum" for current exhibit element
     * @param id
     */
    addToMyForumSite(id) {
        this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId, this.listOut).then(res => {
                //console.log("and refresh now");
                //console.log("res=", res);
            }
        );

    }

    setRussianStrings() {
        super.setRussianStrings('Экспонаты МО')

    }

    setEnglishStrings() {
        super.setEnglishStrings('Exhibit of the MoD');

    }

    setFilterStrExhibit() {
        this.filterStr = this.filterProvider.filterStr;
        //console.log("this.filterStr", this.filterStr);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusExhibit(this.filterStr).then(res => {
                //console.log('our select');
                //console.log(res);
                this.listOut = res;
                this.showHideFilter();
            });
        } else {
            this.sqlMyForum.getEngExhibit(this.filterStr).then(res => {
                //console.log('our select');
                //console.log(res);
                this.listOut = res;
                this.showHideFilter();
            });
        }
    }

    cancelFilterStrExhibit() {
        this.filterProvider.cancelFilter();
        this.showHideFilter();
    }
}

//было 404 строки до рефакторинга 2
