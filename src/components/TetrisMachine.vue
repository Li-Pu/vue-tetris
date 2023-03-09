<script setup lang="ts">
import Controller from './Controller.vue';
import Screen from './Screen.vue';

</script>

<template>
    <div class="tetris-container">
        <div class="screen-container">
            <Screen />
        </div>
        <div class="controller-container">
            <Controller />
        </div>
    </div>
</template>

<style scoped>
@import url('../assets/css/neumorphism.css');

@mixin neumorphism-flat tetris-container {
    width: 640px;
    border-radius: 12px;
}

.screen-container {
    padding: 45px 0 35px;
}

.controller-container {
    width: 580px;
    margin: 20px auto;
}
</style>