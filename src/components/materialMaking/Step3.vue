<!--
    * @FileDescription: 步驟一
-->
<template>
    <div class="step-1 step" :class="{'active' : nowStep === step}">
        <div class="title">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-prescription-bottle" />
            </span>
            <span class="text">
                使用?
            </span>
        </div>

        <div class="content">
            <span class="btn" @click="nextStep(3)" tabindex="0">
                調和劑
            </span>
            <span class="btn" @click="nextStep(4)" tabindex="0">
                水
            </span>
        </div>
    </div>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia'
import { materialMakingStore } from '../../stores/materialMaking'

export default {
    data() {
        return {
            open: true,
            step: '3'
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep', 'inputerOpen']),
    },
    methods: {
        ...mapActions(materialMakingStore, ['nextStep']),
    },
    mounted() {
        if (this.nowStep === this.step) {
            this.inputerOpen = false;
        }
    }
}
</script>

<style scoped lang="scss">
.btn {
    width: 150px;
    height: 24px;
    margin-top: 12px;
    border: 2px solid #442b2d;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
