export default function createShip(length:number) {
  return {
    length: length,
    hp: length,
    isSunk: false,
    hit() {
        this.hp--;
        if (this.hp === 0) {
            this.isSunk = true;
        }
    },
    getLength() {
      console.log(length);
      return length;
    },
  };
}

createShip(6).getLength();