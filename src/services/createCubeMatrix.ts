import {cube} from "./cube.ts";

export function createCubeMatrix() {
    for(let i = 0; i <= 12; i+=2) {
        for(let j = 0; j <= 6; j+=2) {
            for(let k = 0; k <= 4; k+=2) {
                if(i === 0 && j === 0 && k === 0){
                    cube(0, 0, 0)
                    continue
                }
                cube(i, j, -k)
                cube(-i, -j, -k)
                cube(i, -j, -k)
                cube(-i, j, -k)
            }
        }
    }
}
