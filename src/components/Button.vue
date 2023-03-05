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
.button-container {
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-end;
}

.button {
    --button-color: #e8e8e8;
    --button-shadow-dark-color: #a2a2a2;
    --button-shadow-light-color: #ffffff;

    width: 100%;
    height: 100%;
    background-color: var(--button-color);
    box-shadow: -5px -5px 10px var(--button-shadow-light-color), 5px 5px 10px var(--button-shadow-dark-color);
    border: 8px solid transparent;
    outline: none;

    &.rounded {
        border-radius: 50%;
    }

    &.center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:active {
        box-shadow: -5px -5px 10px var(--button-shadow-light-color),
            5px 5px 10px var(--button-shadow-dark-color),
            inset -5px -5px 10px var(--button-shadow-light-color),
            inset 5px 5px 10px var(--button-shadow-dark-color);

        &>.title {
            color: #15e38a;
        }
    }

    &>.title {
        margin: 10px;
        color: #7a7a7a;
    }
}
</style>