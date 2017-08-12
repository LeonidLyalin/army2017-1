import {Component} from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {MyForumSql} from "../../providers/my-forum-sql";
import {Http} from "@angular/http";
import {ExhibitSql} from "../../providers/exhibit/exhibit-sql";
import {BaseListPageProvider} from "../../providers/base-list-page/base-list-page";


@Component({
    selector: 'page-demo-program-detail',
    templateUrl: 'demo-program-detail.html'
})
export class DemoProgramDetailPage extends BaseListPageProvider {
    element: any;
    thematic: any;
    myForum: any;


    //interface strings
    title: string;
    onMapStr: string;
    myForumStr: string;
    thematicStr: string;
    charactersStr: string;
    characters = [];

    // characteristicsHtml: string;

    constructor(public NavCtrl: NavController,
                public navParams: NavParams,
                public exhibitDetailSql: ExhibitSql,
                public sqlMyForum: MyForumSql,
                public events: Events,
                public http: Http,
               ) {
        super(NavCtrl, navParams, events, http);
        //console.log("now in exhibit detail");
        //console.log(navParams);
        this.thematic = [];
        if (navParams.data.element)
            if (navParams.data.element.length)
                this.element = navParams.data.element[0];
            else this.element = navParams.data.element;
        else if (navParams.data.res) this.element = navParams.data.res;
        this.iblockId = 10;

    }

    setRussianStrings() {
        super.setRussianStrings('Экспонат');
        this.charactersStr = 'ТТХ';
        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:'
    }

    setEnglishStrings() {
        super.setEnglishStrings('Exhibit');
        this.charactersStr = 'Technical characteristics';
        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:'
    }

    /*
    Время развертывания, мин::
    первой очереди (без палаток):
    10; полное:30-45 мин;;
    Вместимость предперевязочной и эвакуационной палаток, чел:: на носилках: 18; сидя (дополнительно) - 10;;
     */
    prepareCharacteristics() {

        this.characters = [];
        // let tmpHtml = '';
        if (!this.element.characteristics) return;
        let doubleSemiColon = this.element.characteristics.split(';;');
        //  if (doubleSemiColon.length > 1) {
        //    let i = 0;
        for (let i = 0; i < doubleSemiColon.length; i++) {


            let doubleColon = doubleSemiColon[i].split('::');

            for (let j = 0; j < doubleColon.length; j++) {

                let singleComma = doubleColon[j].split(';');
                singleComma.forEach(singleCommaStr => {
                    let tmpStr: string;
                    let size: number = 0;

                    tmpStr = singleCommaStr;
                    if (i == 0 && j == 0) {
                        tmpStr += ':';
                        size = 2
                    }

                    this.characters.push({size: size, text: tmpStr});
                    /*let singleColon=singleCommaStr.split(':');
                    singleColon.forEach(singleColonStr=>{
                      this.characters.push(singleColonStr);
                    })*/
                });
            }
        }
    }




    ionViewDidLoad() {
        super.ionViewDidLoad();
        // this.userId = localStorage.getItem('userid');

        this.prepareCharacteristics();
        this.exhibitDetailSql.getFieldFromTable(this.element.id, 'id', 'myforum').then(
            //getMyForumForId(this.conferenceSingle.id).then(
            rs => {
                if (rs) {
                //    //console.log("res in conferenceSingle myForumExhibit", rs);
                    this.myForum = <any>rs;
                }

            }
        );


    }

    async changeMyForum(element) {
        if (this.userId) {
            //   let participant = this.participantList.find(x => x.id == id);
            //element.my_forum_id = id.my_forum_id;
            // //console.log('was added =', element);
            if (element.my_forum_id > 0) {

                element.my_forum_id = await this.deleteFromMyForum(element.id);
                this.events.publish('myforum:delete:demo', (element.id)
                );
            }
            else {
                element.my_forum_id = await this.addToMyForumSite(element.id);
                // ''this.participantApi
                this.events.publish('myforum:add:demo', ({id: element.id, my_forum_id: element.my_forum_id})
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

}
