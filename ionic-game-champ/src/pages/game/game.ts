import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';

@Component({
    selector: 'page-game',
    templateUrl: 'game.html',
})
export class GamePage {
    
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
    ) {
        // this.game = this.formBuilder.group({
        //     name: [''],
        //     gameType: [''],
        //     players: [''],
        //     description: [''],
        //     startDate: [''],
        //     endDate: [''],
        //     winner: ['']
        // });
    }

    ionViewDidLoad() {
        console.log(this.navParams.data);
        console.log('ionViewDidLoad GamePage');
    }

}
