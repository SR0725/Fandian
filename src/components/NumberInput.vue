<!--
    * @FileDescription: 呼叫輸入欄位的按鈕
-->
<template>
    <div class="bar" :class="{'active': inputerOpen && !navbarShow}">

        <div class="board">
            <transition name="updown">
                <div class="next" v-if="!inputerOpen || navbarShow" @click="nextStep">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
            </transition>
            <transition name="updown">
                <div class="enter" v-if="inputerOpen && !navbarShow && !inputerPlus" @click="nextStep">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
                </div>
            </transition>
            <transition name="updown">
                <div class="enter" v-if="inputerOpen && !navbarShow && inputerPlus" @click="needPlus = true">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </div>
            </transition>
            <div class="row" v-if="inputerOpen && !navbarShow" @click="blur">
                <div class="key" @click="addNumber(7)" ref="key9" tabindex="9">7</div>
                <div class="key" @click="addNumber(8)" ref="key10" tabindex="10">8</div>
                <div class="key" @click="addNumber(9)" ref="key11" tabindex="11">9</div>
            </div>
            <div class="row" v-if="inputerOpen && !navbarShow" @click="blur">
                <div class="key" @click="addNumber(4)" ref="key6" tabindex="6">4</div>
                <div class="key" @click="addNumber(5)" ref="key7" tabindex="7">5</div>
                <div class="key" @click="addNumber(6)" ref="key8" tabindex="8">6</div>
            </div>
            <div class="row" v-if="inputerOpen && !navbarShow" @click="blur">
                <div class="key" @click="addNumber(1)" ref="key3" tabindex="3">1</div>
                <div class="key" @click="addNumber(2)" ref="key4" tabindex="4">2</div>
                <div class="key" @click="addNumber(3)" ref="key5" tabindex="5">3</div>
            </div>
            <div class="row" v-if="inputerOpen && !navbarShow" @click="blur">
                <div class="key" @click="addNumber('.')" ref="key0" tabindex="0">.</div>
                <div class="key" @click="addNumber(0)" ref="key1" tabindex="1">0</div>
                <div class="key" @touchstart="removeNumber(true)" @touchend="removeNumber(false)" ref="key2"
                    tabindex="2">
                    <font-awesome-icon icon="fa-solid fa-delete-left" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapWritableState, mapActions } from 'pinia'
import { materialMakingStore } from '../stores/materialMaking'

export default {
    props: ['navbarShow'],
    data() {
        return {
            removeNumberTouched: true
        }
    },
    computed: {
        ...mapWritableState(materialMakingStore, ['inputer', 'inputerOpen', 'inputerPlus', 'needPlus']),
    },
    methods: {
        ...mapActions(materialMakingStore, ['nextStep']),
        blur() {
            if (this.inputerOpen) {
                const canVibrate = window.navigator.vibrate
                if (canVibrate) window.navigator.vibrate(20)
                setTimeout(() => {
                    for (let i = 0; i < 12; i++) {
                        this.$refs['key' + i].blur();
                    }
                }, 150);
            }
        },
        addNumber(number) {
            let inputer = this.inputer;
            if (inputer === '0') {
                if (number === '.') {
                    inputer = '0.';
                } else {
                    inputer = number.toString();
                }
            } else {
                if (number === '.') {
                    if (inputer.search(/\./g) + 1) {
                        return;
                    }
                }
                inputer += number.toString();
            }
            this.inputer = inputer;
        },
        removeNumber(touch) {
            this.removeNumberTouched = touch;
            if (!touch) {
                return;
            }
            let vm = this;
            function removeUpdate() {
                if (vm.removeNumberTouched) {
                    remove();
                    setTimeout(removeUpdate, 60);
                }
            }

            function remove() {
                let inputer = vm.inputer.toString();
                if (inputer.length <= 1) {
                    inputer = '0';
                } else {
                    inputer = inputer.substring(0, inputer.length - 1)
                }
                vm.inputer = inputer;
            }
            remove();
            setTimeout(removeUpdate, 500);
        }
    }
}
</script>

<style scoped lang="scss">
.updown-enter-active,
.updown-leave-active {
    transition: opacity 0.2s;
}

.updown-enter-from,
.updown-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.updown-enter-to,
.updown-leave-from {
    transform: translateY(0%);
    opacity: 1;
}

.bar {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 54px;
    height: 54px;
    transition: 0.2s all;
    box-shadow: -2px 5px 4px -1px #00000088;

    &.active {
        width: calc(100vw - 29px);
        height: 420px;
        bottom: 0;
        box-shadow: -2px 0px 4px 2px #00000044;

        &::before {
            box-shadow: -2px 6px 4px 2px #00000044;
        }

        &::after {
            box-shadow: 0px 6px 4px 2px #00000000;
        }
    }

    .board {
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #e2cfc5;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 32px;

        .next {
            position: absolute;
            display: flex;
            top: 18px;
            font-size: 24px;
            left: 10px;
        }

        .enter {
            position: absolute;
            bottom: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            right: 0;
            background: #e2cfc5;


            width: 96px;
            height: 54px;
            box-shadow: 3px -6px 4px -3px #00000044;

            cursor: pointer;
            transition: 0.15s all;

            &:focus {
                background: #e3dad6;
                font-size: 16px;
            }

            &::before {
                content: '';
                position: absolute;
                top: 8px;
                left: -15px;
                width: 30px;
                height: 30px;
                transform: rotate(45deg);
                background: #e2cfc5;
                box-shadow: -4px 0px 4px -3px #00000044;
                z-index: -2;
            }

            &::after {
                content: '';
                position: absolute;
                top: 24px;
                left: -22px;
                width: 30px;
                height: 30px;
                background: #e2cfc5;
                box-shadow: -3px 4px 4px -3px #00000044;
                z-index: -1;
            }
        }

        .back {
            position: absolute;
            top: 7px;
            left: -48px;
            width: 80px;
            height: 24px;
            display: flex;
            box-shadow: -1px 4px 4px -5px #00000088;
            justify-content: center;
            align-items: center;
            transform: rotate(-45deg);
        }

        .row {
            width: 100%;
            height: 80px;
            display: flex;
            margin-left: -32px;
            justify-content: space-evenly;
        }

        .key {
            width: 64px;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 21px;
            color: #442b2d;
            border-radius: 50%;
            border: 2px solid #442b2d;
            background: #e2cfc5;
            cursor: pointer;
            transition: 0.15s all;

            &:focus {
                background: #e3dad6;
                font-size: 16px;
            }
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 9px;
        left: -21px;
        width: 42px;
        height: 42px;
        transform: rotate(45deg);
        background: #e2cfc5;
        box-shadow: 3px 0px 4px 2px #00000044;
    }

    &::after {
        content: '';
        position: absolute;
        top: 30.14px;
        left: -29px;
        width: 70px;
        height: 100%;
        background: #e2cfc5;
        box-shadow: 0px 6px 4px 2px #00000066;
    }
}
</style>
