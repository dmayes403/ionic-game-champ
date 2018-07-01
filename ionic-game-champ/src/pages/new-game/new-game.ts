import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-new-game',
    templateUrl: 'new-game.html',
})
export class NewGamePage {
    playerCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    currentCount = 0;
    currentCountArr = [];

    selectOptions = {
        title: 'Number of Players',
        subTitle: 'Select your player count',
        mode: 'md'
    };

    selectPlayerOptions = {
        title: 'Players',
        subTitle: 'Select a Player',
        mode: 'md'
    };

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewGamePage');
    }

    getCount() {
        console.log(this.currentCount);
        this.currentCountArr = [];
        for (let i = 1; i <= this.currentCount; i++) {
            this.currentCountArr.push(i);
        }
        console.log(this.currentCountArr);
    }

    selectPlayer() {
        console.log('player selected')
    }
}
