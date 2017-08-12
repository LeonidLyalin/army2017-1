import {Injectable} from '@angular/core';
import {Http /*, Response*/} from '@angular/http';

import 'rxjs';
import {BaseApi} from "../base-api-service";


@Injectable()
export class UserApi extends BaseApi {
//  private baseUrl = 'http://army2017.ru/api';


    constructor(public http: Http) {
        super(http);
        //console.log('conferenceSingle api is created');
    }

    public userId: any;

    createUser(login, password, name, lastname, email, confirm_password) {
        try {
            //console.log("I'm inside try");
            //console.log(login);
            //console.log(password);
            //console.log(`${this.baseUrlApi}/user/create_user.php?LOGIN=` + login + `&PASSWORD=` + password);
            //console.log(`${this.baseUrl}/api/user/create_user.php?LOGIN=` + login + `&PASSWORD=` + password + `&NAME=` + name + `&SURNAME=` + lastname + `&EMAIL=` + email + `&CONFIRM_PASSWORD=` + confirm_password);
            return this.http.get(`${this.baseUrl}/api/user/create_user.php?LOGIN=` + login
                + `&PASSWORD=` + password + `&NAME=` + name
                + `&SURNAME=` + lastname + `&EMAIL=` + email + `&CONFIRM_PASSWORD=` + confirm_password).map(response => {
                //console.log("response");
                let res = response.json();
                //console.log(res);
                if (res.result)
                    this.userId = res.result;
                else this.userId = res;
                //console.log(this.userId);
                if ((this.userId) && (this.userId > 0)) {
                    localStorage.setItem('userid', this.userId);
                    return this.userId;
                }
                else {
                    localStorage.removeItem('userid');
                    return 0;
                }
            })

        }
        catch (err) {
            //console.log("error");
            //console.log(err);
            return err;
        }

    }

    checkUser(login, password) {
        try {
            //console.log("I'm inside try");
            //console.log(login);
            //console.log(password);
            //console.log(`${this.baseUrlApi}/user/check_user.php?LOGIN=` + login + `&PASSWORD=` + password);
            return this.http.get(`${this.baseUrl}/api/user/check_user.php?LOGIN=` + login + `&PASSWORD=` + password).map(response => {
                //console.log("response");
                let res = response.json();
                //console.log(res);

                this.userId = res.result.ID;
                //console.log(this.userId);
                localStorage.setItem('userid', this.userId);
                return res;
            })

        }
        catch (err) {
            //console.log("error");
            //console.log(err);
            return err;
        }

    }

}
