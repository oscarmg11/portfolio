import {generateRandomBoolean} from "src/utils/boolean/generateRandomBoolean.ts";

export function randomizedNumberSign(n: number): number {
    return generateRandomBoolean() ? n : n * -1
}
