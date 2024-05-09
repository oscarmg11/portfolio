
import * as THREE from 'three';
import { sceneStore } from "../store/sceneStore.ts";

export function cube(x: number, y: number, z: number) {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshPhongMaterial( { color: 0x182adb } );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = x
    cube.position.y = y
    cube.position.z = z
    sceneStore.scene?.add( cube );
}
