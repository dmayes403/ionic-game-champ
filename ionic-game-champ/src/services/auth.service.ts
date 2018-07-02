import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

import { Player } from '../interfaces/player.interface';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
    provider = new firebase.auth.GoogleAuthProvider();

    constructor(
        private firebaseAuth: AngularFireAuth,
        private db: AngularFirestore
    ) {
        this.user = firebaseAuth.authState;
    }

    signup() {
        this.firebaseAuth.auth.signInWithPopup(this.provider)
            .then(result => {
                const authUser = result.user;
                this.db.collection('Users', ref => ref.where('uid', '==', `${authUser.uid}`))
                    .valueChanges().subscribe(user => {
                        console.log(authUser);
                        if (user.length < 1) {
                            const newUser: Player = {
                                uid: authUser.uid,
                                name: authUser.displayName,
                                email: authUser.email,
                                gamesPlayed: 0,
                                gamesWon: 0,
                                gamesLost: 0,
                                gamesPlayedIn: [],
                                photoUrl: authUser.photoURL
                            }
                            this.db.collection('Users').add(newUser);
                        }
                    })
            })
            .catch(console.log)
    }

    signOut() {
        this.firebaseAuth.auth.signOut();
    }

    getCurrentUser() {
        console.log(firebase.auth().currentUser);
        // this.db.collection('Users').valueChanges().subscribe(users => {
        //     console.log(users);
        // });

        this.db.collection('Users', ref => ref.where('uid', '==', 'tests'))
            .valueChanges().subscribe(user => {
                console.log(user);
            })
    }
}