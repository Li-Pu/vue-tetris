<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
    <div class="controller">
        <div class="left">
            <div class="left-top flex-cn-sb">
                <Button class="small-button">Pause(P)</Button>
                <Button class="small-button">Sound(S)</Button>
                <Button class="small-button">Reset(R)</Button>
            </div>
            <div class="left-bottom">
                <Button>Drop(Space)</Button>
            </div>
        </div>
        <div class="right">
            <div class="right-row">
                <Button class="middle-button">Rotation</Button>
            </div>
            <div class="right-row">
                <Button class="middle-button">Left</Button>
                <Button class="middle-button">Right</Button>
            </div>
            <div class="right-row">
                <Button class="middle-button">Down</Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.controller {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
}

.left {
    width: 400px;
}

.left-top {
    flex-direction: row;
    height: 100px;

    & > .small-button {
        width: 80px;
        height: 80px;
    }
}
.flex-cn-sb {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.right {
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;

    &>.right-row {
        flex: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        &>.middle-button {
            width: 150px;
            height: 150px;
        }
    }
}
</style>