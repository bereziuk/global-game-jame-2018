import {game} from "../app";
import {PRODUCT_SCANNED} from "../game";
import {SOUNDS} from "../utils/constants";

export function registerCheckoutArea() {
    AFRAME.registerComponent('checkout-area', {
        init: function () {
            this.el.addEventListener('mouseenter', function () {
                if (!game.doWeDragAnyProduct()) {
                    return;
                }

                let draggedProduct = game.getDraggedProduct();

                const productType = Object.values(draggedProduct.getAttribute('product-type')).join('');
                if (productType === "broken") {
                    SOUNDS.playError();
                    return;
                }

                if (draggedProduct.hasAttribute(PRODUCT_SCANNED)) {
                    return;
                }

                const scannerType = Object.values(this.getAttribute('checkout-area')).join('');
                if (scannerType !== productType) {
                    SOUNDS.playError();
                    return;
                }

                game.scanProduct(draggedProduct);
                SOUNDS.playBeep();
                draggedProduct.setAttribute(PRODUCT_SCANNED, true);
            });

            // this.el.addEventListener('mouseleave', function () {
            //     console.log("mouseleave");
            // });
        },
    });
}