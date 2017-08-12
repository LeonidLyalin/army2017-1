import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {BaseLangPageProvider} from "../base-lang-page/base-lang-page";
import {Events, NavController} from "ionic-angular";


@Injectable()
export class FilterDemoProgramProvider extends BaseLangPageProvider{
  filterStr: string;



  public placeField: string;
  public placeTitle: string;
  public placeValue: string;

 /* public countryField: string;
  public countryTitle: string;
  public countryValue: string;*/

  public dateField: string;
  public dateTitle: string;
  public dateValue: string;

  public partOfName: string;

/*  setFilterStr: string;
  cancelFilterStr: string;*/
  findName: string;

  constructor(public navCtrl: NavController,
              public http: Http,
              public events: Events) {
    super(navCtrl, events, http)
    //console.log('Hello FilterExhibitProvider Provider');

  }

  setRussianStrings() {
    super.setRussianStrings();

    this.placeTitle = 'Стенды';
    this.dateTitle = 'Дата';

    //interface strings
    this.setFilterStr = 'Установить';
    this.cancelFilterStr = 'Отменить';
    this.findName = 'Наименование';
  }

  setEnglishStrings(){
    super.setEnglishStrings();

    this.placeTitle = 'Stand';
    this.dateTitle = 'Date of event';
    //interface strings
    this.setFilterStr = 'Set';
    this.cancelFilterStr = 'Cancel';
    this.findName = 'Name';
  }

  setFilterValue(filterStr) {
    this.filterStr = filterStr;
    //console.log("provider this.filterStr",this.filterStr)
  }




  cancelFilter() {

    this.placeField = '';
    this.placeValue = '';
    this.dateField = '';
    this.dateValue = '';
   /* this.countryField = '';
    this.countryValue = '';*/
    this.findName='';

      this.filterStr='';

  }
}
