import {game} from "../app";

let KEY_SPACE = 32;

export function registerSceneMain() {
    AFRAME.registerComponent('scene-main', {
        init: function () {

            const mainCursor = document.getElementById("cursor-main");
            const mainCursorOrigin = mainCursor.components['raycaster'].raycaster.ray.origin;
            const mainScene = document.getElementById("scene-main");
            const mainCamera = document.getElementById("camera-main");

            mainCamera.addEventListener('gamepadbuttondown', function (e) {
                handleKeyOrButtonDown();
            });

            document.addEventListener("keydown", (event) => {
                if (event.keyCode !== KEY_SPACE) {
                    return;
                }

                handleKeyOrButtonDown();
            });

            function handleKeyOrButtonDown() {
                const shopItem = game.getHoveredItem();

                if (game.doWeDragAnyProduct()) {
                    let draggedProduct = game.getDraggedProduct();
                    game.dropDraggedProduct();
                    dropDraggedProduct(draggedProduct);
                } else {
                    if (!game.hasHoveredItem()) {
                        return;
                    }

                    game.setDraggedProduct(shopItem);
                    dragHoveredProduct(shopItem);
                }
            }

            function dragHoveredProduct(product) {
                product.pause();
                product.removeAttribute('dynamic-body');
                product.setAttribute("position", new window.AFRAME.THREE.Vector3(0, 0, -0.01));

                mainCursor.appendChild(product);

                product.play();
            }

            function dropDraggedProduct(product) {
                product.pause();
                product.setAttribute('position', mainCursorOrigin);

                mainScene.appendChild(product);
                product.setAttribute('dynamic-body', {
                    shape: 'auto',
                    mass: 1.5,
                    linearDamping: 0.005
                });

                product.play();
            }
        }
    });
}