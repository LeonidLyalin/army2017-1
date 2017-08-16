import {Injectable} from '@angular/core';

import {Events, ToastController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {UserApi} from "./user/user-api.service";


@Injectable()
export class UserData {
    _favorites: string[] = [];
    //HAS_LOGGED_IN = 'hasLoggedIn';
    //HAS_SEEN_TUTORIAL = 'hasSeenTutorial';


    authSuccessStr: string;
    wrongLogStr: string;
    signupSuccessStr: string;
    signupWrongStr: string;
    lang: string;

    constructor(public events: Events,
                public storage: Storage,
                public userApi: UserApi,
                public toastCtrl: ToastController) {
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
    }

    setRussianStrings() {
        this.authSuccessStr = 'Вы успешно авторизовались';
        this.signupSuccessStr = 'Вы успешно зарегистрировались';
        this.signupWrongStr = 'Ошибка при регистрации';
        this.wrongLogStr = 'Неправильный логин или пароль';
    }

    setEnglishStrings() {
        this.authSuccessStr = 'Successful login';
        this.signupSuccessStr = 'Successful sign up';
        this.signupWrongStr = 'Error on sign up';
        this.wrongLogStr = 'Login or password is wrong';
    }

    hasFavorite(sessionName: string): boolean {
        return (this._favorites.indexOf(sessionName) > -1);
    };

    addFavorite(sessionName: string): void {
        this._favorites.push(sessionName);
    };

    removeFavorite(sessionName: string): void {
        let index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };

    async login(login, password: string) {
        this.userApi.checkUser(login, password).subscribe(
            res => {
                //console.log("res after login");
                //console.log(res);
                try {
                    if (res.result.ID > 0) {
                        //console.log("successful auth");
                        localStorage.setItem('userid', res.result.ID);
                        //console.log("login",res.result.LOGIN);
                        localStorage.setItem('login',res.result.LOGIN);
                        //console.log("lastname",res.result.LAST_NAME);
                        localStorage.setItem('lastname',res.result.LAST_NAME);
                        //console.log(res.result.NAME);
                        localStorage.setItem('name',res.result.NAME);
                        //console.log(res.result.EMAIL);
                        localStorage.setItem('email',res.result.EMAIL);
                        //console.log("userID");
                        this.events.publish('user:login');

                    }

                } catch (err) {
                    let toast = this.toastCtrl.create({
                        message: this.wrongLogStr,
                        duration: 3000
                    });
                    toast.present();
                    //console.log("error");
                    //console.log(err);
                    return err;
                }
            }
        );

    };

    async signup(login: string, password: string, name: string, lastname: string, email: string, confirm_password: string) {
        confirm_password = confirm_password || confirm_password;

        this.userApi.createUser(login, password, name, lastname, email, confirm_password).subscribe(res => {
            if (res > 0) {
                // localStorage.set(this.HAS_LOGGED_IN, true);
                localStorage.setItem('login', login);
                localStorage.setItem('lastname', lastname);
                localStorage.setItem('lastname', name);
                localStorage.setItem('email', email);
                this.events.publish('user:signup');

            }
            else {
                let toast = this.toastCtrl.create({
                    message: this.signupWrongStr,
                    duration: 3000
                });
                toast.present();
            }
        });

    };

    logout(): void {
        //   localStorage.remove(this.HAS_LOGGED_IN);
        localStorage.removeItem('login');
        localStorage.removeItem('userid');
        localStorage.removeItem('name');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
        this.events.publish('user:logout');
    };






    hasLoggedIn() {

        let value = localStorage.getItem('userid');
        //console.log('value=', value);
        return !!((value) && (value != '0'));
    };


}