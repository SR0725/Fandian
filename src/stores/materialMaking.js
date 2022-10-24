import { defineStore } from 'pinia'

export const materialMakingStore = defineStore('materialMakingStore', {
    state: () => {
        return {
            nowStep: '1',
            useStep: 0,
            allKilogram: 0,
            mainName: '',
            perKilogramNeedBlendGram: 0,
            perKilogramNeedWaterGram: 0,
            dilutionFactor: 0,  //稀釋倍數
            tonerMultiple: 0,  //色粉倍數
            tonerList: [],
            inputer: '0',
            inputerOpen: false,
            inputerPlus: false,
            needPlus: false
        }
    },
    getters: {
        allKilogramToGram: (state) => parseFloat(state.allKilogram) * 1000,
        blendKilogram() {
            return parseFloat(this.allKilogram) * parseFloat(this.perKilogramNeedBlendGram) / 1000;
        },
        blendGram() {
            return parseFloat(this.allKilogram) * parseFloat(this.perKilogramNeedBlendGram);
        },
        waterBlendKilogram() {
            return parseFloat(this.allKilogram) * parseFloat(this.perKilogramNeedWaterGram) / 1000;
        },
        waterBlendGram() {
            return parseFloat(this.allKilogram) * parseFloat(this.perKilogramNeedWaterGram);
        },
        waterBlendGramPercent() {
            return parseFloat(this.allKilogram) * parseFloat(this.tonerMultiple);
        },
        colorWater(state) {
            let answer = 0;
            if (parseFloat(this.tonerMultiple)) {
                state.tonerList.forEach((toner) => {
                    answer += parseFloat(toner.percentGram) * 10 * parseFloat(state.allKilogram) * parseFloat(this.tonerMultiple);
                })
            } else {
                state.tonerList.forEach((toner) => {
                    answer += parseFloat(toner.percentGram) * 10 * parseFloat(state.allKilogram);
                })
            }
            return answer
        },
        waterGram(state) {
            return parseFloat(this.allKilogram) * parseFloat(this.dilutionFactor) + state.colorWater + state.waterBlendGram;
        },
        allWeight: (state) => {
            let answer = parseFloat(state.allKilogramToGram) + (parseFloat(state.blendGram));
            state.tonerList.forEach((toner) => {
                answer += parseFloat(toner.percentGram) * 10 * parseFloat(state.allKilogram);
            })
            return answer;
        },
        waterAllWeight: (state) => {
            let answer = parseFloat(state.allKilogramToGram) + (parseFloat(state.waterGram));
            return answer;
        },
    },
    actions: {
        nextStep(stepLine) {
            const canVibrate = window.navigator.vibrate
            if (canVibrate) window.navigator.vibrate(20)
            switch (this.nowStep) {
                case '1':
                    this.nowStep = '2'
                    break;
                case '2':
                    this.nowStep = '3'
                    break;
                case '3':
                    this.useStep = stepLine;
                    if (stepLine === 3) {
                        this.nowStep = '3-1'
                    } else if (stepLine === 4) {
                        this.nowStep = '4-1'
                    }
                    break;
                case '3-1':
                    this.nowStep = '3-2'
                    break;
                case '3-2':
                    this.nowStep = '3-3'
                    break;
                case '4-1':
                    this.nowStep = '4-2'
                    break;
                case '4-2':
                    this.nowStep = '4-3'
                    break;
                default:
                    break;
            }
        },
        setStep(step) {
            this.nowStep = step;
        },
    },

})