class Ship {
  #anchorX;
  #anchorY;
  #length;
  #direction;
  #endX;
  #endY;
  #health;

  constructor() {
    this.#anchorX = 0;
    this.#anchorY = 0;
    this.#endX = 0;
    this.#endY = 0;
    this.#direction = "east";
    this.#length = 1;
    this.#health = [true];
  }

  setCoordinates(x, y) {
    const validity = this.#checkCoordValidity(x, y);

    if (!validity) {
      return false;
    }

    this.#anchorX = x;
    this.#anchorY = y;

    return true;
  }

  #checkCoordValidity(
    x,
    y,
    direction = this.#direction,
    length = this.#length,
  ) {
    let finalX, finalY;

    if (direction === "north") {
      finalX = x;
      finalY = y - (length - 1);
    } else if (direction === "east") {
      finalX = x + (length - 1);
      finalY = y;
    } else if (direction === "west") {
      finalX = x - (length - 1);
      finalY = y;
    } else if (direction === "south") {
      finalX = x;
      finalY = y + (length - 1);
    }

    if (finalX >= 0 && finalY >= 0 && finalX < 15 && finalY < 15) {
      this.#endX = finalX;
      this.#endY = finalY;
      return true;
    }

    return false;
  }

  setLength(length) {
    const validity = this.#checkCoordValidity(
      this.#anchorX,
      this.#anchorY,
      this.#direction,
      length,
    );
    if (length < 0 || !validity) return false;
    this.#length = length;

    this.#health = new Array(length).fill(true);

    return true;
  }

  setDirection(Direction) {
    if (Direction === undefined) {
      const directions = ["north", "east", "south", "west"];
      const current = directions.indexOf(this.#direction);
      Direction = directions[(current + 1) % 4];
    }

    const validity = this.#checkCoordValidity(
      this.#anchorX,
      this.#anchorY,
      Direction.toLowerCase(),
    );

    if (!validity) return false;

    this.#direction = Direction.toLowerCase();

    return true;
  }

  hit(x, y) {
    //if x or y is in between end and anchor
    const validity = this.#validatehit(x, y);
    const isVertical = this.#anchorX == this.#endX;
    if (validity) {
      const index = isVertical
        ? Math.abs(y - this.#anchorY)
        : Math.abs(x - this.#anchorX);

      this.#health[index] = false;

      return true;
    }

    return false;
  }

  #validatehit(x, y) {
    return (
      x >= Math.min(this.#anchorX, this.#endX) &&
      x <= Math.max(this.#anchorX, this.#endX) &&
      y >= Math.min(this.#anchorY, this.#endY) &&
      y <= Math.max(this.#anchorY, this.#endY)
    );
  }

  isSunk() {
    for (let hits of this.#health) {
      if (hits == true) return false;
    }
    return true;
  }

  occupied() {
    let occupied = [];
    const isVertical = this.#anchorX === this.#endX;
    if (isVertical) {
      for (
        let i = Math.min(this.#anchorY, this.#endY);
        i <= Math.max(this.#anchorY, this.#endY);
        i++
      ) {
        occupied.push([this.#anchorX, i]);
      }
    } else {
      for (
        let i = Math.min(this.#anchorX, this.#endX);
        i <= Math.max(this.#anchorX, this.#endX);
        i++
      ) {
        occupied.push([i, this.#anchorY]);
      }
    }
    return occupied;
  }

  willOccupyXY(
    x = this.#anchorX,
    y = this.#anchorY,
    direction = this.#direction,
  ) {
    let willOccupy = [];
    let finalX, finalY;
    if (direction === "north") {
      finalX = x;
      finalY = y - (this.#length - 1);
    } else if (direction === "east") {
      finalX = x + (this.#length - 1);
      finalY = y;
    } else if (direction === "west") {
      finalX = x - (this.#length - 1);
      finalY = y;
    } else if (direction === "south") {
      finalX = x;
      finalY = y + (this.#length - 1);
    }

    const isVertical = direction === "north" || direction == "south";

    if (isVertical) {
      for (let i = Math.min(y, finalY); i <= Math.max(y, finalY); i++) {
        willOccupy.push([x, i]);
      }
    } else {
      for (let i = Math.min(x, finalX); i <= Math.max(x, finalX); i++) {
        willOccupy.push([i, y]);
      }
    }
    return willOccupy;
  }

  willOccupyDir(direction, x = this.#anchorX, y = this.#anchorY) {
    if (direction === undefined) {
      const directions = ["north", "east", "south", "west"];
      const current = directions.indexOf(this.#direction);
      direction = directions[(current + 1) % 4];
    }

    let willOccupy = [];
    let finalX, finalY;
    if (direction === "north") {
      finalX = x;
      finalY = y - (this.#length - 1);
    } else if (direction === "east") {
      finalX = x + (this.#length - 1);
      finalY = y;
    } else if (direction === "west") {
      finalX = x - (this.#length - 1);
      finalY = y;
    } else if (direction === "south") {
      finalX = x;
      finalY = y + (this.#length - 1);
    }

    const isVertical = direction === "north" || direction === "south";

    if (isVertical) {
      for (let i = Math.min(y, finalY); i <= Math.max(y, finalY); i++) {
        willOccupy.push([x, i]);
      }
    } else {
      for (let i = Math.min(x, finalX); i <= Math.max(x, finalX); i++) {
        willOccupy.push([i, y]);
      }
    }
    return willOccupy;
  }
}

export default Ship;
