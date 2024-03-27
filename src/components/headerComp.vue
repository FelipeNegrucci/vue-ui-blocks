<script setup>
import { inject } from 'vue';
import navigationComp from '@/components/navigationComp.vue';
import iconEye from './icons/iconEye.vue';
import iconMoon from './icons/iconMoon.vue';
import iconSun from './icons/iconSun.vue';
import iconMenu from './icons/iconMenu.vue';

const props = defineProps({
    width:{
        type: Number,
        required: true
    },
    isLandscapeOrientation:{
        type:Boolean,
        required: true
    },
    isMobileDevice:{
        type: Boolean,
        required: true
    }
})

var colorMode = inject('colorMode')
const breakPoints = {
    brandName: 480,
    navigation: 1035
}

function toggleColorMode(){
    colorMode.value = colorMode.value == 'light' ? 'dark' : 'light'
    localStorage.setItem("color-mode", colorMode.value)
    document.querySelector('html[data-bs-theme]').setAttribute('data-bs-theme', colorMode.value)
}
</script>

<template>
    <header class="container-fluid">
        <div class="container-xxl h-100">
            <div class="row h-100 align-content-center justify-content-between">
                <div class="col-auto px-0 d-flex gap-4">
                    <div class="d-flex">
                        <iconEye class="icon-color my-auto" width="36" height="36"/>
                        <div class="my-auto ms-2 h5">brand-name</div>
                    </div>
                    <div class="my-auto">
                        <navigationComp/>
                    </div>
                </div>
                <div class="col-auto px-0 my-auto d-flex gap-2">
                    <button @click="toggleColorMode()" type="button" class="btn p-0 border-0">
                        <iconMoon v-if="colorMode == 'light'" class="icon-color" width="24" height="24"/>
                        <iconSun v-if="colorMode == 'dark'" class="icon-color" width="24" height="24"/>
                    </button>
                    <div class="vr"></div>
                    <button v-if="props.width > 800" type="button" class="btn p-0 border-0">
                        <iconMenu class="icon-color" width="24" height="24"/>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header{
    height: 64px;
    button{
        width: 38px;
        height: 38px;
    }
}
[data-bs-theme='light']{
    header{
        color: var(--bs-dark);
        background-color: var(--bs-light);
        button:hover{
            background-color: rgba(var(--bs-dark-rgb), 0.12);
        }
        .icon-color{
            fill: var(--bs-dark);
        }
    }
}
[data-bs-theme='dark']{
    header{
        color: var(--bs-light);
        background-color: var(--bs-dark);
        button:hover{
            background-color: rgba(var(--bs-light-rgb), 0.12);
        }
        .icon-color{
            fill: var(--bs-light);
        }
    }
}
</style>
