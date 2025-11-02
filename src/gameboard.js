import Ship from "./ship";
class Gameboard{
    blockStatus;
    #ships;
    constructor(){
        this.blockStatus = Array.from({length : 15}, () => Array(15).fill('block'));
        this.#ships = Array.from({ length: 5 }, () => new Ship());

        this.#ships.forEach((ship, it) => {
            
            ship.setDirection("North");

            ship.setCoordinates(it, 5);

            ship.setLength(6 - it);

            let occupied = ship.occupied();
            
            occupied.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');
        });
    }

    attack(x,y){
        if(this.blockStatus[x][y] === true || this.blockStatus[x][y] === false ) return 'played';
        
        if(this.blockStatus[x][y] === 'occupied'){
            let result = false;

            result = this.#ships.some( ship => ship.hit(x,y));

            if(result === true){
                this.blockStatus[x][y] = true;
                return 'hit';
            }
        }
        this.blockStatus[x][y] = false;

        return 'miss';
    }   

    placeShip(i,x,y){
        let occupiedFirst = this.#ships[i].occupied();
        occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'block');
        let willOccupy = this.#ships[i].willOccupyXY(x,y);
        willOccupy = willOccupy.filter(([x,y]) => x > 0 && y > 0 && x < 15 && y < 15);
        let overlap;
        overlap = willOccupy.some((coord) => this.blockStatus[coord[0]][coord[1]] === 'occupied' );
        if(overlap === true){
            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');
            return [[],[]];
        }
        
        let result;

        result = this.#ships[i].setCoordinates(x,y);

        if(result === false){
            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');
            return [[],[]];
        }

        willOccupy.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');
        return [occupiedFirst, willOccupy]; 
        
    }

    rotateShip(i,direction){
        let occupiedFirst = this.#ships[i].occupied();
        occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'block');
        let willOccupy = this.#ships[i].willOccupyDir(direction);
        let overlap = false;
        willOccupy = willOccupy.filter(([x,y]) => x > 0 && y > 0 && x < 15 && y < 15);
        overlap = willOccupy.some((coord) => this.blockStatus[coord[0]][coord[1]] === 'occupied' );

        if(overlap === true){
            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');
            return [[],[]];
        }

        let result = false;

        result = this.#ships[i].setDirection(direction);

        if(result === false){
            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');
            return [[],[]];
        }

        willOccupy.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');
        return [occupiedFirst, willOccupy]; 

    }

    fleetStatus(){
        return this.#ships.some(ship => !ship.isSunk());
    }

    shipIndex(x,y){
        for(let i = 0 ; i < this.#ships.length ; i++){
            const occupied = this.#ships[i].occupied();
            if(occupied.some( coord => coord[0] == x && coord[1] == y)){
                return i;
            } 
        }
    }

}

export default Gameboard;