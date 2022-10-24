<template>
    <HeaderBar :navbarShow="navbarShow" @navbarShowChange="navbarShow =!navbarShow" />
    <router-view v-slot="{ Component }">
        <main :class="{'navbarShow': navbarShow}">
            <component :is="Component" />
        </main>
    </router-view>
    <NumberInput :navbarShow="navbarShow"/>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import NumberInput from './components/NumberInput.vue'
export default {
    data() {
        return {
            navbarShow: false,
        }
    },
    components: {
        HeaderBar,
        NumberInput
    }
}
</script>

<style scoped lang="scss">
main {
    width: 100vw;
    height: 100vh;
    position: relative;
    padding-top: 0px;
    transition: all 0.2s;
    &.navbarShow {
        padding-top: 256px;
    }
}
</style>
