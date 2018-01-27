import {game} from '../app';

export function registerShopProduct() {
    AFRAME.registerComponent('shop-product', {
        init: function () {
            let el = this.el;

            el.addEventListener('mouseenter', () => {
                game.setHoveredItem(el);
                console.log('mouseenter');
            });

            el.addEventListener('mouseleave', () => {
                game.clearHoveredItemIfNotDragged();
                console.log('mouseleave');
            });

        }
    });
}