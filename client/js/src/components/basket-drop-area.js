import {game} from "../app";
import {PRODUCT_PACKED, PRODUCT_SCANNED} from "../game";
import {playError} from "./checkout-area";
import {SOUNDS} from "../utils/constants";

export function registerBasketDropArea() {
    AFRAME.registerComponent('basket-drop-area', {
        init: function () {
            this.el.addEventListener('collide', function (e) {
                const product = e.detail.body.el;
                if (product.hasAttribute(PRODUCT_PACKED)) {
                    return;
                }

                const productType = Object.values(product.getAttribute('product-type')).join('');
                let isProductBroken = productType === 'broken';

                if (!product.hasAttribute(PRODUCT_SCANNED) && !isProductBroken) {
                    SOUNDS.playError();
                    return;
                }

                const dropAreaType = Object.values(this.getAttribute('basket-drop-area')).join('');
                if (productType !== dropAreaType) {
                    SOUNDS.playError();
                    return;
                }

                if (isProductBroken) {
                    game.brokenProduct(product);
                } else {
                    game.packProduct(product);
                }

                SOUNDS.playSuccess();
                product.removeAttribute('shop-product');
                product.setAttribute(PRODUCT_PACKED);

                game.generateNewProduct();

                removeProduct(product);
            });
        }
    });
}

export function removeProduct(product) {
    setTimeout(() => {
        product.parentNode.removeChild(product);
    }, 100);
}