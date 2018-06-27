export interface Player {
    id: string;
    name: string;
    email: string;
    gamesPlayed: number;
    gamesWon: number;
    gamesLost: number;
    gamesPlayedIn: string[];
}