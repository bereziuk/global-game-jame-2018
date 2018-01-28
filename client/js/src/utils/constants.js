export const colors = {
    blue: '#00bfff',
    gray: '#aaa'
};

export var PRODUCTS = shuffle(shuffle(shuffle([

    { type: "other", html: `<a-entity geometry="primitive: box" material="src: #texture-rice" scale="0.15 0.04 0.2"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: box" material="src: #texture-rice-broken" scale="0.15 0.04 0.2"></a-entity>` },

    { type: "other", html: `<a-entity geometry="primitive: box" material="src: #texture-pasta" scale="0.2 0.05 0.2" rotation="90 0 -15"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: box" material="src: #texture-pasta-broken" scale="0.2 0.05 0.2" rotation="90 0 15"></a-entity>` },

    { type: "fruit", html: `<a-entity geometry="primitive: sphere; radius: 0.07" material="src: #texture-apple"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: sphere; radius: 0.07" material="src: #texture-apple-broken"></a-entity>` },

    { type: "fruit", html: `<a-entity geometry="primitive: sphere; radius: 0.08" material="src: #texture-orange"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: sphere; radius: 0.08" material="src: #texture-orange-broken"></a-entity>` },

    { type: "other", html: `<a-box material="src: #texture-detergent" scale="0.3 0.1 0.35" rotation="90 0 -15"></a-box>` },
    { type: "broken", html: `<a-box material="src: #texture-detergent-broken" scale="0.3 0.1 0.35" rotation="90 0 -25"></a-box>` },

    { type: "other", html: `<a-entity geometry="primitive: box" material="src: #texture-candy" scale="0.2 0.05 0.1"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: box" material="src: #texture-candy-broken" scale="0.2 0.05 0.1"></a-entity>` },

    { type: "other", html: `<a-entity geometry="primitive: box" material="src: #texture-cookies" scale="0.2 0.1 0.3"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: box" material="src: #texture-cookies-broken" scale="0.2 0.1 0.3"></a-entity>` },

    { type: "fruit", html: `<a-entity geometry="primitive: sphere; radius: 0.07" material="src: #texture-onion"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: sphere; radius: 0.07" material="src: #texture-onion-broken"></a-entity>` },

    { type: "fruit", html: `<a-entity geometry="primitive: sphere; radius: 0.07" material="src: #texture-tomato"></a-entity>` },
    { type: "broken", html: `<a-entity geometry="primitive: sphere; radius: 0.07" material="src: #texture-tomato-broken"></a-entity>` },

    {
        type: "fruit",
        html: `<a-entity scale="0.5 0.5 0.5">
            <a-entity
                obj-model="mtl:/assets/models/products/banana/banana.mtl;obj:/assets/models/products/banana/banana.obj"
                scale="0.05 0.05 0.05" rotation="0 0 -25"></a-entity>
        <a-box scale="0.45 0.18 0.1" opacity="0.3"></a-box>
        </a-entity>`
    },
])));

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
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
