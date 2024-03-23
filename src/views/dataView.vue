<script setup>
import dataCards from '@/components/dataCards.vue';
import dataActivity from '@/components/dataActivity.vue';

</script>

<template>
    <div class="container-fluid px-0 py-4 vstack gap-3 user-select-none">
        <dataCards/>
        <dataActivity/>
    </div>
</template>

<style scoped lang="scss">
[data-bs-theme="light"]{
    .container-fluid{
        background-color: var(--bs-gray-100);
    }
}
[data-bs-theme="dark"]{
    .container-fluid{
        background-color: var(--bs-gray-900);
    }
}
</style>
