<script setup>
const props = defineProps({
    data:{
        required: true,
        type: Array,
        default(){
            return [
                'data-title',
                '0.000'
            ]
        }
    }
})
</script>

<template>
    <div class="stat-card p-3 rounded-2 shadow border d-flex justify-content-between">
        <div class="col-auto vstack gap-2">
            <span class="text-title text-capitalize">{{ props.data[0] }}</span>
            <span class="text-stat fs-5 fw-bold">{{ props.data[1] }}</span>
        </div>
        <div class="col-auto">
            <div class="icon-area rounded-2 d-flex align-items-center justify-content-center">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.stat-card{
    min-width: 260px;
}
.icon-area{
    width: 38px;
    height: 38px;
}
[data-bs-theme='light']{
    .stat-card{
        background-color: var(--bs-gray-100);
    }
    .icon-area{
        background-color: rgba(var(--bs-dark-rgb), .085);
    }
    .text-title{
        color: var(--bs-gray-600);
    }
    .text-stat{
        color: var(--bs-gray-700);
    }
}
[data-bs-theme='dark']{
    .stat-card{
        background-color: var(--bs-gray-800);
    }
    .icon-area{
        background-color: rgba(var(--bs-light-rgb), .085);
    }
    .text-title, .text-news{
        color: var(--bs-gray-500);
    }
    .text-stat{
        color: var(--bs-gray-400);
    }
}
</style>
