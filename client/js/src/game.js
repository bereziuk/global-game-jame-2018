export const PRODUCT_SCANNED = 'already-scanned';
export const PRODUCT_PACKED = 'already-packed';

export class Game {
    constructor() {
        this.scannedProducts = 0;
        this.packedProducts = 0;
    }

    setHoveredItem(product) { this.hoveredItem = product; }
    getHoveredItem() { return this.hoveredItem; }
    clearHoveredItemIfNotDragged() { if (this.hoveredItem !== this.draggedProduct) { this.hoveredItem = undefined; }}
    hasHoveredItem() { return !!this.hoveredItem; }

    getDraggedProduct() { return this.draggedProduct; }
    doWeDragAnyProduct() { return !!this.draggedProduct; }
    dropDraggedProduct() { this.draggedProduct = undefined; this.hoveredItem = undefined }
    setDraggedProduct(product) { this.draggedProduct = product; }

    scanProduct(produt) {
        this.scannedProducts++;
        document.querySelector('#score-panel .products-scanned').innerHTML = this.scannedProducts;
    };
    packProduct(produt) {
        this.packedProducts++;
        document.querySelector('#score-panel .products-packed').innerHTML = this.packedProducts;
    };

}