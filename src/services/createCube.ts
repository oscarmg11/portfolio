
import * as THREE from 'three';
import { sceneStore } from "../store/sceneStore.ts";
import type { Mesh } from "three";

const cubeList: Array<{ x: number, y: number, z: number }> = []

export function createCube(x: number, y: number, z: number): Mesh | undefined {
    if(cubeList.some(cube => cube.x === x && cube.y === y && cube.z === z)){
        return
    }

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshPhongMaterial( { color: 0x182adb } );
    const cube = new THREE.Mesh( geometry, material );
    cube.name = `${x}|${y}|${z}`
    cube.position.x = x
    cube.position.y = y
    cube.position.z = z
    sceneStore.scene?.add( cube );

    cubeList.push({ x, y, z })

    return cube
}
