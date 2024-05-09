import { reactive } from 'vue'
import type { Camera, Object3D } from "three";

export const cameraStore = reactive<Store>({
    camera: undefined,
    spotLight: undefined,
    lookAt: {
        x: 0,
        y: 0
    },
    targetPosition: {
        x: 0,
        y: 0
    },
    setCamera(camera: Camera){
        this.camera = camera
    },
    setSpotLight(spotLight: Object3D){
        this.spotLight = spotLight
    },
    setLookAt(lookAt: Position){
        this.lookAt = lookAt
    },
    setTargetPosition(lookAt: Position){
        this.targetPosition = lookAt
    },
})

type Store = {
    camera: Camera | undefined,
    spotLight: Object3D | undefined,
    lookAt: Position;
    targetPosition: Position;
    setCamera: (camera: Camera) => void;
    setSpotLight: (spotLight: Object3D) => void;
    setLookAt: (lookAt: { x: number, y: number }) => void;
    setTargetPosition: (targetPosition: Position) => void;
}

type Position = {
    x: number;
    y: number;
}
