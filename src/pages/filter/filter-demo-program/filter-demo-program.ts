import {Component, Injectable} from '@angular/core';
import {ModalController, NavController, NavParams, Events} from 'ionic-angular';
import {FilterPage} from "../filter";
import {BaseSql} from "../../../providers/base-sql";
import {Http} from "@angular/http";

import {FilterConferenceProvider} from "../../../providers/filter-provider/filter-conference-provider";
import {BaseLangPageProvider} from "../../../providers/base-lang-page/base-lang-page";
import {FilterDemoProgramProvider} from "../../../providers/filter-provider/filter-demo-program-provider";

@Injectable()
@Component({
  selector: 'page-filter-demo-program',
  templateUrl: 'filter-demo-program.html',
})
export class FilterDemoProgramPage extends BaseLangPageProvider {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public http: Http,
              public filterProvider: FilterDemoProgramProvider,
              public events: Events) {
    super(navCtrl, events, http);


  }

  setRussianStrings() {
    super.setRussianStrings();
    console.log('this.setRussianStrings()');


  }

  setEnglishStrings() {
    super.setEnglishStrings();
    console.log('this.setEnglishStrings()');

  }

    setWholeFilter() {

            this.filterCreateWhereStr().then(res => {
                console.log(' filterMap() res=', <any>res);
                this.filterProvider.setFilterValue(<string>res);
            });


    }


  filterCreate() {
    /* this.filterProvider.filterStr=this.filterCreateWhereStr();*/

      this.filterCreateWhereStr().then(res => {
        console.log(' filterMap() res=', <any>res);
        this.filterProvider.setFilterValue(<string>res);
      });

  }


    /**
     * rigid filter!!!
     */

  filterPlace() {
    let parameters = {
      table: 'place', field: 'name_rus',
      value: 'id', where: " (name_rus='Сухопутный кластер' or name_rus='Аэродром "+'"'+'Кубинка"'+"'"+')'
    };
    if (this.lang == 'en') {
      parameters =
        {
          table: 'place', field: 'name_eng',
          value: 'id', where: " (name_rus='Сухопутный кластер' or name_rus='Аэродром "+'"'+'Кубинка"'+"'"+')'
        }
    }

      let filterModal = this.modalCtrl.create(FilterPage, parameters);
      filterModal.onDidDismiss(
        data => {
          console.log(data);
          this.filterProvider.placeField = data["field"];
          this.filterProvider.placeValue = data["value"];
          //this.filterProvider.filterStr=
          this.filterCreate();
        });
      filterModal.present();

  }

  filterDate() {
    let parameters = {
      table: 'conference', field: 'date_event',
      value: 'date_event', distinct: 'date_event',
      title: 'Дата', order: 'date_event'
    };
    if (this.lang == 'en') {
      parameters =
        {
          table: 'conference', field: 'date_event',
          value: 'date_event', distinct: 'date_event',
          title: 'Date', order: 'date_event'
        }
    }
    let filterModal = this.modalCtrl.create(FilterPage, parameters);
    filterModal.onDidDismiss(
      data => {
        console.log(data);
        this.filterProvider.dateField = data["field"];
        this.filterProvider.dateValue = data["value"];
        this.filterCreate();
      }
    );

    filterModal.present();
  }

  filterCreateWhereStr() {

    console.log("this.dateValue", this.filterProvider.dateValue);
    console.log("this.placeValue=", this.filterProvider.placeValue);
    return new Promise(res => {
      let whereStr = '';

      if ((this.filterProvider.partOfName) && (this.filterProvider.partOfName != '')) {
        if (this.lang == 'ru') {
          whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + this.filterProvider.partOfName.toUpperCase() + '%"';
        }
        else {
          whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + this.filterProvider.partOfName.toUpperCase() + '%"'
        }

      }

      if ((this.filterProvider.dateValue) && (this.filterProvider.dateValue != '')) {

        whereStr += ((whereStr != '') ? ' and ' : '') + 'a.date_event="' + this.filterProvider.dateValue + '"';

      }





      if (this.filterProvider.placeValue && (this.filterProvider.placeValue != ''))
        whereStr += ((whereStr != '') ? ' and ' : '') + '  a.place="' + this.filterProvider.placeValue + '"';


      if (whereStr != '') whereStr = ' where ' + whereStr;
      this.filterProvider.setFilterValue(whereStr);
      console.log('so whereStr is =', whereStr);
      return res(whereStr);
    });
  }




/*  setFilter() {
    console.log(this.filterCreateWhereStr());
    //this.filterStr = this.filterCreateWhereStr();


      this.filterCreateWhereStr().then(res => {
          console.log(' filterMap() res=', <any>res);
          this.filterProvider.setFilterValue(<string>res);
      });
    console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
  }*/

  selectConferenceSearch() {
    //  this.filterStr=this.filterCreateWhereStr();
    // this.filterProvider.setFilterValue(this.filterCreateWhereStr());

      this.filterCreateWhereStr().then(res => {
        console.log(' filterMap() res=', <any>res);
        this.filterProvider.setFilterValue(<string>res);
      });
    console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
  }

  cancelFilterDate() {
    this.filterProvider.dateField = '';
    this.filterProvider.dateValue = '';

      this.filterCreateWhereStr().then(res => {
        console.log(' filterMap() res=', <any>res);
        this.filterProvider.setFilterValue(<string>res);
      });
    console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);

  }



  cancelFilterPlace() {
    this.filterProvider.placeField = '';
    this.filterProvider.placeValue = '';

      this.filterCreateWhereStr().then(res => {
        console.log(' filterMap() res=', <any>res);
        this.filterProvider.setFilterValue(<string>res);
      });
    console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);

  }


  cancelFilterName() {
    this.filterProvider.partOfName = '';

      this.filterCreateWhereStr().then(res => {
        console.log(' filterMap() res=', <any>res);
        this.filterProvider.setFilterValue(<string>res);
      });
    console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
  }


}
