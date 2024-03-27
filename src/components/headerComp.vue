<script setup>
import navigationComp from '@/components/navigationComp.vue';
import iconEye from './icons/iconEye.vue';
import iconMoon from './icons/iconMoon.vue';
import { inject } from 'vue';

var colorMode = inject('colorMode')

function toggleTheme(){
    colorMode = 'dark'
}
</script>

<template>
    <header class="container-fluid text-bg-dark">
        <div class="container-xxl h-100">
            <div class="row h-100 align-content-center justify-content-between">
                <div class="col-auto px-0 d-flex gap-3">
                    <div class="d-flex">
                        <iconEye class="my-auto" fill="var(--bs-light)" width="36" height="36"/>
                        <div class="my-auto ms-2 h5">brand-name</div>
                    </div>
                    <div class="my-auto">
                        <navigationComp/>
                    </div>
                </div>
                <div class="toggle-buttons col-auto px-0 my-auto">
                    <button @click="toggleTheme()" type="button" class="btn border p-0">
                        <iconMoon fill="var(--bs-light)" width="24px" height="24px"/>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header{
    height: 64px;
    .toggle-buttons{
        button{
            width: 38px;
            height: 38px;
        }
    }
}
</style>
