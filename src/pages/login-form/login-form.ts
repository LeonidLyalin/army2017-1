import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

import {Events, NavController, ToastController} from 'ionic-angular';

import {UserData} from '../../providers/user-data';

import {TabsPage} from '../tabs/tabs';
import {SignupPage} from '../signup/signup';
import Control = L.Control;
import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";


@Component({
    selector: 'page-user',
    templateUrl: 'login-form.html'
})
export class LoginFormPage extends BaseLangPageProvider {

    login: FormControl;
    password: FormControl;

    form: FormGroup;

    user: { login?: string, password?: string } = {};
    submitted = false;
    //  lang: string;

    //interface strings

    loginStr: string;
    userNameStr: string;
    needUserNameStr: string;
    passwordStr: string;
    needPasswordStr: string;
    signUpStr: string;

    authSuccessStr: string;
    wrongLogStr :string;

    constructor(public navCtrl: NavController,
                public userData: UserData,
                public events: Events,
                public http: Http,
                private formBuilder: FormBuilder,
                private toastCtrl: ToastController) {
        super(navCtrl, events, http);

        this.login = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);


        this.form = formBuilder.group({
            login: this.login,
            password: this.password,

        });
    }

    ionViewDidLoad() {
        super.ionViewDidLoad();

    }

    setRussianStrings() {
        super.setRussianStrings('Войти');
        this.loginStr = 'Войти';
        this.userNameStr = 'Логин';
        this.needUserNameStr = 'Требуется имя пользователя';
        this.passwordStr = 'Пароль';
        this.needPasswordStr = 'Требуется пароль';
        this.signUpStr = 'Регистрация';
        this.authSuccessStr = 'Вы успешно авторизовались';
        this.wrongLogStr = 'Неправильный логин или пароль';
    }

    setEnglishStrings() {
        super.setEnglishStrings('Log in');
        this.loginStr = 'Login';
        this.userNameStr = 'Username';
        this.needUserNameStr = 'Need a login';
        this.passwordStr = 'Password';
        this.needPasswordStr = 'Need a password';
        this.signUpStr = 'Sign Up';
        this.authSuccessStr = 'Successful login';
        this.wrongLogStr = 'Wrong login or password';
    }

    async onLogin() {
        if (!this.login.valid) {
            let toast = this.toastCtrl.create({
                message: this.needUserNameStr,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.password.valid) {
            let toast = this.toastCtrl.create({
                message: this.needPasswordStr,
                duration: 2000
            });
            toast.present();
            return;
        }
        //console.log("form=", this.form);
        //console.log("login=", this.login);
        //console.log("password", this.password);

        if (this.form.valid) {
            await this.userData.login(this.login.value, this.password.value);
            /*if (this.userId && this.userId > 0) {
                let toast = this.toastCtrl.create({
                    message: this.authSuccessStr,
                    duration: 2000
                });
                toast.present();
            } else {
                let toast = this.toastCtrl.create({
                    message: this.wrongLogStr,
                    duration: 2000
                });
                toast.present();
            }*/

            this.navCtrl.push(TabsPage);
        }
    }

    onSignup() {
        this.navCtrl.push(SignupPage);
    }


}
