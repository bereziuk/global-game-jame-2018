export const colors = {
    blue: '#00bfff',
    gray: '#aaa'
};

export const SOUNDS = {
    playBeep: function () {
        new Audio("/assets/sounds/product-scanned.mp3").play();
    },

    playError: function () {
        new Audio("/assets/sounds/product-error.mp3").play();
    },

    playSuccess: function () {
        new Audio("/assets/sounds/product-success.mp3").play();
    }
};