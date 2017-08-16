import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Events, NavController} from 'ionic-angular';

import {UserData} from '../../providers/user-data';

import {TabsPage} from '../tabs/tabs';
import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";

@Component({
    selector: 'page-user',
    templateUrl: 'signup.html'
})
export class SignupPage extends BaseLangPageProvider {
    signup: {
        login?: string, password?: string, name?: string,
        lastname?: string, email?: string; confirm_password?: string;
        confirm_personal?:boolean
    } = {};


    submitted = false;


    loginStr: string;
    passwordStr: string;
    passwordIsReq: string;
    loginIsReq: string;
    signUpStr: string;
    nameIsReq: string;
    lastnameIsReq: string;
    emailIsReq: string;
    confirmIsReq: string;
    personalStr: string;
    personalIsReq: string;

    nameStr: string;
    lastnameStr: string;
    emailStr: string;
    confirmStr: string;

    confirmPersonal:boolean=false;

    constructor(public navCtrl: NavController,
                public userData: UserData,
                public events: Events,
                public http: Http) {
        super(navCtrl, events, http)
    }

    setRussianStrings() {
        super.setRussianStrings('Регистрация');
        this.loginStr = 'Логин';
        this.passwordStr = 'Пароль';
        this.passwordIsReq = 'Требуется пароль';
        this.loginIsReq = 'Необходим логин';
        this.nameIsReq = 'Необходимо имя';
        this.lastnameIsReq = 'Необходима фамилия';
        this.emailIsReq = 'Необходима электронная почта';
        this.confirmIsReq = 'Необходимо подтверждение пароля';
        this.signUpStr = 'Зарегистрироваться';
        this.personalStr = 'Даю согласие на испоьзование персонлаьных данных';

        this.nameStr = 'Имя';
        this.lastnameStr = 'Фамилия';
        this.emailStr = 'Электронная почта';
        this.confirmStr = 'Подтверждение пароля';
        this.personalIsReq = 'Необходимо согласие на обработку персональных данных';

    }

    setEnglishStrings() {
        super.setEnglishStrings('Signup');
        this.loginStr = 'Login';
        this.passwordStr = 'Password';
        this.passwordIsReq = 'Password is required';
        this.loginIsReq = 'Login is required';
        this.nameIsReq = 'Name is required';
        this.lastnameIsReq = 'Last name is required';
        this.emailIsReq = 'Email is required';
        this.confirmIsReq = 'Password confirm is required';
        this.signUpStr = 'Sign Up';
        this.personalStr = 'I give my persmission to use my personal data';

        this.nameStr = 'Name';
        this.lastnameStr = 'Lastname';
        this.emailStr = 'Email';
        this.confirmStr = 'Confirm_password';

        this.personalIsReq = 'Personal data using permission is required';
    }

    onSignup(form: NgForm) {
        this.submitted = true;

        if (form.valid) {
            this.userData.signup(this.signup.login, this.signup.password, this.signup.name,
                this.signup.lastname, this.signup.email, this.signup.confirm_password);
            this.navCtrl.push(TabsPage);
        }
    }
}
