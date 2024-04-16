<script setup>
import * as bootstrap from 'bootstrap';
import { onMounted } from 'vue';

onMounted(()=>{
    document.addEventListener('DOMContentLoaded', function () {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        });
    });
})
</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
[data-bs-theme='light']{
    .custom-popover {
        --bs-popover-bg: var(--bs-gray-900);
        --bs-popover-border-color: none;
        --bs-popover-arrow-width: 0px;
        --bs-popover-arrow-height: 0px;
        --bs-popover-inner-border-radius: 8px;
        --bs-popover-border-radius: 8px;
        --bs-popover-body-padding-x: 16px;
        --bs-popover-body-padding-y: 8px;
        .popover-body{
            color: var(--bs-light);
        }
    }
}
[data-bs-theme='dark']{
    .custom-popover {
        --bs-popover-bg: var(--bs-gray-900);
        --bs-popover-border-color: none;
        --bs-popover-arrow-width: 0px;
        --bs-popover-arrow-height: 0px;
        --bs-popover-inner-border-radius: 8px;
        --bs-popover-border-radius: 8px;
        --bs-popover-body-padding-x: 16px;
        --bs-popover-body-padding-y: 8px;
        .popover-body{
            color: var(--bs-light);
        }
    }
}
</style>
