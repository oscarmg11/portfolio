<script setup lang="ts">
    const props = defineProps<{ variant?: 'title', text: string, className?: string }>()


</script>

<template>
    <h1 v-if="props.variant === 'title'" :class="'text title ' + (className ?? '')">
        {{ $t(text) }}
    </h1>
    <p v-if="!props.variant" :class="'text ' + className ?? ''">
        {{ $t(text) }}
    </p>
</template>

<style scoped>
    .text {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;
        margin: 0;
    }

    .title {
        font-weight: 600;
        font-size: 38px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
</style>

