export function registerCheckoutArea() {
    AFRAME.registerComponent('checkout-area', {
        init: function () {
            this.el.addEventListener('mouseenter', function () {
                // tutaj wykrywamy co jest aktualnie dragowane
            });

            this.el.addEventListener('mouseleave', function () {
                console.log("mouseleave");
            });
        },
    });
}