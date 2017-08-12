import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {SettingsPage} from '../pages/settings/settings';
import {AccountPage} from '../pages/account/account';

import {ParticipantSql} from '../providers/participant-sql';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {StatusBar} from "@ionic-native/status-bar";
import {ParticipantPage} from "../pages/participant/participant";

import {ParticipantApi} from "../providers/participant/participant-api.service";

import {SQLite} from '@ionic-native/sqlite'
import {MyForumPage} from "../pages/my-forum/my-forum";
import {MyForumApi} from "../providers/my-forum/my-forum-api";
import {MyForumSql} from "../providers/my-forum-sql";
import {ParticipantDetailPage} from "../pages/participant-detail/participant-detail";
import {UserData} from "../providers/user-data";
import {LoginPage} from "../pages/login/login";
import {IonicStorageModule} from '@ionic/storage';

import {SupportPage} from "../pages/support/support";
import {SignupPage} from "../pages/signup/signup";


import {TutorialPage} from "../pages/tutorial/tutorial";
import {UserApi} from "../providers/user/user-api.service";

import {ParkPatriotPage} from "../pages/park-patriot-all/park-patriot/park-patriot";
import {WarTacticPage} from "../pages/park-patriot-all/war-tactic-page/war-tactic-page";

import {SectorVksPage} from "../pages/park-patriot-all/sektor-vks-page/sector-vks-page";
import {DemoOpkPage} from "../pages/park-patriot-all/demo-opk-page/demo-opk-page";


import {PlaceSql} from '../providers/place-sql/place-sql';
import {ThematicSql} from '../providers/thematic-sql';
import {ThematicPage} from "../pages/thematic/thematic";
import {ThematicApi} from "../providers/thematic/thematic-api-service";

import {PlaceApi} from "../providers/place/place-api-service";

import {DrawFunctionProvider} from '../providers/draw-function/draw-function';
import {ConferenceSql} from '../providers/conference-sql/conference-sql';
import {ThematicConferenceSql} from '../providers/thematic-conference-sql/thematic-conference-sql';
import {ConferencePage} from "../pages/conference/conference";
import {ConferenceApi} from "../providers/conference-sql/conference-api-service";

import {MapSql} from "../providers/map-sql/map-sql";

import {ConferenceDetailPage} from "../pages/conference-detail/conference-detail";
import {BaseApi} from "../providers/base-api-service";

import {MapBaseProvider} from '../providers/map-base/map-base';
import {LeafletMapPage} from "../pages/leaflet-map/leaflet-map";
import {FilterPage} from "../pages/filter/filter";
import {FilterParticipantPage} from "../pages/filter/filter-participant/filter-participant";
import {FilterParticipantProvider} from '../providers/filter-provider/filter-participant-provider';
import {LanguageProvider} from '../providers/language/language';
import {FilterConferenceProvider} from "../providers/filter-provider/filter-conference-provider";
import {FilterConferencePage} from "../pages/filter/filter-conference/filter-conference";
import {DemoProgramPage} from "../pages/demo-program/demo-program";

import {TableActionSql} from "../providers/table-action-sql/thematic-action-sql";
import {BaseLangPageProvider} from '../providers/base-lang-page/base-lang-page';
import {ParticipantHelpPage} from "../pages/help/participant-help/participant-help";
import {ConferenceHelpPage} from "../pages/help/conference-help/conference-help";
import {BaseListPageProvider} from '../providers/base-list-page/base-list-page';
import {CustomIconsModule} from 'ionic2-custom-icons';
import {MapHelpPage} from "../pages/help/map-help/map-help";
import {QrScannerPage} from "../pages/qr-scanner/qr-scanner";
import {BarScannerPage} from "../pages/bar-scanner/bar-scanner";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {ExhibitPage} from "../pages/exhibit/exhibit";
import {FilterExhibitPage} from "../pages/filter/filter-exhibit/filter-exhibit";
import {ExhibitHelpPage} from "../pages/help/exhibit-help/exhibit-help";
import {ExhibitApiService} from "../providers/exhibit/exhibit-api-service";
import {ExhibitSql} from "../providers/exhibit/exhibit-sql";
import {FilterExhibitProvider} from "../providers/filter-provider/filter-exhibit-provider";
import {ExhibitDetailPage} from "../pages/exhibit-detail/exhibit-detail";
import {DemoProgramDetailPage} from "../pages/demo-program-detail/demo-program-detail";
import {FilterDemoProgramProvider} from "../providers/filter-provider/filter-demo-program-provider";
import {FilterDemoProgramPage} from "../pages/filter/filter-demo-program/filter-demo-program";
import {DemoProgramHelpPage} from "../pages/help/demo-program-help/demo-program-help";
import {HowToGetPage} from "../pages/how-to-get/how-to-get";
import {HowToGetPatriotPage} from "../pages/how-to-get/how-to-get-patriot/how-to-get-patriot";
import {HowToGetPatriotByCarPage} from "../pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-car/how-to-get-patriot-by-car";
import {HowToGetPatriotByTransportPage} from "../pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-transport/how-to-get-patriot-by-transport";
import {HowToGetPatriotByTransportKievPage} from "../pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-transport-kiev/how-to-get-patriot-by-transport-kiev";
import {HowToGetRoutesPage} from "../pages/how-to-get/how-to-get-routes/how-to-get-routes";
import {AboutForumPage} from "../pages/about-forum/about-forum";
import {PatriotPage} from "../pages/patriot/patriot";
import {PatriotDetailPage} from "../pages/patriot-detail/patriot-detail";
import {PatriotSql} from "../providers/patriot/patriot-sql";




@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        AboutForumPage,
        HomePage,
        TabsPage,
        SettingsPage,
        AccountPage,
        ParticipantPage,
        MyForumPage,
        ParticipantDetailPage,
        LoginPage,
        SupportPage,
        SignupPage,
        TutorialPage,
        ParkPatriotPage,
        WarTacticPage,

        SectorVksPage,
        DemoOpkPage,
        ThematicPage,
        ConferencePage,
        ConferenceDetailPage,
        LeafletMapPage,
        FilterPage,
        FilterParticipantPage,
        FilterConferencePage,
        FilterExhibitPage,
        DemoProgramPage,
        ParticipantHelpPage,
        ConferenceHelpPage,
        ExhibitHelpPage,
        MapHelpPage,
        QrScannerPage,
        BarScannerPage,
        ExhibitPage,
        ExhibitDetailPage,
        DemoProgramDetailPage,
        FilterDemoProgramPage,
        DemoProgramHelpPage,
        HowToGetPage,
        HowToGetPatriotPage,
        HowToGetPatriotByCarPage,
        HowToGetPatriotByTransportPage,
        HowToGetPatriotByTransportKievPage,
        HowToGetRoutesPage,
        PatriotDetailPage,
        PatriotPage


    ],
    imports: [
        BrowserModule,
        IonicStorageModule.forRoot(),
        HttpModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: ''
        }, {
            links: [
                {component: TabsPage, name: 'TabsPage', segment: 'tabs-page'},
                {component: AboutPage, name: 'About', segment: 'about'},
                {component: TutorialPage, name: 'Tutorial', segment: 'tutorial'},
                {component: SupportPage, name: 'SupportPage', segment: 'support'},
                {component: LoginPage, name: 'LoginPage', segment: 'login'},
                {component: AccountPage, name: 'AccountPage', segment: 'account'},
                {component: SignupPage, name: 'SignupPage', segment: 'signup'}
            ]
        }),
        CustomIconsModule

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        AboutForumPage,
        HomePage,
        TabsPage,
        SettingsPage,
        AccountPage,
        ParticipantPage,
        ConferencePage,
        MyForumPage,
        ParticipantDetailPage,
        LoginPage,
        SupportPage,
        SignupPage,
        TutorialPage,
        ParkPatriotPage,
        WarTacticPage,
        PatriotDetailPage,
        PatriotPage,
        SectorVksPage,
        DemoOpkPage,
        LeafletMapPage,
        FilterPage,
        DemoProgramPage,
        ParticipantHelpPage,
        ConferenceHelpPage,
        ExhibitHelpPage,
        MapHelpPage,
        QrScannerPage,
        BarScannerPage,
        ExhibitPage,
        ExhibitDetailPage,
        ConferenceDetailPage,
        DemoProgramDetailPage,
        FilterDemoProgramPage,
        DemoProgramHelpPage,
        HowToGetPage,
        HowToGetPatriotPage,
        HowToGetPatriotByCarPage,
        HowToGetPatriotByTransportPage,
        HowToGetPatriotByTransportKievPage,
        HowToGetRoutesPage


    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
        SplashScreen,
        StatusBar,
        SQLite,
        ParticipantApi,
        MyForumApi,
        UserApi,
        UserData,
        ParticipantSql,
        PlaceApi,
        MyForumSql,
        PlaceSql,
        ThematicSql,
        ThematicApi,
        DrawFunctionProvider,
        ThematicConferenceSql,
        ConferenceSql,
        ThematicConferenceSql,
        ConferenceApi,
        ConferenceApi,
        MapSql,
        BaseApi,
        MapBaseProvider,
        FilterParticipantPage,
        FilterConferencePage,
        FilterExhibitPage,
        LanguageProvider,
        FilterParticipantProvider,
        FilterConferenceProvider,
        TableActionSql,
        BaseLangPageProvider,
        BaseListPageProvider,
        //QRScanner,
        BarcodeScanner,
        ExhibitApiService,
        ExhibitSql,
        FilterExhibitProvider,
        FilterDemoProgramProvider,
        PatriotSql



    ]
})
export class AppModule {
}
