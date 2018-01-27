export function registerSceneMain() {
    AFRAME.registerComponent('scene-main', {
        init: function () {
            let draggableElements = document.querySelector('[click-drag]');

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
                // SPACE
                if (event.keyCode === 32) {
                    let shopItem = document.getElementById("test-sphere");
                    let shopItemAtCursor = document.getElementById("test-sphere-cursor");
                    let mainCursor = document.getElementById("cursor-main");
                    let mainCursorOrigin = mainCursor.components['raycaster'].raycaster.ray.origin;

                    shopItem.pause();
                    shopItem.setAttribute('position', mainCursorOrigin);
                    shopItemAtCursor.setAttribute("position", new window.AFRAME.THREE.Vector3(0, 0, 1));
                    shopItem.play();

                    return;
                }

                // ENTER
                if (event.keyCode === 13) {
                    let shopItem = document.getElementById("test-sphere");
                    let shopItemAtCursor = document.getElementById("test-sphere-cursor");

                    shopItem.pause();
                    shopItem.setAttribute("position", new window.AFRAME.THREE.Vector3(0, -10, 0));
                    shopItemAtCursor.setAttribute("position", new window.AFRAME.THREE.Vector3(0, 0, -0.01));
                    shopItem.play();
                }
            });
        }
    });
}