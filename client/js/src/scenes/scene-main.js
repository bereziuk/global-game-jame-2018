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
        }
    });

    // document.addEventListener("keydown", () => {
    //     console.log("keydown");
    // });

    // AFRAME.registerComponent('test-sphere', {
    //     init: function () {
    //         console.log("!!!");
    //
    //         let test123 = document.getElementById("test-sphere");
    //
    //         test123.addEventListener('click', function () {
    //             // test123.setAttribute('scale', {x: 2, y: 1, z: 2});
    //             console.log("click");
    //             test123.setAttribute('color', 'orange');
    //         });
    //
    //         test123.addEventListener('mouseenter', function () {
    //             // test123.setAttribute('scale', {x: 2, y: 1, z: 2});
    //             console.log("mouseenter");
    //             test123.setAttribute('color', '#24CAFF');
    //         });
    //
    //         test123.addEventListener('mousedown', function () {
    //             // test123.setAttribute('scale', {x: 2, y: 1, z: 2});
    //             console.log("mousedown");
    //             test123.setAttribute('color', '#EF2D5E');
    //         });
    //     }
    // });
}