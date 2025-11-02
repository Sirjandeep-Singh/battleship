import Gameboard from "./gameboard";
let gameboard = new Gameboard();
test('attack', () => {
    expect(gameboard.attack(0,0)).toBe('hit');
    expect(gameboard.attack(2,2)).toBe('hit');
    expect(gameboard.attack(1,3)).toBe('hit');
    expect(gameboard.attack(9,9)).toBe('miss');
    expect(gameboard.attack(1,3)).toBe('played');
});

test('placeShip', () => {
    expect(gameboard.placeShip(0,0,0)).toBeFalsy();
    expect(gameboard.placeShip(2,20,20)).toBeTruthy();
    expect(gameboard.rotateShip(1,"East")).toBeTruthy();
    expect(gameboard.rotateShip(0,"west")).toBeFalsy();
});