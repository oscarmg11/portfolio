import { reactive } from 'vue'
import type { WebGLRenderer } from "three";

export const renderStore = reactive<Store>({
    renderer: undefined,
    setRenderer(renderer: WebGLRenderer){
        this.renderer = renderer
    },
})

type Store = {
    renderer: WebGLRenderer | undefined,
    setRenderer: (renderer: WebGLRenderer) => void
}
