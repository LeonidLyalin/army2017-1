import {Injectable} from '@angular/core';
import {BaseSql} from "./base-sql";
import {Http} from "@angular/http";
import {MyForumApi} from "./my-forum/my-forum-api";
/*
 Generated class for the Sqlite provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */

/*declare var window: any;*/
@Injectable()

export class MyForumSql extends BaseSql {

    public myForumApi: MyForumApi;

    constructor(public http: Http) {

        super(http, 'myforum', [
                {name: 'id', type: 'text PRIMARY KEY'},
                {name: 'user', type: 'text'},
                {name: 'my_iblock_id', type: 'text'},
                {name: 'my_id', type: 'text'}],
            'UNIQUE ("user", "my_id")'
        );

        //console.log("create MyForumSql");
        this.myForumApi = new MyForumApi(this.http);
        //  this.openDb();
    }


    /**
     * get only records which are in MyForum also
     * @returns {Promise<T>}
     */
    getEngParticipantMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            let query = 'select a.id, a.name_eng as name, a.desc_eng as desc, a.country_eng as country, ' +
                'a.address_eng as address, a.phone, a.email, a.www, a.logo, a.place, b.id as my_forum_id,' +
                ' c.name_eng as place_name, c.name_eng as place_name_place, c.coords, c.name_map from participant a, myforum b ' +
                'left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    /**
     * get only records which are in MyForum also
     * @returns {Promise<T>}
     */
    getRusParticipantMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            let query = 'select a.id, a.name_rus as name, a.desc_rus as desc, a.country_rus, ' +
                'a.address_rus as address, a.phone, a.email, a.www, a.logo, a.place, b.id as my_forum_id,' +
                ' c.name_rus as place_name, c.name_rus as place_name_place, c.coords, c.name_map from participant a, myforum b ' +
                'left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    getRusExhibitMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            // let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_rus as name, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_rus as place_name, c.name_map, c.coords' +
                ' from exhibit a, myforum b  left join place c on a.place=c.id where  a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' order by a.name_rus';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getEngExhibitMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            // let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_eng as name, a.place,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_eng as place_name, c.name_map, c.coords' +
                ' from exhibit a, myforum b  ';

            query += ' left join place c on a.place=c.id';
            let where = ' where  a.id=b.my_id';
            if (where != '') query += ' ' + where;
            if ((userId) && (userId != '')) where += ' and b.user=' + userId;
            query += where;
            query += ' order by a.name_rus';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    getRusConferenceMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            let query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.format, a.contact, ' +
                'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place,c.coords, c.name_map ' +
                'from conference a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';

            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getEngConferenceMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            let query = 'select a.id, a.name_eng as name, a.place_name, a.place, a.format_eng as format, a.contact_eng as contact, ' +
                'a.thematic_conference, a.organizer_eng as organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place,c.coords, c.name_map ' +
                'from conference a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';

            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getRusDemoProgramMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            let query = 'select a.id, a.name_rus as name, a.place_name, a.place,  ' +
                'a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place,c.coords, c.name_map ' +
                'from demo_program a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';

            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getEngDemoProgramMyForum(userId: string = '') {
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(res => {
            this.arr = [];
            let query = 'select a.id, a.name_eng as name, a.place_name, a.place, ' +
                ' a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place,c.coords, c.name_map ' +
                'from conference a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';

            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    this.arr = [];
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));
                    }
                }
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    /**
     * variant before size of the selection was reduced
     * @param {string} where
     * @returns {Promise<any>}
     */
    getRusParticipantFull(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_rus as name, a.desc_rus as desc, a.country_rus as country, ' +
                'a.address_rus as address, a.phone, a.email, a.www, a.logo, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' left join place c on a.place=c.id';

            if (where != '') query = query + ' ' + where;
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    getEngParticipantFull(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_eng as name, a.desc_eng as desc, a.country_eng as country, ' +
                'a.address_eng as address, a.phone, a.email, a.www, a.logo, a.place,' +
                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' left join place c on a.place=c.id';

            if (where != '') query = query + ' ' + where;
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getRusExhibitFull(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');

            let query = 'select a.id, a.name_rus as name, a.purpose as purpose, a.characteristics as characteristics, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '') query = query + ' ' + where;

            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getEngExhibitFull(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');

            let query = 'select a.id, a.name_eng as name, a.purpose_eng as purpose, a.characteristics_eng as characteristics, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '') query = query + ' ' + where;

            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    /**
     * get ALL records from participant and ADD a filed from MyForum
     * @returns {Promise<T>}
     */
    getRusParticipant(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_rus as name, a.place,  ' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords  ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' left join place c on a.place=c.id';
            //console.log(query);
            if (where != '') query = query + ' ' + where;

            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getRusExhibit(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_rus as name, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_rus as place_name, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '') query += ' ' + where;
            query += ' order by a.name_rus';

            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    /**
     * get ALL records from participant and ADD a filed from MyForum
     * @returns {Promise<T>}
     */
    getEngParticipant(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_eng as name, a.place,  ' +

                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;


            query += ' left join place c on a.place=c.id';

            if (where != '') query = query + ' ' + where;
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    /**
     * return list of 'conference' records when language is English
     * @param {string} where
     * @returns {Promise<any>}
     */

    getEngConference(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_eng as name, a.place_name, a.place, a.format_eng as format, a.contact_eng as contact, ' +
                'a.thematic_conference, a.organizer_eng as organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from conference a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '') query += ' ' + where;


            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    /**
     * return list of 'conference' records when language is Russian
     * @param {string} where
     * @returns {Promise<any>}
     */

    getRusConference(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.format, a.contact, ' +
                'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_map, c.coords ' +
                'from conference a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' left join place c on a.place=c.id';
            if (where != '') query += ' ' + where;


            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }


    getRusDemoProgram(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_rus as name, a.place_name, a.place,' +
                ' a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_map, c.coords ' +
                'from demo_program a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' left join place c on a.place=c.id';
            if (where != '') query += ' ' + where;


            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    getEngDemoProgram(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_eng as name, a.place_name, a.place,' +
                ' a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from demo_program a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;

            query += ' left join place c on a.place=c.id';
            if (where != '') query += ' ' + where;


            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                this.arr = [];
                if (rs.rows.length) {
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    /*  getRusExhibit(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(res => {
          this.arr = [];
          let userId = localStorage.getItem('userid');
          let query = 'select a.id, a.name_rus as name, a.place,'+
            'b.id as my_forum_id, c.name_rus as place_name_place, c.name_rus as place_name, c.name_map, c.coords'+
          'from exhibit a left join myforum b on a.id=b.my_id';
          if (userId != '') query += ' and b.user=' + userId;
          query += ' left join place c on a.place=c.id';
          if (where != '') query += where;
          query += ' order by a.name_rus';
          /!*   let query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.format, a.contact, ' +
            'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
            'b.id as my_forum_id, c.name_rus as place_name_place, c.name_map, c.coords ' +
            'from conference a left join myforum b on a.id=b.my_id ';
          if (userId != '') query += ' and b.user=' + userId;
          query += ' left join place c on a.place=c.id';
          if (where != '') query += where;


          query += ' order by a.date_event, a.time_beg, a.time_end, a.id';*!/
          //console.log(query);
          this.db.executeSql(query, [], rs => {
            //console.log("right after executeSql in getRusConference");
            //console.log(rs);
            this.arr = [];
            if (rs.rows.length) {
              this.arr=<any[]>rs.rows.item;
             /!* for (let i = 0; i < rs.rows.length; i++) {
                this.arr.push(<any>rs.rows.item(i));

              }*!/
            }
            //console.log("this.arr=", this.arr);
            res(this.arr);
          }, (e) => {
            //console.log('Sql Query Error', e);
          });
        })

      }*/


    getEngExhibit(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(res => {
            this.arr = [];
            let userId = localStorage.getItem('userid');
            let query = 'select a.id, a.name_eng as name, a.place,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_eng as place_name, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != '')) query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '') query += ' ' + where;
            query += ' order by a.name_rus';

            //console.log(query);
            this.db.executeSql(query, [], rs => {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                this.arr = [];
                if (rs.rows.length) {
                    // this.arr=<any[]>rs.rows.item;
                    for (let i = 0; i < rs.rows.length; i++) {
                        this.arr.push(<any>rs.rows.item(i));

                    }
                }
                //console.log("this.arr=", this.arr);
                res(this.arr);
            }, (e) => {
                //console.log('Sql Query Error', e);
            });
        })

    }

    /**
     *
     * @param where
     * @returns {any}
     */
    /*  getRusConferenceReturn(where: string = '') {
        //console.log('getRusConference()');
        //console.log(' where=' + where);

        this.arr = [];
        let userId = localStorage.getItem('userid');
        let query = 'select a.id, a.name_rus as name, a.name_rus_upper, a.place_name, a.place, a.format_eng as format, a.contact, ' +
          'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
          'b.id as my_forum_id, c.name_rus as place_name_place ' +
          'from conference a left join myforum b on a.id=b.my_id ';
        if (userId) query += ' ' + ' and b.user=' + userId;

        query += ' left join place c on a.place=c.id';

        //console.log(query);
        if (where != '') query += where;
        query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
        return this.db.executeSql(query, [], rs => {
            //console.log("right after executeSql in getRusConferenceReturn");
            //console.log(rs);

          },
          /!* //console.log("this.arr=", this.arr);
           return(this.arr.);*!/
          (e) => {
            //console.log('Sql Query Error', e);

          });


      }*/


    /*  //to Update any Item
      update(id, txt) {
        return new Promise(res => {
          let query = "UPDATE Todo SET todoItem=?  WHERE id=?";
          this
            .db
            .executeSql(query, [
              txt, id
            ], (s) => {
              //console.log('Update Success...', s);
              this.select().then(s => {
                res(true);
              });
            }, (err) => {
              //console.log('Updating Error', err);
            });
        })

      }*/

    /**
     *
     * @param id of deleted element
     * @returns {boolean}
     */
    delFromMyForum(id) {
        //console.log("delFromMyForum id=", id);
        return new Promise(resolve => {
            this.myForumApi.delFromMyForum(id).subscribe(res => {
                    if (res) {
                        this.delId(id);
                        resolve(true);
                    }
                    else (resolve(false))
                }
            );
        })
    }

    /**
     *
     * @param id of added element
     * @param iblockId of the infoblock in bitrix site
     * @param userId
     * @param elementList - there we will insert my_forum_id value directly to avoid waiting
     * @returns {Promise<T>}
     */
    async addToMyForumSite(id, iblockId, userId, elementList?) {
        //console.log("elementList before inserting in addToMyForumSite =", elementList);
        //console.log('add', id);
        let my_forum_id: any;
        let checkValues = await            this.checkForFieldValues([{name: "my_id", value: id, type: ''},
            {name: "user", value: userId, type: ''}]);
        //console.log("this.checkForFieldValues, res=", checkValues);
        if (checkValues == 0) {
            my_forum_id = await this.myForumApi.addToMyForumSite(iblockId, id).first().toPromise();


            //console.log("here are the results of adding through api=", my_forum_id);


            //console.log("elementList after inserting in addToMyForumSite =", elementList);
            //console.log("my_forum_id=", my_forum_id);
            //@TODO make an api and prepare all parameters for insert
            //  this.sqlMyForum.addItemAndSelect(data, this.userId, this.iblockId, id).then(res => {
            this.addItem({id: my_forum_id, user: userId, my_iblock_id: iblockId, my_id: id});
            return my_forum_id;


        }
        else return 0;

    }


}
