export function registerSceneMain() {
    AFRAME.registerComponent('scene-main', {
        init: function () {
            let draggableElements = document.querySelector('[click-drag]');
            let isItemActive = false;

            draggableElements.addEventListener("dragstart", () => {
                draggableElements.components['dynamic-body'].pause();
            });

            draggableElements.addEventListener("dragend", (dragInfo) => {
                let velocityDamp = 0.5;
                let camera = draggableElements.sceneEl.camera;
                let rotation = camera.up.clone();

                rotation.cross(camera.getWorldDirection());

                let rotatedVelocity = new window.AFRAME.THREE.Vector3(
                    dragInfo.detail.velocity.x * velocityDamp,
                    dragInfo.detail.velocity.y * velocityDamp,
                    dragInfo.detail.velocity.z * velocityDamp
                );

                rotatedVelocity.applyAxisAngle(rotation, Math.PI / 8);

                draggableElements.components['dynamic-body'].play();
                draggableElements.body.velocity.set(rotatedVelocity.x, rotatedVelocity.y, rotatedVelocity.z);
            });

            document.addEventListener("keydown", (event) => {
                if (event.keyCode !== 32) {
                    return;
                }

                if (isItemActive) {
                    isItemActive = false;
                    let shopItem = document.getElementById("test-sphere");
                    let mainCursor = document.getElementById("cursor-main");
                    let mainCursorOrigin = mainCursor.components['raycaster'].raycaster.ray.origin;
                    let mainScene = document.getElementById("scene-main");

                    shopItem.pause();
                    shopItem.setAttribute('position', mainCursorOrigin);

                    mainScene.appendChild(shopItem);
                    shopItem.setAttribute('dynamic-body', {
                        shape: 'auto',
                        mass: 1.5,
                        linearDamping: 0.005
                    });
                    shopItem.play();
                } else {
                    isItemActive = true;
                    let shopItem = document.getElementById("test-sphere");
                    let mainCursor = document.getElementById("cursor-main");

                    shopItem.pause();
                    shopItem.removeAttribute('dynamic-body');
                    shopItem.setAttribute("position", new window.AFRAME.THREE.Vector3(0, 0, -0.01));
                    mainCursor.appendChild(shopItem);
                    shopItem.play();
                }
            });
        }
    });
}