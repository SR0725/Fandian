
<!--
    * @FileDescription: 步驟一
-->
<template>
    <div class="step-3-3 step" :class="{'active' : nowStep === step}">
        <div class="title">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-scale-unbalanced-flip" />
            </span>
            <span class="text">
                計算結果
            </span>
        </div>

        <div class="content">
            <span class="row">
                <span class="name">
                    料名
                </span>
                <span class="context">
                    {{mainName}}
                </span>
            </span>
            <span class="row">
                <span class="name">
                    主料
                </span>
                <span class="context">
                    {{allKilogram}}kg /{{allKilogramToGram}}g (磅秤)
                </span>
            </span>
            <span class="row">
                <span class="name">
                    調和
                </span>
                <span class="context">
                    {{blendKilogram}}kg /{{blendGram}}g (磅秤)
                </span>
            </span>
            <span class="row">
                <span class="name">
                    色粉
                </span>
            </span>
            <span class="inputer" style="margin-left: 32px" v-for="(toner,index) in tonerList" :key="index">
                <span class="number-input">{{toner.name}}</span>
                <span class="number-input" style="margin-left: 4px;">{{toner.percentGram}}g</span>
            </span>
            <span class="row" style="margin-top: 32px">
                <span class="name">
                    總和
                </span>
                <span class="context">
                    {{allWeight}}g
                </span>
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
            step: '3-3',
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, [
            'nowStep',
            'inputerOpen',
            'allKilogram',
            'allKilogramToGram',
            'mainName',
            'blendKilogram',
            'blendGram',
            'tonerList',
            'allWeight'
        ]),
    },
    mounted() {
        if (this.nowStep === this.step) {
            this.inputerOpen = false;
        }
    }
}
</script>

<style scoped lang="scss">
.row {
    color: #442b2d;
    margin-top: 8px;
    margin-bottom: 8px;

    .name {
        font-weight: bold;
        display: inline-block;
        width: 42px;
    }

    .context {}
}

.content {
    display: flex;
    flex-direction: column;
}
</style>
