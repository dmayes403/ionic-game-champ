import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
    selector: 'page-games',
    templateUrl: 'games.html',
})
export class GamesPage {

    gamePage = GamePage;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GamesPage');
    }

}
