<!--
    * @FileDescription: 步驟一
-->
<template>
    <div class="step-1 step" :class="{ 'active': nowStep === step }">
        <div style="margin-bottom: 24px;"  @click="inputNumberOpen('perKilogramNeedWaterGram')">
            <div class="title">
                <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-scale-unbalanced-flip" />
                </span>
                <span class="text">
                    每公斤需要多少水 ?
                </span>
            </div>

            <div class="content">
                <span class="inputer">
                    <div class="number-input">{{
                            perKilogramNeedWaterGram
                    }}</div>
                    <label>g</label>
                </span>
            </div>
        </div>
        <div style="margin-bottom: 24px;">
            <div class="title">
                <span class="text">
                    (選填1) 額外加更多水稀釋
                </span>
            </div>

            <div class="content" @click="inputNumberOpen('dilutionFactor')">
                <span class="inputer">
                    <div class="number-input">{{ dilutionFactor }}</div>
                    <label>倍</label>
                </span>
            </div>
            <span class="tip">可不填 / 適合刷染</span>

        </div>
        <div style="margin-bottom: 24px;">
            <div class="title">
                <span class="text">
                    (選填2) 額外增加色粉比例
                </span>
            </div>

            <div class="content" @click="inputNumberOpen('tonerMultiple')">
                <span class="inputer">
                    <div class="number-input">{{ tonerMultiple }}</div>
                    <label>倍</label>
                </span>
            </div>
            <span class="tip">可不填 / 適合刷染</span>
        </div>

    </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { materialMakingStore } from '../../stores/materialMaking'

export default {
    data() {
        return {
            open: true,
            step: '4-1',
            inputType: 'perKilogramNeedWaterGram'
        }
    },
    watch: {
        inputer() {
            if (this.nowStep === this.step) {
                this[this.inputType] = this.inputer;
            }
        }
    },
    methods: {
        inputNumberOpen(type) {
            if (this.nowStep === this.step) {
                this.inputType = type;
                if(this.inputer === '0' || this.inputer === 0){
                    this.inputer = 0;
                }else{
                    this.inputer = this[this.inputType];
                }
            }
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep', 'inputer', 'perKilogramNeedWaterGram', 'dilutionFactor', 'tonerMultiple', 'inputerOpen']),
    },
    mounted() {
        if (this.nowStep === this.step) {
            this.inputer = this.perKilogramNeedWaterGram.toString();
            this.inputerOpen = true;
        }
    }
}
</script>

<style scoped lang="scss">
.tip {
    display: flex;
    justify-content: center;
    margin-top: 4px;
}
</style>
