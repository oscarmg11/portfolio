import { reactive } from 'vue'
import type { Scene } from "three";

export const sceneStore = reactive<Store>({
    scene: undefined,
    setScene(scene: Scene){
        this.scene = scene
    },
})

type Store = {
    scene: Scene | undefined,
    setScene: (scene: Scene) => void
}
