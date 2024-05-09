import * as THREE from "three";
import { cameraStore } from "src/store/cameraStore";
import { markRaw } from "vue";

export function addCamera() {
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 5;
    camera.lookAt(0,0,0)


    cameraStore.setCamera(markRaw(camera))
}
