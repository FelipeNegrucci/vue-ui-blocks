<script setup>
import { inject } from 'vue';
import navigationComp from '@/components/navigationComp.vue';
import iconDumbbell from './icons/iconDumbbell.vue';
import iconMoon from './icons/iconMoon.vue';
import iconSun from './icons/iconSun.vue';
import iconMenu from './icons/iconMenu.vue';

const props = defineProps({
    display:{
        width:{
            required: true,
            type: Object
        },
        isLandscapeOrientation:{
            required: true,
            type: Boolean
        },
        isMobileDevice:{
            required:true,
            type: Boolean
        }
    }
})

var colorMode = inject('colorMode')
const breakPoints = {
    brandName: 485,
    navigation: 935,
    offcanvasWidth: 340
}

function toggleColorMode(){
    colorMode.value = colorMode.value == 'light' ? 'dark' : 'light'
    localStorage.setItem("color-mode", colorMode.value)
    document.querySelector('html[data-bs-theme]').setAttribute('data-bs-theme', colorMode.value)
}
</script>

<template>
    <header class="container-fluid px-4 user-select-none">
        <div class="container-xxl h-100 px-xxl-4">
            <div class="row h-100 align-content-center justify-content-between">
                <div class="col-auto px-0 d-flex gap-4">
                    <div class="d-flex">
                        <iconDumbbell class="icon-color my-auto" width="36" height="36"/>
                        <div v-if="props.display.width >= breakPoints.brandName" class="my-auto ms-2 h5 text-capitalize">gerenciador de fichas</div>
                    </div>
                    <div class="my-auto">
                        <navigationComp :vertical="false" v-if="props.display.width >= breakPoints.navigation"/>
                    </div>
                </div>
                <div class="col-auto px-0 my-auto d-flex gap-2">
                    <button @click="toggleColorMode()" type="button" class="btn p-0 border-0">
                        <iconMoon v-if="colorMode == 'light'" class="icon-color" width="24" height="24"/>
                        <iconSun v-if="colorMode == 'dark'" class="icon-color" width="24" height="24"/>
                    </button>
                    <div v-if="props.display.width < breakPoints.navigation" class="vr"></div>
                    <button v-if="props.display.width < breakPoints.navigation" class="btn p-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <iconMenu class="icon-color" width="24" height="24"/>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <div class="offcanvas offcanvas-start" :style="{ width: breakPoints.offcanvasWidth + 'px' }" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header px-4 mb-2">
            <div class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                <div class="d-flex">
                    <iconDumbbell class="icon-color my-auto" width="36" height="36"/>
                    <div class="my-auto ms-2 h5 text-capitalize">gerenciador de fichas</div>
                </div>
            </div>
            <button v-if="props.display.width <= breakPoints.offcanvasWidth" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <navigationComp :vertical="true"/>
        </div>
    </div>

</template>

<style scoped lang="scss">
header{
    height: 64px;
    button{
        width: 38px;
        height: 38px;
    }
}
[data-bs-theme='light'], [data-bs-theme='dark']{
    header{
        color: var(--bs-light);
        background-color: var(--bs-primary);
        button:hover{
            background-color: rgba(var(--bs-light-rgb), 0.27);
        }
    }
    .icon-color{
        fill: var(--bs-light);
    }
    .offcanvas{
        color: var(--bs-light);
        background-color: var(--bs-primary);
    }
}
</style>
