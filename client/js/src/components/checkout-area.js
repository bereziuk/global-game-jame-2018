import {game} from "../app";
import {PRODUCT_SCANNED} from "../game";

export function registerCheckoutArea() {
    AFRAME.registerComponent('checkout-area', {
        init: function () {
            this.el.addEventListener('mouseenter', function () {
                if (!game.doWeDragAnyProduct()) {
                    return;
                }

                let draggedProduct = game.getDraggedProduct();

                if (draggedProduct.hasAttribute(PRODUCT_SCANNED)) {
                    return;
                }

                game.scanProduct(draggedProduct);
                draggedProduct.setAttribute(PRODUCT_SCANNED, true);
            });

            // this.el.addEventListener('mouseleave', function () {
            //     console.log("mouseleave");
            // });
        },
    });
}