<!--
    * @FileDescription: 步驟一
-->
<template>
    <div class="step-1 step" :class="{'active' : nowStep === step}">
        <div class="title">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-file-signature" />
            </span>
            <span class="text">
                主料名稱?
            </span>
        </div>

        <div class="content">
            <span class="inputer">
                <input class="number-input" placeholder="請輸入名稱" v-model="mainName" />
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
            step: '2'
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep', 'mainName', 'inputerOpen']),
    },
    mounted() {
        if (this.nowStep === this.step) {
            this.inputerOpen = false;
        }
    }
}
</script>

<style scoped lang="scss">

</style>
