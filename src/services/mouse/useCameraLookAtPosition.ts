
import { onMounted, onUnmounted } from 'vue'
import { cameraStore } from "src/store/cameraStore";

export function useCameraLookAtPosition(): void {
    onMounted(() => {
        document.addEventListener('mousemove', handleMouseMovement)
    })

    onUnmounted(() => {
        document.removeEventListener('mousemove', handleMouseMovement)
    })

    const handleMouseMovement = (e: MouseEvent) => {
        cameraStore.setLookAt({
            x: getXLookAtPosition(e.pageX),
            y: getYLookAtPosition(e.pageY),
        })
    }

    const getYLookAtPosition = (y: number) => {
        if(y < ScreenCenter.y){
            return (((y * LookAtYRange) / ScreenCenter.y)  - LookAtXRange) * -1
        }

        const yPosition = y - ScreenCenter.y
        return ((yPosition * LookAtYRange) / ScreenCenter.y) * -1
    }

    const getXLookAtPosition = (x: number) => {
        if(x < ScreenCenter.x){
            return (((x * LookAtXRange) / ScreenCenter.x) - LookAtXRange)
        }

        const xPosition = x - ScreenCenter.x
        return ((xPosition * LookAtXRange) / ScreenCenter.x)
    }
}

const ScreenCenter = { x: Math.floor(window.innerWidth / 2), y: Math.floor(window.innerHeight / 2) }
const LookAtXRange = 1
const LookAtYRange = 1
