export interface Player {
    uid: string;
    name: string;
    email: string;
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    gamesPlayedIn: string[];
}