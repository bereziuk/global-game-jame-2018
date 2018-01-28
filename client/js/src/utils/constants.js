export const colors = {
    blue: '#00bfff',
    gray: '#aaa'
};

export const PRODUCTS = [
    {
        shape: "box",
        material: { texture: { color: "#f00" }},
        scale: "0.1 0.2 0.05",
        position: "1.5 1.45 -0.15",
        type: "fruit"
    },
    {
        position: "1.5 1.55 -0.15",
        shape: "sphere",
        material: { texture: { src: "#texture-tape" }},
        radius: "0.1",
        type: "other"
    },
    {
        position: "1.5 1.55 -0.15",
        shape: "sphere",
        material: { texture: { color: "green" }},
        radius: "0.1",
        type: "broken"
    }
];

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
