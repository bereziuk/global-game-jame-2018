export function registerSceneMain() {
    AFRAME.registerComponent('scene-main', {
        init: function () {
            let draggableElements = document.getElementById("test-sphere");

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
        }
    });
}