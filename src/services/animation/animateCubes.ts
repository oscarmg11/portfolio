import * as TWEEN from '@tweenjs/tween.js'
import { sceneStore } from "src/store/sceneStore.ts";
import { Mesh } from "three";


let tryAgainAt = 0
let cubeName = ''
let rotateVertical = false
let rotationNegative = false

export function animateCubes() {
    const now = Date.now()
    if(cubeName) {
        rotateCube(cubeName)
        return
    }

    if(now < tryAgainAt) return

    const randomNumber = Math.random().toString().replace('0.', '').split('')

    let xName = ''
    let yName = ''
    let zName = ''
    for(const char of randomNumber) {
        if(!xName) {
            if(validXNames.includes(char)){
                const isNegative = Math.random() < 0.5
                const shouldMultiplyIt = Math.random() < 0.5
                if(char !== '6'){
                    xName = `${isNegative ? '-' : ''}${char}`
                    continue
                }
                xName = `${isNegative ? '-' : ''}${shouldMultiplyIt ? 12 : 6}`

                continue
            }

            if(char === '5') {
                const isNegative = Math.random() < 0.5
                xName = `${isNegative ? '-' : ''}10`
                continue
            }

            continue
        }

        if(!yName) {
            if(validYNames.includes(char)){
                const isNegative = Math.random() < 0.5
                yName = `${isNegative ? '-' : ''}${char}`
            }
            continue
        }

        if(validZNames.includes(char)){
            const isNegative = Math.random() < 0.5
            zName = `${isNegative ? '-' : ''}${char}`
        }
    }

    cubeName = `${xName ?? 0}|${yName ?? 0}|${zName ?? 0}`
    rotateVertical = Math.random() < 0.5
    rotationNegative = Math.random() < 0.5
}

function rotateCube(currentCubeName: string) {
    const cube: Mesh = sceneStore.scene?.getObjectByName(currentCubeName) as any
    if(!cube) {
        cubeName = ''
        return
    }

    const rotation = rotationNegative ?  Math.PI / 2 : -Math.PI / 2

    new TWEEN.Tween(cube.rotation)
        .to(rotateVertical ? { y: cube.rotation.y + rotation } : { x: cube.rotation.x + rotation }, 300)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .start();

    const now = Date.now()
    tryAgainAt = now + 100
    cubeName = ''
}

const validXNames = ['0', '2', '4', '6', '8', '10', '12']
const validYNames = ['0', '2', '4', '6']
const validZNames = ['0', '2', '4']
