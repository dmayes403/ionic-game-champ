import { Player } from "./player.interface";

export interface Game {
    name: string;
    gameType: string;
    players: string[];
    description: string;
    startDate: Date;
    endDate: Date;
    winner: string;
}