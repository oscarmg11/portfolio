import { Scene } from "three";
import * as THREE from "three";
import { cameraStore } from "src/store/cameraStore.ts";

export function addSpotLight(scene: Scene) {
    const spotLight = new THREE.SpotLight( 0xffffff, 20, 100 );
    spotLight.position.set( 0 , 0, 5 );
    spotLight.castShadow = true;
    spotLight.penumbra = 0.5;
    scene.add( spotLight );

    const targetObject = new THREE.Object3D();
    targetObject.position.set(0,0,0)
    scene.add(targetObject);

    spotLight.target = targetObject

    cameraStore.setSpotLight(targetObject)
}
