export function registerBasketDropArea() {
    AFRAME.registerComponent('basket-drop-area', {
        init: function () {
            this.el.addEventListener('collide', function (e) {
                console.log('Player has collided with body #', e.detail);
                e.detail.target.el;  // Original entity (basketDropAreas).
                e.detail.body.el;    // Other entity, which basketDropAreas touched.
            });

        }
    });
}