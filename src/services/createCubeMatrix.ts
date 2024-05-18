import { createCube } from "./createCube.ts";

export function createCubeMatrix() {

    for(let i = 0; i <= 6; i+=1) {
        for(let j = 0; j <= 3; j+=1) {
            for(let k = 0; k <= 2; k+=1) {
                if(i === 0 && j === 0){
                    createCube(0, 0, -k*2)
                    continue
                }
                if(i === 0){
                    createCube(0, j*2, -k*2)
                    createCube(0, -j*2, -k*2)
                    continue
                }
                createCube(i*2, j*2, -k*2)
                createCube(-i*2, -j*2, -k*2)
                createCube(i*2, -j*2, -k*2)
                createCube(-i*2, j*2, -k*2)
            }
        }
    }
}
