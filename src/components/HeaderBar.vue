<!--
    * @FileDescription: 最上頭的導引欄介面
-->
<template>
    <nav>
        <div class="nav-title" @click="$emit('navbarShowChange')">
            <span class="menu" :class="{'active': navbarShow}">
                <span class="stick n1" />
                <span class="stick n2" />
                <span class="stick n3" />
            </span>
            <img src="/single_logo.png" class="icon" width="32" height="32" />
            <span class="title">FANDIAN</span>
        </div>
        <transition name="fade">
            <div class="nav-content" v-if="navbarShow">
                <span>材料計算</span>
            </div>
        </transition>
    </nav>
</template>

<script>

export default {
    props: ['navbarShow'],
}
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

nav {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 52px;
    z-index: -1;
    padding: 16px;
    padding-top: 12px;
    z-index: 999;
}

.nav-content {
    width: 100%;
    margin-top: 16px;
    margin-left: -16px;
    display: flex;
    justify-content: center;

    span {
        font-size: 18px;
        height: 32px;
        ;
        color: #442b2d;
        font-weight: bold;
    }
}

.nav-title {
    position: relative;
    display: flex;
    height: 32px;
    z-index: 999;

    .menu {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-top: 13px;
        width: 16px;
        height: 44px;
        transition: 0.2s all;

        .stick {
            position: relative;
            background: #442b2d;

            &.n1 {
                width: 14px;
                height: 2px;
                border-radius: 4px;
                transition: 0.2s all;
            }

            &.n2 {
                width: 14px;
                height: 2px;
                border-radius: 4px;
                margin-top: 5px;
                transition: 0.2s all;
            }

            &.n3 {
                width: 46px;
                height: 2px;
                border-radius: 4px;
                margin-top: 5px;
                position: relative;
                right: 0px;
                transition: 0.2s all;
            }
        }

        &.active {
            & {
                width: 0px;
            }

            .stick {
                &.n1 {
                    width: 0px;
                    height: 2px;
                    border-radius: 4px;
                }

                &.n2 {
                    width: 0px;
                    height: 2px;
                    border-radius: 4px;
                    margin-top: 5px;
                }

                &.n3 {
                    width: 24px;
                    height: 2px;
                    border-radius: 4px;
                    margin-top: 5px;
                    position: relative;
                    right: -4px;
                }
            }

        }
    }

    .icon {
        width: 32px;
        height: 32px;
    }

    .title {
        color: #442b2d;
        font-weight: bold;
        font-size: 18px;
        padding-top: 6px;
        padding-left: 4px;
        font-family: monospace, sans-serif;
    }
}
</style>
