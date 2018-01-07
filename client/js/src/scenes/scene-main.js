import { colors } from '../utils/constants';
import { setTimeout } from 'timers';

export function sceneMainInitialize() {
    const sceneMain = document.getElementById('scene-main');

    const cameraMain = document.getElementById('camera-main');

    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
            cameraMain.setAttribute('position', 'y', 5);
            setTimeout(() => {
                cameraMain.setAttribute('position', 'y', 1.6);
            }, 2000);
        }
    }
}