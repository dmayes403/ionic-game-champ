import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
    provider = new firebase.auth.GoogleAuthProvider();

    constructor(
        private firebaseAuth: AngularFireAuth
    ) {
        this.user = firebaseAuth.authState;
    }

    signup() {
        this.firebaseAuth.auth.signInWithPopup(this.provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(console.log)
    }
}