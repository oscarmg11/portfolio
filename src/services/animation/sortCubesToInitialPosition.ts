import {Mesh} from "three";
import { sceneStore } from "src/store/sceneStore.ts";
import * as TWEEN from "@tweenjs/tween.js";
import {cubesInitialPosition} from "src/services/animation/sortCubesToStartGame.ts";

export function sortCubesToInitialPosition() {
    for(const cubeInitialPosition of cubesInitialPosition){
        const cube: Mesh = sceneStore.scene?.getObjectByName(cubeInitialPosition.cubeName) as any
        if(!cube) continue

        new TWEEN.Tween(cube.position)
            .to({ x: cubeInitialPosition.position.x, y: cubeInitialPosition.position.y, z: cubeInitialPosition.position.z }, 300)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start();
    }
}
