<script setup lang="ts">

const emits = defineEmits<{
    (type: 'click', e: MouseEvent): void
}>()

const onClick = (e: MouseEvent) => {
    emits('click', e)
}

</script>

<template>
    <div class="button-container">
        <button class="button rounded center" type="button" @click="onClick">
            <span class="title">
                <slot></slot>
            </span>
        </button>
    </div>
</template>

<style scoped>
@import url('../assets/css/neumorphism.css');

.button-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
}

@mixin neumorphism-flat-with-active button {
    width: 100%;
    height: 100%;

    &.rounded {
        border-radius: 50%;
    }

    &.center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &>.title {
        margin: 10px;
        color: #7a7a7a;
    }

    &:active>.title {
        color: #15e38a;
    }
}
</style>