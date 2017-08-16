import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

import {Events, NavController, ToastController} from 'ionic-angular';

import {UserData} from '../../providers/user-data';

import {TabsPage} from '../tabs/tabs';
import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";

@Component({
    selector: 'page-user',
    templateUrl: 'signup-form.html'
})
export class SignupFormPage extends BaseLangPageProvider {
    signup: {
        login?: string, password?: string, name?: string,
        lastname?: string, email?: string; confirm_password?: string;
        confirm_personal?: boolean
    } = {};


    submitted = false;

    login: FormControl;
    password: FormControl;
    name: FormControl;
    lastname: FormControl;
    email: FormControl;
    confirm_password: FormControl;
    confirm_personal: FormControl;

    //this.login = new FormControl('', Validators.required);
    //this.password = new FormControl('', Validators.required);

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
    //  needPasswordStr: string;

    nameStr: string;
    lastnameStr: string;
    emailStr: string;
    confirmStr: string;

    form: FormGroup;

    matchIsReq:string;
    signupSuccessStr:string;

    constructor(public navCtrl: NavController,
                public userData: UserData,
                public events: Events,
                public http: Http,
                private formBuilder: FormBuilder,
                private toastCtrl: ToastController) {
        super(navCtrl, events, http);

        this.login = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.required);
        this.name = new FormControl('', Validators.required);
        this.lastname = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.required);
        this.confirm_password = new FormControl('', Validators.required);
        this.confirm_personal = new FormControl('', Validators.required);

        this.form = formBuilder.group({
            login: this.login,
            password: this.password,
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            confirm_password: this.confirm_password,
            confirm_personal: this.confirm_personal
        });
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
        this.personalStr = 'Даю согласие на обработку персональных данных';

        this.nameStr = 'Имя';
        this.lastnameStr = 'Фамилия';
        this.emailStr = 'Электронная почта';
        this.confirmStr = 'Подтверждение пароля';
        this.personalIsReq = 'Необходимо согласие на обработку персональных данных';

        this.matchIsReq = 'Не совпадает подтверждение пароля';
        this.signupSuccessStr = 'Вы успешно зарегистрировались';
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
        this.matchIsReq = 'Confirm password does not match';

        this.signupSuccessStr = 'Signup is successful';
    }

    onSignup(form: NgForm) {
        this.submitted = true;

        if (!this.login.valid) {
            let toast = this.toastCtrl.create({
                message: this.loginIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.password.valid) {
            let toast = this.toastCtrl.create({
                message: this.passwordIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.confirm_password.valid) {
            let toast = this.toastCtrl.create({
                message: this.confirmIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }

        if (!this.name.valid) {
            let toast = this.toastCtrl.create({
                message: this.nameIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }

        if (!this.lastname.valid) {
            let toast = this.toastCtrl.create({
                message: this.lastnameIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.email.valid) {
            let toast = this.toastCtrl.create({
                message: this.emailIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.confirm_personal.value) {
            let toast = this.toastCtrl.create({
                message: this.personalIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }

        if (this.confirm_password.value!=this.password.value) {
            let toast = this.toastCtrl.create({
                message: this.matchIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (this.form.valid && this.confirm_personal.value) {
            this.userData.signup(this.login.value, this.password.value, this.name.value,
                this.lastname.value, this.email.value, this.confirm_password.value);
            let toast = this.toastCtrl.create({
                message: this.signupSuccessStr,
                duration: 2000
            });
            toast.present();
            this.navCtrl.push(TabsPage);
        }
    }

    onCancel(){
        this.navCtrl.push(TabsPage);
    }
}
