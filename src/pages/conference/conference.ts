import {Component} from '@angular/core';
import {Events, NavController, NavParams, ToastController} from 'ionic-angular';
import {MyForumSql} from "../../providers/my-forum-sql";
import {ConferenceSql} from "../../providers/conference-sql/conference-sql";
import {ConferenceApi} from "../../providers/conference-sql/conference-api-service";
import {Http} from "@angular/http";
import {ConferenceDetailPage} from "../conference-detail/conference-detail";



import {FilterConferenceProvider} from "../../providers/filter-provider/filter-conference-provider";
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";


@Component({
  selector: 'page-conference',
  templateUrl: 'conference.html',
  providers: [FilterConferenceProvider],
})
export class ConferencePage extends BaseListPageProvider {


  constructor(public navCtrl: NavController,
              public http: Http,
              public conferencetApi: ConferenceApi,
              public conferenceSql: ConferenceSql,
              public sqlMyForum: MyForumSql,
              public navParams: NavParams,
              public toastCtrl: ToastController,

              public filterProvider: FilterConferenceProvider,
              public events: Events,
              ) {

    super(navCtrl, navParams, events, http);//, placeSql, mapSql);
    // this.listOut = [];
      events.subscribe('myforum:add:conference', (id) => {
              //console.log('was added id =', id);
              let element = this.listOut.find(x => x.id == id.id);
              element.my_forum_id = id.my_forum_id;
              //console.log('was added =', element);
          }
      );
      events.subscribe('myforum:delete:conference', (id) => {
              //console.log('was deleted id=', id);
              let element = this.listOut.find(x => x.id == id);
              element.my_forum_id = null;
              //console.log('was deleted =', element);
          }
      );
    //console.log("navParams in constructor", navParams);
    //console.log("navParams==null", this.navParams == null);
    //console.log("navParams.data.length", navParams.data.length);
    let param = navParams.get('select');
    //console.log("navParams.get('select')", param);
    if (param == 'thematicConference') {
      let toast = this.toastCtrl.create({
        message: 'Загрузка из API ',
        duration: 5000
      });
      toast.present();
      //console.log("navParams.data", navParams.data.data);
      this.listOut = navParams.data.data;
    }
    this.iblockId = 14;//number of the infoblock in bitrix
  }


  ionViewDidLoad() {
    super.ionViewDidLoad();

    //console.log('ionViewDidLoad ConferencePage');
    //console.log("this.navParams=", this.navParams);
    //console.log("this.navParams.data=", this.navParams.data);
    //console.log("navParams==null", this.navParams == null);
    let param = this.navParams.get('select');
    if (param == 'thematicConference') {
      //console.log("this.navParams in ioViewDidLoad =", this.navParams);
      this.listOut = this.navParams.data;
    }
    else {
      this.conferenceRefresh();
    }
  }

  conferenceRefresh() {
    //console.log("this.selectConferenceAll()");
    let toast = this.toastCtrl.create({
      message: this.loadStr,
      duration: 5000
    });
    toast.present();
    this.selectConferenceAll();


  }

  /**
   *
   * @param conferenceSingle
   */
  goToConferenceDetail(element) {
    //console.log("goToParticipantDetail()");
    //console.log(element);
    // go to the session detail page
    // and pass in the session data
    this.navCtrl.push(ConferenceDetailPage, {
      element
    });
  }







  selectConferenceAll(whereStr = '') {
    //console.log("selectConferenceAll() where=", whereStr);
    //console.log("selectConferenceAll() lang", this.lang);
    if (this.lang == 'ru') {
      this.sqlMyForum.getRusConference(whereStr).then(res => {
        //console.log('this.sqlMyForum.getRusConference().then( res=', res);
        //console.log('(<conferenceRusMyForum[]>res).length=', (<any[]>res).length);
        if ((<any[]>res).length) {
          //console.log('selectConferenceAll() after  select res');
          //console.log(res);
          this.listOut = <any[]>res;
          //console.log("this.listOut");
          //console.log(this.listOut);
        }

      })
    }
    else {
      this.sqlMyForum.getEngConference(whereStr).then(res => {
        //console.log('this.sqlMyForum.getEngConference().then( res=', res);
        //console.log('(<any[]>res).length=', (<any[]>res).length);
        if ((<any[]>res).length) {
          //console.log('selectConferenceAll() after  select res');
          //console.log(res);
          this.listOut = <any[]>res;
          //console.log("this.listOut");
          //console.log(this.listOut);
        }

      })
    }
  }


/*  getConferenceApiInsertBase() {
    this.conferencetApi.getConference().subscribe(data => {
      //console.log("here are the results");
      //console.log(data);

      this.listOut = data;
      this.addItemConference();
    });
  }*/



  setRussianStrings() {
    super.setRussianStrings('Конференция')

  }

  setEnglishStrings() {
    super.setEnglishStrings('Conference');

  }

  setFilterStrConference() {
    this.filterStr = this.filterProvider.filterStr;
    //console.log("this.filterStr", this.filterStr);
    if (this.lang == 'ru') {
      this.sqlMyForum.getRusConference(this.filterStr).then(res => {
        //console.log('our select');
        //console.log(res);
        this.listOut = res;
        this.showHideFilter();
      });
    } else {
      this.sqlMyForum.getEngConference(this.filterStr).then(res => {
        //console.log('our select');
        //console.log(res);
        this.listOut = res;
        this.showHideFilter();
      });
    }
  }

  cancelFilterStrConference() {
    this.filterProvider.cancelFilter();
    this.showHideFilter();
  }



}

//было 404 строки до рефакторинга 2
