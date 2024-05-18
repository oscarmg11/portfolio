import { Scene } from "three";
import * as THREE from "three";
import { cameraStore } from "src/store/cameraStore.ts";

export function addSpotLight(scene: Scene) {

    const spotLight = new THREE.PointLight( 0xffffff, 15, 100 );
    spotLight.position.set( 0,0,0 );
    spotLight.castShadow = true;
    spotLight.name = 'spotlight'
    scene.add( spotLight );

    cameraStore.setSpotLight(spotLight)
}
