export function registerVRHeightFix() {
    AFRAME.registerComponent('vr-height-fix', {
        dependencies: ['position'],

        init: function () {
            if (!AFRAME.utils.isGearVR()) {
                let position = this.el.getComputedAttribute('position');
                position.y = 1.5;
                this.el.setAttribute('position', position);
            }
        }
    });
}