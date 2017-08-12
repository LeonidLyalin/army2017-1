import {Injectable} from '@angular/core';
import {Http, RequestOptions /*, Response*/} from '@angular/http';

import 'rxjs';


@Injectable()
export class BaseApi {
    public baseUrl = 'http://army2017.ru';
    public baseUrlApi;
    public baseUrlAjax;
    private result: any = {};


    constructor(public http: Http) {
        //console.log('new Base  api is created');
        this.baseUrlApi = this.baseUrl + '/api';
        this.baseUrlAjax = this.baseUrl + '/ajax';
    }

    //public userId:any;

   getApi(apiPhp) {
        //console.log('**about to make HTTP call for', apiPhp);
        /*var headers = new Headers();
        headers.append("Access-Control-Allow-Origin", '*');*/
       /* headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );*/
       // let options = new RequestOptions(headers);

        return this.http.get(`${this.baseUrlApi}/` + apiPhp)
            .map(response => {
                this.result = response.json();
                //console.log("getApi result=", this.result);
                return this.result;
            });
    }
/*
    getApi(apiPhp) {
        //console.log('**about to make HTTP call for', apiPhp);
       var headers = new Headers();
        headers.append("Access-Control-Allow-Origin", '*');

        let options = new RequestOptions(headers);

        return this.http.get(apiPhp)
            .map(response => {
                this.result = response.json();
                //console.log("getApi result=", this.result);
                return this.result;
            });
    }
*/


}
