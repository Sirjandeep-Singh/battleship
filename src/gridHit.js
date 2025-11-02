const gridHit = function (x, y, choice = 0) {
  let block;
  if (choice === 0) {
    block = document.getElementById(`p2 ${x} ${y}`);
  } else {
    block = document.getElementById(`p1 ${x} ${y}`);
  }
  block.classList.add("hit");
};

export default gridHit;
