import styles from "./styles.css";
import Player from "./player";
import Computer from "./computer";
import buildGrid from "./buildGrid";
import updateGrid from "./updateGrid";
import gridHit from "./gridHit";
import gridMiss from "./gridMiss";

const Game = function(){
    let lastSelectedBoatidx;
    let turn = 0;
    let started = false;
    let Player1 = new Player();
    let Player2 = new Computer();
    buildGrid(Player1, Player2);

    let gameboard1 = document.getElementById('gameboard1');
    let gameboard2 = document.getElementById('gameboard2');

    gameboard1.addEventListener('click', (e) => {
        let target = e.target;
        let x,y;
        if(started === true && turn === 1){
            turn = 0;
            let response = 'played';
            while(response === 'played'){
                [x, y] = Player2.generateAttack();
                response = Player1.isAtttacked(x,y);
            }
            if(response === 'hit'){
                gridHit(x,y,1);
                Player2.isSuccessful();
            }
            if(response === 'miss') gridMiss(x,y,1);
            return;
        }
        else if(target.classList.contains('ship') && started === false){
            const [x, y] = target.id.split(' ').slice(1).map(Number);
            lastSelectedBoatidx = Player1.gameboard.shipIndex(x, y);
            return;
        }
        
        if(lastSelectedBoatidx != undefined){
            [x, y] = target.id.split(' ').slice(1).map(Number);
            const [before, after] = Player1.gameboard.placeShip(lastSelectedBoatidx, x, y);
            updateGrid(before, after);
        }
    });

    gameboard1.addEventListener('dblclick', (e) => {
        let target = e.target;
        if(!target.classList.contains('ship') || started === true) return;
        const [x, y] = target.id.split(' ').slice(1).map(Number);
        const Shipidx = Player1.gameboard.shipIndex(x, y);
        const [before, after] = Player1.gameboard.rotateShip(Shipidx);
        updateGrid(before, after);
    });

    gameboard2.addEventListener('click', (e)=> {
        let target = e.target;
        if(target.classList.contains('block')){
            turn = 1;
            started = true;
            const [x, y] = target.id.split(' ').slice(1).map(Number);
            let response = Player2.isAttacked(x,y);
            if(response === 'played') return;
            if(response === 'hit') gridHit(x,y);
            if(response === 'miss') gridMiss(x,y);
            const click_event = new Event('click', {
                bubble: true,
                cancellable: true
            });
            gameboard1.dispatchEvent(click_event);
            }
    });

}();