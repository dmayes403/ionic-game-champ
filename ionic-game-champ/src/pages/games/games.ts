import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewGamePage } from '../new-game/new-game';

@Component({
    selector: 'page-games',
    templateUrl: 'games.html',
})
export class GamesPage {

    newGamePage = NewGamePage;
    
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams
    ) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad GamesPage');
    }

}
