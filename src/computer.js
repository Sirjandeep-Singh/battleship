import Gameboard from "./gameboard";

class Computer{
    gameboard;
    score;
    queue;
    lastAttackCoordinates;
    constructor(){
        this.lastAttackCoordinates = [];
        this.queue = [];
        this.score = 0;
        this.gameboard = new Gameboard();
        
        for(let i = 0 ; i < 5 ; i++){
            while(true){
                
                const [x , y] = this.randomCoordinates();
                let [before, after] = this.gameboard.placeShip(i,x,y);
                if(after.length > 0){
                    const dir = this.randomDirection()
                    console.log(dir,x,y);
                    this.gameboard.rotateShip(i, dir);
                    break;
                }
            }
        }

        
    }

    randomDirection(){
        const directions = ["east", "west", "north", "south"];
        const option = Math.floor(Math.random() * 4);
        return directions[option];
    }

    randomCoordinates(){
        const x = Math.floor((Math.random() * 15));
        const y = Math.floor((Math.random() * 15));
        return [x,y];
    }

    generateAttack(){
        if(this.queue.length != 0){
            const coord = this.queue.shift();
            const x = coord[0];
            const y = coord[1];
            this.lastAttackCoordinates = [x,y];
            return [x,y];
            
        }else{
            const x = Math.floor((Math.random() * 15));
            const y = Math.floor((Math.random() * 15));
            this.lastAttackCoordinates = [x,y];
            return [x,y];
        }
    }

    isAttacked(x,y){
        return this.gameboard.attack(x,y);
    }

    isSuccessful(){
        this.queue = [];
        const directions = [[1,0],[0,1],[-1,0],[0,-1]];
        for(let dir of directions){
            const nr = this.lastAttackCoordinates[0] + dir[0];
            const nc = this.lastAttackCoordinates[1] + dir[1];
            if(nr < 15 && nc < 15 && nr >=0 && nc >= 0) this.queue.push([nr, nc]);
        }
    }
} 

export default Computer;