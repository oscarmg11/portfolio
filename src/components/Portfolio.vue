<script setup>

import Text from 'src/components/Text.vue';
import GameRules from 'src/components/GameRules.vue';
import { gameStore } from 'src/store/gameStore';

</script>

<template>
    <main class="main">
        <GameRules />
        <div class="container" :class="{ portfolioHidden: gameStore.prepared }">
            <section class="profile" >
                <div class="imageContainer">
                    <img src='/selfie.jpg' class="image" :alt="$t('Selfie of my self')" />
                </div>
            </section>
            <section class="portfolio">
                <Text text="Hello! I'm Oscar Moreno, i'm a frontend developer passionated by videogames, movies and programming." class-name="description" />
                <Text text="I consider myself a person with analytic abilities, intuitive and capable of acquire knowledge in a efficient and autodidact way. My passion about technologies and digital entertainment pushes me to improve constantly and to look for new ways to apply my skills in innovative projects." class-name="description" />
                <div class="linksContainer">
                    <a href="https://www.linkedin.com/in/%C3%B3scar-moreno-534b3a1b8/" target="_blank">
                        <img src="/linkedin.png" :alt="$t('linkedin icon')"  class="icon" />
                    </a>
                    <a href="https://github.com/oscarmg11" target="_blank">
                        <img src="/github.png" :alt="$t('github icon')"  class="icon" />
                    </a>
                </div>
                <button class="button" @click="gameStore.prepareGame()">{{ $t('PLAY') }}</button>
            </section>
        </div>
    </main>
</template>

<style scoped>

.main {
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
}

.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 2vh 2vw;
    gap: 40px;
    transition: top 0.2s ease-in;
}

.portfolioHidden {
    top: 100vh;
}

.profile {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    align-items: center;
    gap: 6px
}

.imageContainer {
    width: 150px;
    height: 150px;
    border-radius: 150px;
    overflow: hidden;
}

.image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    transform: translateX(-50px);
}

.portfolio {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40vw;
}

.button {
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    background-color: transparent;
    border: 0;
    font-size: 18px;
    position: absolute;
    bottom: 5vh;
    right: 2vw;
    cursor: pointer;
    overflow-x: hidden;
    padding-bottom: 6px;
}

.button:focus {
    outline: 0;
}

.button::after {
    content: "";
    width: 100%;
    border-bottom: 2px solid white;
    position: absolute;
    bottom: 0;
    left: -100%;
    transition: left 0.1s ease-in;
}

.button:hover::after {
    left: 0;
}


.linksContainer {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
}

.icon {
    width: 22px;
    height: 22px;
}

@media (max-width: 600px) {
    .main {
        flex-direction: column;
        gap: 10px;
    }

    .description {
        max-width: 80vw;
    }
}

</style>
