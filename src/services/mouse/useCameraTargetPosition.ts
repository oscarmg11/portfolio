
import { onMounted, onUnmounted } from 'vue'
import { cameraStore } from "src/store/cameraStore";

export function useCameraTargetPosition(): void {
    onMounted(() => {
        document.addEventListener('mousemove', handleMouseMovement)
    })

    onUnmounted(() => {
        document.removeEventListener('mousemove', handleMouseMovement)
    })

    const handleMouseMovement = (e: MouseEvent) => {
        cameraStore.setTargetPosition({
            x: getXTargetPosition(e.pageX),
            y: getYTargetPosition(e.pageY),
        })
    }

    const getYTargetPosition = (y: number) => {
        if(y < ScreenCenter.y){
            return (((y * TargetPositionYRange) / ScreenCenter.y) - TargetPositionYRange) * -1
        }

        const yPosition = y - ScreenCenter.y
        return ((yPosition * TargetPositionYRange) / ScreenCenter.y) * -1
    }

    const getXTargetPosition = (x: number) => {
        if(x < ScreenCenter.x){
            return (((x * TargetPositionXRange) / ScreenCenter.x) - TargetPositionXRange)
        }

        const xPosition = x - ScreenCenter.x
        return ((xPosition * TargetPositionXRange) / ScreenCenter.x)
    }
}

const ScreenCenter = { x: Math.floor(window.innerWidth / 2), y: Math.floor(window.innerHeight / 2) }
const TargetPositionXRange = 10
const TargetPositionYRange = 5
