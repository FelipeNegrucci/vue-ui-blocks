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

<style></style>
