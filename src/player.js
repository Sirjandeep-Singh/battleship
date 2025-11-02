import Gameboard from "./gameboard";
class Player{
    gameboard;
    score;
    name;
    
    constructor(name){
        this.score = 0;
        this.name = name;
        this.gameboard = new Gameboard();
    }

    isAtttacked(x,y){
        return this.gameboard.attack(x,y);
    }

}

export default Player;