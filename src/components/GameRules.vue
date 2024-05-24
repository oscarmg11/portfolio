<script setup>

import Text from 'src/components/Text.vue';
import { gameStore } from 'src/store/gameStore';
import { ref, watch } from 'vue';

const readyToStartGame = ref(false)
let timeout = undefined

watch(() => gameStore.prepared, (gamePrepared) => {
    if(gamePrepared){
        document.addEventListener('keydown', handleKeyDown)
        setTimeout(() => {
            readyToStartGame.value = true
        }, 3000)
    } else {
        document.removeEventListener('keydown', handleKeyDown)
        readyToStartGame.value = false
        if(timeout) clearTimeout(timeout)
    }
})

const handleKeyDown = (e) => {
    if(e.key === 'Escape') {
        gameStore.stopGame()
        return
    }
    gameStore.startGame()
}

</script>

<template>
    <section class="gameRulesContainer" :class="{ visible: gameStore.prepared, gameStarted: gameStore.started }">
        <div class="exitMessage">
            <Text text="Press ESC to exit"  />
        </div>
        <div class="textRules">
            <Text text="Your mission is simple: use the keyboard arrows to avoid obstacles that comes to you. Challange your reflexes and try to not crash!"  />
        </div>
        <div class="message" :class="{ messageVisible: readyToStartGame }">
            <Text text="Press any keyboard to start"  />
        </div>
    </section>
</template>

<style scoped>
.gameRulesContainer {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -100vh;
    transition: top 0.3s ease-out;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
}

.visible {
    top: 0;
}

.textRules {
    width: 40vw;
    text-align: center;
}

.message {
    opacity: 0;
    font-size: 10px;
    position: absolute;
    margin: 0 auto;
    top: 60vh;
    transition: opacity 0.2s linear;
}

.messageVisible {
    opacity: 0.7;
}

.exitMessage {
    position: absolute;
    top: 2vh;
    left: 2vw;
    opacity: 0.2;
    font-size: 10px;
}

.gameStarted {
    top: 100vh
}

</style>
