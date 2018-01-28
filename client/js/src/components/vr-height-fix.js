export function registerVRHeightFix() {
    AFRAME.registerComponent('vr-height-fix', {
        dependencies: ['position'],

        init: function () {
            if (!AFRAME.utils.isGearVR()) {
                return;
            }

                let position = this.el.getComputedAttribute('position');
                position.y = -1.2;
                this.el.setAttribute('position', position);
        }
    });
}