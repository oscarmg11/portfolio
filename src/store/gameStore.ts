import { reactive } from 'vue'
import {sortCubesToStartGame} from "src/services/animation/sortCubesToStartGame.ts";
import {sortCubesToInitialPosition} from "src/services/animation/sortCubesToInitialPosition.ts";

export const gameStore = reactive<Store>({
    prepared: false,
    started: false,
    prepareGame(){
        this.prepared = true
        sortCubesToStartGame()
    },
    startGame(){
        this.started = true
    },
    stopGame(){
        this.started = false
        this.prepared = false
        sortCubesToInitialPosition()
    },
})

type Store = {
    prepared: boolean;
    started: boolean;
    prepareGame: () => void;
    startGame: () => void;
    stopGame: () => void;
}
