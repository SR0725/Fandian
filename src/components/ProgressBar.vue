<!--
    * @FileDescription: 顯示填寫進度
-->
<template>
    <div class="bar">
        <span class="step-pointer" :class="{'active' : nowStep === '1'}" @click="setStep('1')">重量設定</span>
        <span class="step-pointer" :class="{'active' : nowStep === '2'}" @click="setStep('2')">主料名稱</span>
        <span class="step-pointer" :class="{'active' : nowStep === '3'}" @click="setStep('3')">溶劑選擇</span>
        <span class="step-pointer" :class="{'active' : nowStep === '3-1'}" @click="setStep('3-1')" v-if="useStep === 3">調和液量</span>
        <span class="step-pointer" :class="{'active' : nowStep === '3-2'}" @click="setStep('3-2')" v-if="useStep === 3">色粉用量</span>
        <span class="step-pointer" :class="{'active' : nowStep === '3-3'}" @click="setStep('3-3')" v-if="useStep === 3">計算結果</span>
        <span class="step-pointer" :class="{'active' : nowStep === '4-1'}" @click="setStep('4-1')" v-if="useStep === 4">調和水量</span>
        <span class="step-pointer" :class="{'active' : nowStep === '4-2'}" @click="setStep('4-2')" v-if="useStep === 4">色粉用量</span>
        <span class="step-pointer" :class="{'active' : nowStep === '4-3'}" @click="setStep('4-3')" v-if="useStep === 4">計算結果</span>
    </div>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia'
import { materialMakingStore } from '../stores/materialMaking'

export default {
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep', 'useStep']),
    },
    methods: {
        ...mapActions(materialMakingStore, ['setStep']),
    },
}
</script>

<style scoped lang="scss">
.bar {
    position: absolute;
    top: -36px;
    right: 0;
    display: flex;
    flex-direction: column;
    padding-right: 4px;

    .step-pointer {
        opacity: 0.5;
        margin-top: 16px;

        &.active {
            opacity: 1;
        }
    }
}
</style>
