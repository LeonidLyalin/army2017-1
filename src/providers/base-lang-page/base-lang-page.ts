import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Events, NavController} from "ionic-angular";


/*
  Generated class for the BaseLangPageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BaseLangPageProvider {
    lang: string;
    userId: any;

    titleStr: string;
    setFilterStr: string;
    cancelFilterStr: string;
    yesStr: string;
    noStr: string;
    addStr: string;
    loadStr: string;
    //login: boolean;


    constructor(public navCtrl: NavController,
                /*public navParams: NavParams,*/
                public events: Events,
                public http: Http) {
        //console.log('Hello BaseLangPageProvider Provider');

        this.userId = localStorage.getItem('userid');


        this.lang = localStorage.getItem('lang');
        if (this.lang == 'ru') {
            this.setRussianStrings();
        }
        else {
            this.setEnglishStrings();

        }

        this.events.subscribe('language:change', () => {


            this.lang = localStorage.getItem('lang');
            if (this.lang == 'ru') {
                //console.log('this.events.subscribe(language:change)', this.lang);
                this.setRussianStrings();
            }
            else {
                this.setEnglishStrings();
            }
        });

        this.events.subscribe('user:login', () => {
           // this.login=true;
            this.userId = localStorage.getItem('userid');
        });

        this.events.subscribe('user:signup', () => {
          //  this.login=true;
            this.userId = localStorage.getItem('userid');
        });

        this.events.subscribe('user:logout', () => {
            //this.login=false;
            this.userId = localStorage.getItem('userid');

        });
    }


    ionViewDidLoad() {
        this.userId = localStorage.getItem('userid');
        this.lang = localStorage.getItem('lang');
        if (this.lang == 'ru') this.setRussianStrings();
        else this.setEnglishStrings();
    }

    setRussianStrings(titleStr?) {
        this.titleStr = titleStr;
        this.setFilterStr = 'Установить';
        this.cancelFilterStr = 'Отменить';
        this.yesStr = 'Да';
        this.noStr = 'Нет';
        this.addStr = 'Добавить';

    }

    setEnglishStrings(titleStr?) {
        this.titleStr = titleStr;
        this.setFilterStr = 'Set';
        this.cancelFilterStr = 'Cancel';
        this.noStr = 'No';
        this.addStr = 'Add';
    }


}
