<!--
    * @FileDescription: 步驟一
-->
<template>
    <div class="step-1 step" :class="{'active' : nowStep === step}">
        <div class="title">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-weight-scale" />
            </span>
            <span class="text">
                想要調幾公斤?
            </span>
        </div>

        <div class="content">
            <span class="inputer">
                <div class="number-input">{{allKilogram}}</div>
                <label>kg</label>
            </span>
            <span class="inputer" style="opacity: 0.6">
                <div class="number-input">{{allKilogramToGram}}</div>
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
            step: '1'
        }
    },
    watch: {
        inputer() {
            if (this.nowStep === this.step) {
                this.allKilogram = this.inputer;
            }
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep', 'inputer', 'allKilogram', 'allKilogramToGram', 'inputerOpen']),
    },
    mounted() {
        if (this.nowStep === this.step) {
            this.inputer = this.allKilogram.toString();
            this.inputerOpen = true;
        }
    }
}
</script>

<style scoped lang="scss">

</style>
