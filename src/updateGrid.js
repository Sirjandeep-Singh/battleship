
const updateGrid = function(before, after){
    for(let Coord of before ){
        let block = document.getElementById(`p1 ${Coord[0]} ${Coord[1]}`);
        block.classList.remove('ship');
    }

    for(let Coord of after ){
        let block = document.getElementById(`p1 ${Coord[0]} ${Coord[1]}`);
        block.classList.add('ship');
    }
    
}

export default updateGrid;