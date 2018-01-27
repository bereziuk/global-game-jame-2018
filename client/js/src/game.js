export var game = new Game();

class Game {
    constructor() {
        this.scannedProducts = 0;
    }
    scanProduct(produt) {
        this.scannedProducts++;
        console.log(this.scannedProducts);
    };

}