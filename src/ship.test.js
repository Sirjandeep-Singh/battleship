import Ship from "./ship";

myShip = new Ship();

test('test direction bounds', () => {
    expect(myShip.setDirection("North")).toBeTruthy();
    
});
test('test Coords bounds', () => {
    expect(myShip.setCoordinates(0,5)).toBeTruthy();
    
});
test('test length bounds', () => {
    expect(myShip.setLength(6)).toBeTruthy();
    
});
test('isHit', () => {
    expect(myShip.hit(0,5)).toBeTruthy();
    expect(myShip.hit(0,4)).toBeTruthy();
    expect(myShip.hit(0,3)).toBeTruthy();
    expect(myShip.hit(0,2)).toBeTruthy();
    expect(myShip.hit(0,1)).toBeTruthy();
    expect(myShip.hit(0,0)).toBeTruthy();
    expect(myShip.hit(99,99)).toBeFalsy();
})

test('isSunk', ()=> {
    expect(myShip.isSunk()).toBeTruthy();
})