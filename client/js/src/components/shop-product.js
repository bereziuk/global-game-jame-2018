import {game} from '../app';

export function registerShopProduct() {
    AFRAME.registerComponent('shop-product', {
        init: function () {
            let el = this.el;

            el.addEventListener('mouseenter', () => {
                if (el.hasAttribute("already-packed")) {
                    return;
                }

                game.setHoveredItem(el);
            });

            el.addEventListener('mouseleave', () => {
                game.clearHoveredItemIfNotDragged();
            });
        }
    });
}