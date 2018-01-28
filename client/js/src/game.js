import { PRODUCTS } from "./utils/constants";

export const PRODUCT_SCANNED = 'already-scanned';
export const PRODUCT_PACKED = 'already-packed';

export class Game {
    constructor() {
        this.products = 0;
        this.scannedProducts = 0;
        this.packedProducts = 0;
        this.brokenProducts = 0;

        setTimeout(() => {
            this.generateNewProduct(10000);
        }, 2000);
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
    };
    scanProduct(produt) {
        this.scannedProducts++;
        document.querySelector('#score-panel .products-scanned').innerHTML = this.scannedProducts;
    }

    packProduct(produt) {
        this.packedProducts++;
        document.querySelector('#score-panel .products-packed').innerHTML = this.packedProducts;
    }

    generateNewProduct(timeout) {
        const tapeEntity = document.getElementById("tape-wrapper");
        const newProduct = this.getNewProduct();
        console.log(newProduct);
        tapeEntity.appendChild(newProduct);
    }

    getNewProduct() {
        const randomProductIndex = Math.floor(Math.random() * PRODUCTS.length);
        const productDefinition = PRODUCTS[randomProductIndex];
        const product = document.createElement("a-" + productDefinition.shape);

        product.setAttribute("shop-product", productDefinition.type);
        product.setAttribute("class", "clickable");
        product.setAttribute("position", productDefinition.position);
        product.setAttribute("dynamic-body", { mass: 1 });
        product.setAttribute("material", productDefinition.material);

        if (productDefinition.radius) {
            product.setAttribute("radius", productDefinition.radius);
        } else {
            product.setAttribute("scale", productDefinition.scale);
        }

        return product;
    }
}