import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-new-game',
    templateUrl: 'new-game.html',
})
export class NewGamePage {
    playerCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    currentCount = 0;
    selectOptions = {
        title: 'Players',
        subTitle: 'Select your player count',
        mode: 'md'
      };
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad NewGamePage');
    }

    getCount() {
        console.log(this.currentCount);
    }
}
