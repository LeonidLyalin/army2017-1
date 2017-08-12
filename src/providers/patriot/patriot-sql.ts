import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {BaseSql} from "../base-sql";
import {ExhibitApiService} from "../../providers/exhibit/exhibit-api-service";
import {PatriotApiService} from "./patriot-api-service";

/*
 Generated class for the exhibitSql provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */


export interface exhibitRus {
    id: string;
    name_rus: string;
    name_rus_upper: string;
    place_name: string;

    place: string;
    format: string;

    contact: string;

    thematic_exhibit: string;
    organizer: string;

    date_event: string;
    time_beg: string;
    time_end: string;


}

export interface exhibit extends exhibitRus {

    name_eng: string;

    place_name_eng: string;


    format_eng: string;

    contact_eng: string;


    organizer_eng: string;
}


declare let window: any;

@Injectable()
export class PatriotSql extends BaseSql {
    public text: string = "";


    public api: PatriotApiService;

    constructor(public http: Http) {
        super(http, 'patriot',
            [{name: "id", type: "text PRIMARY KEY"},
                {name: "name_rus", type: "text"},
                {name: "name_rus_upper", type: "text"},
                {name: "name_eng", type: "text"},
                {name: "image", type: "text"},
                {name: "image_file", type: "text"},
                {name: "place", type: "text"},
                {name: "marker", type: "text"},
                {name: "popup", type: "text"},
                {name: "tooltip", type: "text"},
                {name: "desc_rus", type: "text"},
                {name: "desc_eng", type: "text"}]);


    }


    addFromApi() {
        this.api = new PatriotApiService(this.http);
        this.api.getExhibit().subscribe(res => {
            let listApi = <exhibit[]>res;
            for (let i = 0; i < listApi.length; i++) {
                //   this.addItemexhibit(listApi[i]);
            }
        });
    }

    selectPatriotRus(whereStr ?, fieldSort ?: string) {

        return new Promise(res => {

            this.arr = [];
            let query = "SELECT id, name_rus as name, image_file  FROM " + this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where')) query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '') query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            this.db.executeSql(query, [], rs => {

                if (rs.rows.length > 0) {
                    this.arr = [];

                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                    res(this.arr);
                }
                else res(false);
            }, (e) => {
                res(false);
                //console.log('Sql Query Error', e);
            });
        })


    }

    selectPatriotEng(whereStr ?, fieldSort ?: string) {

        return new Promise(res => {

            this.arr = [];
            let query = "SELECT id, name_eng as name ,image_file  FROM " + this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where')) query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '') query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            this.db.executeSql(query, [], rs => {

                if (rs.rows.length > 0) {
                    this.arr = [];

                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                    res(this.arr);
                }
                else res(false);
            }, (e) => {
                res(false);
                //console.log('Sql Query Error', e);
            });
        })


    }


    selectPatriotRusFull(whereStr ?, fieldSort ?: string) {

        return new Promise(res => {

            this.arr = [];
            let query = "SELECT id, name_rus as name, desc_rus as desc, image_file, place  FROM " + this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where')) query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '') query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            this.db.executeSql(query, [], rs => {

                if (rs.rows.length > 0) {
                    this.arr = [];

                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                    res(this.arr);
                }
                else res(false);
            }, (e) => {
                res(false);
                //console.log('Sql Query Error', e);
            });
        })


    }

    selectPatriotEngFull(whereStr ?, fieldSort ?: string) {

        return new Promise(res => {

            this.arr = [];
            let query = "SELECT id, name_eng as name, desc_rus as desc, image_file, place  FROM " + this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where')) query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '') query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            this.db.executeSql(query, [], rs => {

                if (rs.rows.length > 0) {
                    this.arr = [];

                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                    res(this.arr);
                }
                else res(false);
            }, (e) => {
                res(false);
                //console.log('Sql Query Error', e);
            });
        })


    }
}
