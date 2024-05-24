import { CubesAmount} from "src/constants/CubesAmount.ts";
import {Mesh} from "three";
import { sceneStore } from "src/store/sceneStore.ts";
import * as TWEEN from "@tweenjs/tween.js";
import { randomizedNumberSign } from "src/utils/number/randomizedNumberSign.ts";

export function sortCubesToStartGame() {
    for(let i = 0; i <= CubesAmount; i++){
        const cubeName = `cube${i}`
        const cube: Mesh = sceneStore.scene?.getObjectByName(cubeName) as any
        if(!cube) continue

        const xNoise = Math.random() * randomizedNumberSign(3)
        const zNoise = Math.random() * randomizedNumberSign(1)

        cubesInitialPosition.push({
            cubeName,
            position: {
                x: cube.position.x,
                y: cube.position.y,
                z: cube.position.z,
            }
        })

        if (cube.position.x < 0) {
            new TWEEN.Tween(cube.position)
                .to({ x: -10 + xNoise, z: cube.position.z + zNoise }, 300)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
        } else {
            new TWEEN.Tween(cube.position)
                .to({ x: 10 + xNoise, z: cube.position.z + zNoise }, 300)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .start();
        }
    }
}

export const cubesInitialPosition: Array<CubeInitialPosition> = []

type CubeInitialPosition = {
    cubeName: string;
    position: {
        x: number;
        y: number;
        z: number
    }
}
