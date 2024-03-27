<script setup>
import iconChart from './icons/iconChart.vue';
</script>

<template>
    <nav class="nav gap-2">
        <RouterLink to="/" class="nav-link d-flex px-2 py-1">
            <iconChart class="my-auto" fill="var(--bs-light)" width="20" height="20"/>
            <span class="my-auto ms-1">RouterLink</span>
        </RouterLink>
        <RouterLink to="/" class="nav-link d-flex px-2 py-1">
            <iconChart class="my-auto" fill="var(--bs-light)" width="20" height="20"/>
            <span class="my-auto ms-1">RouterLink</span>
        </RouterLink>
        <RouterLink to="/" class="nav-link d-flex px-2 py-1">
            <iconChart class="my-auto" fill="var(--bs-light)" width="20" height="20"/>
            <span class="my-auto ms-1">RouterLink</span>
        </RouterLink>
    </nav>
</template>

<style scoped lang="scss">

</style>
