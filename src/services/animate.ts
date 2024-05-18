import * as TWEEN from '@tweenjs/tween.js'
import { sceneStore } from "../store/sceneStore.ts";
import { cameraStore } from "../store/cameraStore.ts";
import { renderStore } from "../store/renderStore.ts";
import { animateCubes } from "src/services/animation/animateCubes.ts";


export function animate(){

    if(!sceneStore.scene || !cameraStore.camera) {
        setTimeout(animate, 10)
        return
    }

    animateCubes()
    TWEEN.update();

    requestAnimationFrame( animate );
    renderStore.renderer?.render( sceneStore.scene as any, cameraStore.camera as any );

    if(cameraStore.camera){
        cameraStore.camera.lookAt(cameraStore.lookAt.x, cameraStore.lookAt.y, 0)
    }

    if(cameraStore.spotLight) {
        cameraStore.spotLight.position.x = cameraStore.targetPosition.x
        cameraStore.spotLight.position.y = cameraStore.targetPosition.y
    }
}
