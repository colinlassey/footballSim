type teamNum = -1 | 0 | 1;
type Down = 1 | 2 | 3 | 4;
type Play = "run" | "pass";

class Player {
    name: string;
    position: string;
    rating: number;

    constructor(name, position, rating) {
        this.name = name;
        this.position = position;
        this.rating = rating;
    }
}

class Team {
    name: string;
    players: Array<Player>;

    constructor(name, players) {
        this.name = name;
        this.players = players;
    }
}

class Game {
    homeTeam: Team;
    awayTeam: Team;
    maxQuarters: 4;
    // maxTime is in seconds, per quarter
    maxTime: 900;
    quarter: number;
    time: number;
    possession: teamNum;
    down: number;
    toGo: number;
    yardLine: number;
    playClock: number;

    constructor(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.quarter = 0;
        this.time = 0;
        this.possession = -1;
    }

    startGame() {
        this.quarter = 1;
        this.time = 900;
        console.log('game started...');
    }

    coinToss() {
        let random : number = Math.random();
        if (random <= 0.49) {
            this.possession = 0;
            console.log('home team wins!');
        } else {
            this.possession = 1;
            console.log('away team wins!');
        }
    }

    kickoff() {
        let random : number = Math.random();
        if (random < 0.8) {
            console.log('Touchback');
        } else if (random > 0.81 && random < 0.95) {

            console.log('Bringing it out!');
        } else {
            this.yardLine = 40;
            console.log('Penalty');
        }
    }

    runPlay(type: Play) {
        if (type == 'run') {
            let random : number = Math.random();
            let rating1 : number = this.homeTeam.players[1].rating * random;
            let rating2 : number = this.awayTeam.players[1].rating * random;

            if (rating1 > rating2) {
                console.log('Home Team scores!');
            } else {
                console.log('Away Team scores!');
            }
        } else if (type == 'pass') {
            let random : number = Math.random();
            let rating1 : number = this.homeTeam.players[0].rating * random;
            let rating2 : number = this.awayTeam.players[0].rating * random;

            if (rating1 > rating2) {
                console.log('Home Team scores!');
            } else {
                console.log('Away Team scores!');
            }
        }
    }
}

const player1 = new Player("Jared Goff", "QB", 8);
const player2 = new Player("Jahmyr Gibbs", "RB", 8);
const team1 = new Team("Detroit Lions", [player1, player2]);
const player3 = new Player("Sam Darnold", "QB", 7);
const player4 = new Player("Aaron Jones", "RB", 8);
const team2 = new Team("Minnesota Vikings", [player3, player4]);

const game = new Game(team1, team2);
game.startGame();
game.coinToss();
game.kickoff();
game.runPlay("run");
game.runPlay("pass");
