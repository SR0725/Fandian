<!--
    * @FileDescription: 步驟一
-->
<template>
    <div class="step-3-2 step" :class="{'active' : nowStep === step}">
        <div class="title">
            <span class="icon">
                <font-awesome-icon icon="fa-solid fa-scale-unbalanced-flip" />
            </span>
            <span class="text">
                添增色粉
            </span>
        </div>

        <div class="content">
            <span class="inputer">
                <input class="number-input" @click="inputNumberClose" placeholder="名稱" v-model="newToner.name" />
                <label>名稱</label>
            </span>
            <span class="inputer">
                <div class="number-input" @click="inputNumberOpen">{{newToner.percentGram}}</div>
                <label>重量(g)</label>
            </span>
            <span class="btn" @click="addToTonerList">
                新增
            </span>
            <span class="tip">
                備註：請輸入委工單上面給的色粉比例
            </span>
            <hr>
            <span class="inputer">
                <span class="number-input">名稱</span>
                <span class="number-input" style="margin-left: 4px;">重量(g)</span>
                <span class="number-input" style="margin-left: 4px;width: 48px;"></span>
            </span>

            <span class="inputer" v-for="(toner,index) in tonerList" :key="index">
                <span class="number-input">{{toner.name}}</span>
                <span class="number-input" style="margin-left: 4px;">{{toner.percentGram}}</span>
                <span class="number-input" style="color:brown;margin-left: 4px;width: 48px;"
                    @click="removeToner(index)">刪除</span>
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
            step: '3-2',
            newToner: {
                name: '',
                percentGram: 0
            },
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, ['nowStep', 'tonerList', 'inputerOpen', 'inputer', 'inputerPlus', 'needPlus']),
    },
    watch: {
        inputer() {
            if (this.nowStep === this.step) {
                if (this.inputerOpen) {
                    this.newToner.percentGram = this.inputer;
                }
            }
        },
        needPlus() {
            if (this.nowStep === this.step) {
                if (this.needPlus) {
                    this.addToTonerList();
                    this.inputNumberClose();
                    this.needPlus = false;
                }
            }
        }
    },
    methods: {
        addToTonerList() {
            this.tonerList.push(
                JSON.parse(JSON.stringify(this.newToner))
            );
            this.newToner = {
                name: '',
                percentGram: 0
            };
        },
        removeToner(index) {
            this.tonerList.splice(index, 1);
        },
        inputNumberOpen() {
            if (this.nowStep === this.step) {
                this.inputer = this.newToner.percentGram.toString();
                this.inputerOpen = true;
                this.inputerPlus = true;
            }
        },
        inputNumberClose() {
            if (this.nowStep === this.step) {
                this.inputerOpen = false;
                this.inputerPlus = false;
            }
        }
    },
    mounted() {
        if (this.nowStep === this.step) {
            this.inputerOpen = false;
            this.inputerPlus = true;
        }
    },
    unmounted() {
        this.inputerPlus = false;
    }
}
</script>

<style scoped lang="scss">
.tip {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 12px;
}

.btn {
    width: 180px;
    height: 24px;
    margin-top: 12px;
    border: 1px solid #442b2d;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

