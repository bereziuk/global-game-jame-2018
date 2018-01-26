export function applyTextureAnimator() {
    AFRAME.registerComponent('texture-animator', {
        schema: {
            htiles: {
                default: 1
            },
            vtiles: {
                default: 1
            },
            tiles: {
                default: 1
            },
            dur: {
                default: 10
            },
            src: {
                default: null
            }
        },

        init: function () {
            if (this.data.src == null) {
                console.log("Can't run texture-animator on element without source image.");
                return false;
            }

            // note: texture passed by reference, will be updated by the update function.
            this.tilesHorizontal = this.data.htiles;
            this.tilesVertical = this.data.vtiles;
            // how many images does this spritesheet contain?
            //  usually equals tilesHoriz * tilesVert, but not necessarily,
            //  if there at blank tiles at the bottom of the spritesheet. 

            this.numberOfTiles = this.data.tiles;
            this.texture = new THREE.ImageUtils.loadTexture(this.data.src); // Gets the texture from the element
            //this.texture = this.el.getObject3D('mesh').material.map;

            // Set image to doubleSide:
            this.el.object3DMap.mesh.material.map = this.texture;
            this.el.object3DMap.mesh.material.side = THREE.DoubleSide;

            this.texture.wrapS = this.texture.wrapT = THREE.RepeatWrapping;
            this.texture.repeat.set(1 / this.tilesHorizontal, 1 / this.tilesVertical);

            // how long should each image be displayed?
            this.tileDisplayDuration = this.data.dur;

            // how long has the current image been displayed?
            this.currentDisplayTime = 0;

            // which image is currently being displayed?
            this.currentTile = 0;
        },
        tick: function () {
            this.currentDisplayTime += 1;
            while (this.currentDisplayTime > this.tileDisplayDuration) {
                this.currentDisplayTime -= this.tileDisplayDuration;
                this.currentTile++;

                if (this.currentTile == this.numberOfTiles) {
                    this.currentTile = 0;
                }

                var currentColumn = this.currentTile % this.tilesHorizontal;
                this.texture.offset.x = currentColumn / this.tilesHorizontal;

                var currentRow = Math.floor(this.currentTile / this.tilesHorizontal);
                this.texture.offset.y = currentRow / this.tilesVertical;
            }
        },
    });
}