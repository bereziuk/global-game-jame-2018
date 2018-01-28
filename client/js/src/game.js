import { PRODUCTS } from "./utils/constants";

export const PRODUCT_SCANNED = 'already-scanned';
export const PRODUCT_PACKED = 'already-packed';

export class Game {
    constructor() {
        this.newProductIndex = -1;
        this.products = 0;
        this.scannedProducts = 0;
        this.packedProducts = 0;
        this.brokenProducts = 0;

        setTimeout(() => {
            this.restartGame();
        }, 5000);
    }

    setHoveredItem(product) { this.hoveredItem = product; }
    getHoveredItem() { return this.hoveredItem; }
    clearHoveredItemIfNotDragged() { if (this.hoveredItem !== this.draggedProduct) { this.hoveredItem = undefined; }}
    hasHoveredItem() { return !!this.hoveredItem; }

    getDraggedProduct() { return this.draggedProduct; }
    doWeDragAnyProduct() { return !!this.draggedProduct; }
    dropDraggedProduct() { this.draggedProduct = undefined; this.hoveredItem = undefined }
    setDraggedProduct(product) { this.draggedProduct = product; }

    brokenProduct(produt) {
        this.brokenProducts++;
        document.querySelector('#score-panel .products-broken').innerHTML = this.brokenProducts;
    }

    scanProduct(produt) {
        this.scannedProducts++;
        document.querySelector('#score-panel .products-scanned').innerHTML = this.scannedProducts;
    }

    packProduct(produt) {
        this.packedProducts++;
        document.querySelector('#score-panel .products-packed').innerHTML = this.packedProducts;
    }

    generateNewProduct() {
        const tapeEntity = document.getElementById("tape-wrapper");

        tapeEntity.appendChild(this.getNewProduct());
    }

    reloadScene() {
        const mainScene = document.getElementById("scene-main");
        mainScene.reloadScene();
    }

    getNewProduct() {
        if (this.newProductIndex >= PRODUCTS.length - 1) {
            this.newProductIndex = 0
        } else {
            this.newProductIndex++
        }
        let productIndex = this.newProductIndex;

        const productDefinition = PRODUCTS[productIndex];
        const product = $(productDefinition.html)[0];

        product.setAttribute("dynamic-body", { mass: 1 });
        product.setAttribute("product-type", "" + productDefinition.type + "");
        product.setAttribute("class", "clickable");
        product.setAttribute("position", "1 1.35 -0.15");
        product.setAttribute("shop-product", "true");

        return product;
    }

    setHUDText(text) {
        const hud = document.getElementById("hud");
        hud.setAttribute("value", text);
    }

    setHUDText(text) {
        const hud = document.getElementById("hud");
        hud.setAttribute("value", text);
    }

    restartGame() {
        this.products = 0;
        this.scannedProducts = 0;
        this.packedProducts = 0;
        this.brokenProducts = 0;

        this.generateNewProduct();

        this.setHUDText("");

        setTimeout(() => {
            this.setHUDText("Koniec gry");
            
            
            setTimeout(() => {
                console.log("reset");
                this.setHUDText("Reset");
                
                setTimeout(() => {
                    console.log("Start");
                    this.restartGame();
                }, 1000);
            }, 1000);
        }, 6000);
    }
}