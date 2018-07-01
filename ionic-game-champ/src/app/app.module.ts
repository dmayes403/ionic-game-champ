import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GamesPage } from '../pages/games/games';
import { PlayerPage } from '../pages/player/player';
import { StatsPage } from '../pages/stats/stats';
import { NewGamePage } from '../pages/new-game/new-game';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        GamesPage,
        PlayerPage,
        StatsPage,
        NewGamePage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        GamesPage,
        PlayerPage,
        StatsPage,
        NewGamePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
