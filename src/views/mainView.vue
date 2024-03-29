<script setup>
import { ref, onBeforeMount, onMounted, provide } from 'vue';
import headerComp from '@/components/headerComp.vue';
import footerComp from '@/components/footerComp.vue';

var display = ref({
    width: undefined,
    isLandscapeOrientation: undefined,
    isMobileDevice: undefined
})

var colorMode = ref(undefined)

provide('colorMode', colorMode)

onBeforeMount(()=>{
    display.value = {
        width: window.innerWidth,
        isLandscapeOrientation: screen.orientation.type.includes('landscape'),
        isMobileDevice: navigator.userAgentData.mobile
    }

    colorMode.value = localStorage.getItem("color-mode") || 'light'
    document.querySelector('html[data-bs-theme]').setAttribute('data-bs-theme', colorMode.value)
})

onMounted(()=>{
    window.addEventListener('resize', () => {
        display.value.width = window.innerWidth
    })
    screen.orientation.addEventListener('change', () => {
        display.value.isLandscapeOrientation = screen.orientation.type.includes('landscape')
    })
})
</script>

<template>
    <headerComp :display="display"/>
    <router-view></router-view>
    <footerComp :display="display"/>
</template>

<style lang="scss">
[data-bs-theme='dark'] *{
    --bs-primary: hsl(350, 74%, 28%);
    --bs-primary-rgb: 124, 19, 36;
    .btn-primary{
        --bs-btn-color: var(--bs-light);
        --bs-btn-bg: hsl(350, 74%, 28%);
        --bs-btn-border-color: hsl(350, 74%, 28%);
        --bs-btn-hover-color: var(--bs-light);
        --bs-btn-hover-bg: hsl(350, 75%, 20%);
        --bs-btn-hover-border-color: hsl(350, 74%, 18%);
        --bs-btn-focus-shadow-rgb: 218, 65, 90;
        --bs-btn-active-color: var(--bs-light);
        --bs-btn-active-bg: hsl(350, 74%, 18%);
        --bs-btn-active-border-color: hsl(350, 75%, 16%);
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: var(--bs-light);
        --bs-btn-disabled-bg: hsl(350, 74%, 28%);
        --bs-btn-disabled-border-color: hsl(350, 74%, 28%);
    }
}
</style>
