import Gameboard from "./gameboard";
class Player {
  gameboard;
  score;
  name;

  constructor(name) {
    this.score = 0;
    this.name = name;
    this.gameboard = new Gameboard();
  }

  isAtttacked(x, y) {
    return this.gameboard.attack(x, y);
  }

  hasLost() {
    return !this.gameboard.fleetStatus();
  }
}

export default Player;
