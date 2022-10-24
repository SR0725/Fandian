<template>
    <div class="view-page">
        <div class="viewer">
            <transition name="step" mode="out-in">
                <Step1 v-if="nowStep === '1'" />
                <Step2 v-else-if="nowStep === '2'" />
                <Step3 v-else-if="nowStep === '3'" />
                <Step3_1 v-else-if="nowStep === '3-1'" />
                <Step3_2 v-else-if="nowStep === '3-2'" />
                <Step3_3 v-else-if="nowStep === '3-3'" />
                <Step4_1 v-else-if="nowStep === '4-1'" />
                <Step4_2 v-else-if="nowStep === '4-2'" />
                <Step4_3 v-else-if="nowStep === '4-3'" />
            </transition>
        </div>
        <ProgressBar />
    </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { materialMakingStore } from '../stores/materialMaking'

import Step1 from '../components/materialMaking/Step1.vue';
import Step2 from '../components/materialMaking/Step2.vue';
import Step3 from '../components/materialMaking/Step3.vue';
import Step3_1 from '../components/materialMaking/Step3-1.vue';
import Step3_2 from '../components/materialMaking/Step3-2.vue';
import Step3_3 from '../components/materialMaking/Step3-3.vue';
import Step4_1 from '../components/materialMaking/Step4-1.vue';
import Step4_2 from '../components/materialMaking/Step4-2.vue';
import Step4_3 from '../components/materialMaking/Step4-3.vue';

import ProgressBar from '../components/ProgressBar.vue';

export default {
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep']),
    },
    components: {
        Step1,
        Step2,
        Step3,
        Step3_1,
        Step3_2,
        Step3_3,
        Step4_1,
        Step4_2,
        Step4_3,
        ProgressBar
    }
}
</script>

<style scoped lang="scss">
.step-enter-active,
.step-leave-active {
    transition: all 0.25s;
}

.step-enter-from {
    transform: translateY(-60px);
    opacity: 0;
}

.step-leave-to {
    transform: translateY(120px);
    opacity: 0;
}

.step-enter-to,
.step-leave-from {
    opacity: 1;
    transform: translateY(0px);
}

.view-page {
    position: relative;
    width: 100%;
    height: calc(100% - 100px);
    margin-top: 108px;
    background: #fff;

    &::before {
        content: '';
        position: absolute;
        top: -43px;
        left: 43px;
        width: calc(100% - 43px);
        height: 60px;
        background: #fff;
        z-index: -1;
        box-shadow: -3px -3px 5px -5px #00000088;
        -webkit-box-shadow: -3px -3px 5px -5px #00000088;
        -moz-box-shadow: -3px -3px 5px -5px #00000088;
        -o-box-shadow: -3px -3px 5px -5px #00000088;
    }

    &::after {
        content: '';
        position: absolute;
        top: -30px;
        left: 13px;
        width: 60px;
        height: 60px;
        background: #fff;
        transform: rotate(-45deg);
        z-index: -1;
        box-shadow: -3px -3px 5px -5px #00000088;
        -webkit-box-shadow: -3px -3px 5px -5px #00000088;
        -moz-box-shadow: -3px -3px 5px -5px #00000088;
        -o-box-shadow: -3px -3px 5px -5px #00000088;
    }
}

.viewer {
    padding: 24px;
}

hr {
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: -32px;
    margin-right: 64px;
}

.view-page {

    :deep(.step) {
        .title {
            font-size: 20px;
            font-weight: bold;
            color: #442b2d;
            display: flexbox;

            .icon {
                display: inline-block;
                width: 32px;
            }
        }

        .content {
            padding-left: 38px;
            margin-top: 8px;
        }
    }

    :deep(.inputer) {
        display: flex;
        align-items: flex-end;

        .number-input {
            height: 24px;
            width: 180px;
            display: flex;
            align-items: flex-end;
            border: 0px;
            border-bottom: 1px solid #442b2d;
        }

    }
}
</style>
