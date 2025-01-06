var Player = /** @class */ (function () {
    function Player(name, position, rating) {
        this.name = name;
        this.position = position;
        this.rating = rating;
    }
    return Player;
}());
var Team = /** @class */ (function () {
    function Team(name, players) {
        this.name = name;
        this.players = players;
    }
    return Team;
}());
var Game = /** @class */ (function () {
    function Game(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.quarter = 0;
        this.time = 0;
        this.possession = -1;
    }
    Game.prototype.startGame = function () {
        this.quarter = 1;
        this.time = 900;
        console.log('game started...');
    };
    Game.prototype.coinToss = function () {
        var random = Math.random();
        if (random <= 0.49) {
            this.possession = 0;
            console.log('home team wins!');
        }
        else {
            this.possession = 1;
            console.log('away team wins!');
        }
    };
    Game.prototype.kickoff = function () {
        var random = Math.random();
        if (random < 0.8) {
            console.log('Touchback');
        }
        else if (random > 0.81 && random < 0.95) {
            console.log('Bringing it out!');
        }
        else {
            this.yardLine = 40;
            console.log('Penalty');
        }
    };
    Game.prototype.runPlay = function (type) {
        if (type == 'run') {
            var random = Math.random();
            var rating1 = this.homeTeam.players[1].rating * random;
            var rating2 = this.awayTeam.players[1].rating * random;
            if (rating1 > rating2) {
                console.log('Home Team scores!');
            }
            else {
                console.log('Away Team scores!');
            }
        }
        else if (type == 'pass') {
            var random = Math.random();
            var rating1 = this.homeTeam.players[0].rating * random;
            var rating2 = this.awayTeam.players[0].rating * random;
            if (rating1 > rating2) {
                console.log('Home Team scores!');
            }
            else {
                console.log('Away Team scores!');
            }
        }
    };
    return Game;
}());
var player1 = new Player("Jared Goff", "QB", 8);
var player2 = new Player("Jahmyr Gibbs", "RB", 8);
var team1 = new Team("Detroit Lions", [player1, player2]);
var player3 = new Player("Sam Darnold", "QB", 7);
var player4 = new Player("Aaron Jones", "RB", 8);
var team2 = new Team("Minnesota Vikings", [player3, player4]);
var game = new Game(team1, team2);
game.startGame();
game.coinToss();
game.kickoff();
game.runPlay("run");
game.runPlay("pass");
