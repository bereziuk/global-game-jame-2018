export const colors = {
    blue: '#00bfff',
    gray: '#aaa'
};

export const PRODUCTS = [
    {
        type: "fruit",
        html: `<a-entity scale="0.5 0.5 0.5">
            <a-entity
                obj-model="mtl:/assets/models/products/banana/banana.mtl;obj:/assets/models/products/banana/banana.obj"
                scale="0.05 0.05 0.05" rotation="0 0 -25"></a-entity>
        <a-box scale="0.45 0.18 0.1" opacity="0.3"></a-box>
        </a-entity>`
    },
    {
        type: "other",
        html: `<a-box material="src: #texture-detergent-broken" position="0.081 1.084 1.237" scale="0.11 0.04 0.14"></a-box>`
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
