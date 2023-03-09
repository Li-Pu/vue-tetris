<script setup lang="ts">
import { reactive } from 'vue'

const matrix = reactive<Array<Array<boolean>>>(new Array(20).fill(0).map(() => new Array(10).fill(Math.random() > 0.7)))
const nextMatrix = reactive<Array<Array<boolean>>>(new Array(2).fill(0).map(() => new Array(4).fill(Math.random() > 0.7)))

</script>

<template>
    <div class="screen">
        <div class="stage">
            <div class="row" v-for="(row, index) of matrix" :key="index">
                <div class="cell" v-for="(cell, colIndex) of row" :key="colIndex">
                    <div class="cell-content" :class="{ 'cell-content-active': cell }"></div>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="info-box">
                <span class="shadow-text text-left">Max</span>
                <div class="shadow-text text-right">011243</div>
            </div>
            <div class="info-box">
                <span class="shadow-text text-left">Start Line</span>
                <div class="shadow-text text-right">0</div>
            </div>
            <div class="info-box">
                <span class="shadow-text text-left">Level</span>
                <div class="shadow-text text-right">0</div>
            </div>
            <div class="info-box">
                <span class="shadow-text text-left">Next</span>
                <div class="next-stage">
                    <div class="row" v-for="(row, index) of nextMatrix" :key="index">
                        <div class="cell" v-for="(cell, colIndex) of row" :key="colIndex">
                            <div class="cell-content" :class="{ 'cell-content-active': cell }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('../assets/css/neumorphism.css');

@mixin neumorphism-pressed screen {
    width: 390px;
    height: 478px;
    margin: 0 auto;
    padding: 8px;

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
}

@mixin neumorphism-flat stage,
#e8e8e8,
2px,
5px {
    height: calc(100% - 16px);
    width: 228px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.row {
    width: 220px;
    height: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

@mixin neumorphism-flat cell,
#e8e8e8,
2px,
5px {
    flex: 0;
    width: 20px;
    height: 20px;
    border-width: 0;
}

.cell-content {
    width: 20px;
    height: 20px;
}

@mixin neumorphism-pressed cell-content-active,
#e8e8e8,
2px,
5px {
    border-width: 0px;
}

.info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.info-box {
    width: 108px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
}

@mixin neumorphism-flat-text shadow-text,
#c0c0c0,
2px,
5px {
    font-size: 20px;
}

.text-left {
    text-align: left;
}

.text-right {
    text-align: right;
}

.next-stage {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .row {
        width: 88px;
    }
}

</style>