const buildGrid = function (Player1, Player2, choice = 0) {
  let gameboard1 = document.getElementById("gameboard1");
  let gameboard2 = document.getElementById("gameboard2");
  gameboard1.innerHTML = "";
  gameboard2.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      let block = document.createElement("div");
      block.classList.add("block");
      if (Player1.gameboard.blockStatus[i][j] === "occupied" && choice === 0)
        block.classList.add("ship");
      block.id = `p1 ${i} ${j}`;
      gameboard1.appendChild(block);
    }
  }

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      let block = document.createElement("div");
      block.classList.add("block");
      if (Player2.gameboard.blockStatus[i][j] === "occupied" && choice === 1)
        block.classList.add("ship");
      block.id = `p2 ${i} ${j}`;
      gameboard2.appendChild(block);
    }
  }
};

export default buildGrid;
