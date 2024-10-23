// Una función constructora


class Box{
    constructor(value) {
        this.value = value;
    }
    // Propiedades de todas las cajas (boxes) creadas a partir del constructor Box()
    // tendrá
    getValue() {
        return this.value;
    }
}
  
  
const boxes = [new Box(1), new Box(2), new Box(3)];
console.log(boxes[0].getValue());
console.log(Box.prototype);
