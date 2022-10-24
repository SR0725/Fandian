<!--
    * @FileDescription: 步驟一
-->
<template>
    <div class="step-1 step" :class="{'active' : nowStep === step}">
        <div class="title">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-scale-unbalanced-flip" />
            </span>
            <span class="text">
                每公斤需要多少調和液 ?
            </span>
        </div>

        <div class="content">
            <span class="inputer">
                <div class="number-input">{{perKilogramNeedBlendGram}}</div>
                <label>g</label>
            </span>
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
            step: '3-1'
        }
    },
    watch: {
        inputer() {
            if (this.nowStep === this.step) {
                this.perKilogramNeedBlendGram = this.inputer;
            }
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep', 'inputer', 'perKilogramNeedBlendGram', 'inputerOpen']),
    },
    mounted() {
        if (this.nowStep === this.step) {
            this.inputer = this.perKilogramNeedBlendGram.toString();
            this.inputerOpen = true;
        }
    }
}
</script>

<style scoped lang="scss">

</style>
