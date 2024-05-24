import * as TWEEN from '@tweenjs/tween.js'
import { sceneStore } from "src/store/sceneStore.ts";
import { Mesh } from "three";
import {CubesAmount} from "src/constants/CubesAmount.ts";
import {gameStore} from "src/store/gameStore";
import {randomizedNumberSign} from "src/utils/number/randomizedNumberSign.ts";
import {generateRandomBoolean} from "src/utils/boolean/generateRandomBoolean.ts";


let tryAgainAt = 0
let cubeName = ''

export function rotateCubes() {
    if(gameStore.started) return

    const now = Date.now()
    if(cubeName) {
        rotateCube(cubeName)
        return
    }

    if(now < tryAgainAt) return

    cubeName = `cube${getCubeNumber()}`
}

function rotateCube(currentCubeName: string) {
    const cube: Mesh = sceneStore.scene?.getObjectByName(currentCubeName) as any
    if(!cube) {
        cubeName = ''
        return
    }

    const rotation = randomizedNumberSign(Math.PI / 2)

    new TWEEN.Tween(cube.rotation)
        .to(generateRandomBoolean() ? { y: cube.rotation.y + rotation } : { x: cube.rotation.x + rotation }, 300)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

    const now = Date.now()
    tryAgainAt = now + 100
    cubeName = ''
}

function getCubeNumber(): string {
    let randomNumber = Math.random().toString().replace('0.', '')
    let startSlice = 0
    let endSlice = 3

    do {

        const cubeName = randomNumber.slice(startSlice, endSlice)
        if(!cubeName) return getCubeNumber()

        if(Number(cubeName) <= CubesAmount) return Number(cubeName).toString()
        startSlice += 3
        endSlice += 3

    } while (!cubeName)

    return '0'
}
