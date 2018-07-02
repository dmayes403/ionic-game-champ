import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class PlayersService {
    constructor(
        private db: AngularFirestore
    ) {}

    getUsers(): Observable<any> {
        return this.db.collection('Users').valueChanges();
    }
}