import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
// import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from '../../services/auth.service';
import { PlayersService } from '../../services/players.service';

import { jewels } from '../../jewels/firebaseKeys';
import { Player } from '../../interfaces/player.interface';

@Component({
    selector: 'page-new-game',
    templateUrl: 'new-game.html',
})
export class NewGamePage {
    playerCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    currentCount = 0;
    currentCountArr = [];
    availablePlayers$: Observable<Player[]>;
    // provider = new firebase.auth.GoogleAuthProvider();

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

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        // public db: AngularFireDatabase,
        private authService: AuthService,
        private playersService: PlayersService
    ) {
        this.getUsers();
    }

    getCount() {
        this.currentCountArr = [];
        for (let i = 1; i <= this.currentCount; i++) {
            this.currentCountArr.push(i);
        }
    }

    selectPlayer() {
        console.log('player selected')
    }

    signUp() {
        this.authService.signup();
    }

    signOut() {
        this.authService.signOut();
    }

    getCurrentUser() {
        this.authService.getCurrentUser();
    }

    getUsers() {
        this.availablePlayers$ = this.playersService.getUsers();
    }
}
