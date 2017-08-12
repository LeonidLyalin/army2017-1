import {Component} from '@angular/core';

import {AlertController, Events, NavController} from 'ionic-angular';

import {UserData} from '../../providers/user-data';
import {TabsPage} from "../tabs/tabs";
import {BaseLangPageProvider} from "../../providers/base-lang-page/base-lang-page";
import {Http} from "@angular/http";


@Component({
    selector: 'page-account',
    templateUrl: 'account.html'
})
export class AccountPage extends BaseLangPageProvider {
    login: string;
    lastname: string;
    name: string;
    email: string;

    loginStr: string;
    lastnameStr: string;
    nameStr: string;
    emailStr: string;

    //interface strings

    profileStr: string;
    changeUserNameStr: string;
    updatePictureStr: string;
    changePasswordStr: string;
    supportStr: string;
    logOutStr: string;
    exitStr: string;

    // lang: string;

    constructor(public alertCtrl: AlertController,
                public navCtrl: NavController,
                public userData: UserData,
                public events: Events,
                public http: Http) {
        super(navCtrl, events, http);

    }


    setRussianStrings() {
        super.setRussianStrings('Профиль');
        this.updatePictureStr = 'Изменить фото';
        this.changeUserNameStr = 'Сменить пользователя';
        this.changePasswordStr = 'Изменить пароль';
        this.supportStr = 'Поддержка';
        this.logOutStr = 'Выйти';
        this.exitStr = 'Закрыть';
        this.profileStr = 'Профиль';

        this.loginStr = 'Логин';
        this.lastnameStr = 'Фамилия';
        this.nameStr = "Имя";
        this.emailStr = 'Email';
    }

    setEnglishStrings() {
        super.setEnglishStrings('Profile');
        this.changeUserNameStr = 'Change Username';
        this.updatePictureStr = 'Update Picture';
        this.changePasswordStr = 'Change Password';
        this.supportStr = 'Support';
        this.logOutStr = 'Logout';
        this.exitStr = 'Close';
        this.profileStr = 'Profile';
        this.loginStr = 'Login';
        this.lastnameStr = 'Last name';
        this.nameStr = "Name";
        this.emailStr = 'Email';

    }

  /*  ngAfterViewInit() {
        this.getUsername();
        this.getLastName();
    }*/

 /*   updatePicture() {
        //console.log('Clicked to update picture');
    }
*/
    ionViewDidLoad() {
        super.ionViewDidLoad();
        this.getUsername();

    }

    // Present an alert with the current login populated
    // clicking OK will update the login and display it
    // clicking Cancel will close the alert and do nothing
    changeUsername() {
        let alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });

        alert.addInput({
            name: 'login',
            value: this.login,
            placeholder: 'login'
        });
        alert.addButton({
            text: 'Ok',
            handler: (data: any) => {
                localStorage.setItem('login',data.login);

                this.getUsername();
            }
        });

        alert.present();
    }

    getUsername() {
        this.login = localStorage.getItem('login');
        this.name = localStorage.getItem('name');
        this.lastname = localStorage.getItem('lastname');
        this.email = localStorage.getItem('email');
    }



    changePassword() {
        //console.log('Clicked to change password');
    }

    logout() {
        this.userData.logout();
        this.navCtrl.setRoot('LoginPage');
    }

    support() {
        this.navCtrl.push('SupportPage');
    }

    exitProfile() {
        this.navCtrl.push(TabsPage);
    }
}
