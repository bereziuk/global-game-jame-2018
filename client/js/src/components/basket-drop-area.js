import {game} from "../app";

export function registerBasketDropArea() {
    AFRAME.registerComponent('basket-drop-area', {
        init: function () {
            this.el.addEventListener('collide', function (e) {

                console.log('Player has collided with body #', e.detail);
                e.detail.target.el;  // Original entity (basketDropAreas).

                const product = e.detail.body.el;

                if (product.hasAttribute("already-packed")) {
                    return;
                }

                game.packProduct(product);

                product.removeAttribute('shop-product');
                product.setAttribute('already-packed');
            });

        }
    });
}