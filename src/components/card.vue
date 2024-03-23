<!-- eslint-disable vue/require-valid-default-prop -->
<script setup>
    // <div class="container-fluid px-1 px-sm-2 px-md-3 px-lg-3 px-xl-4 px-xxl-0">
    //     <div class="container-xxl">
    //         <div class="row gx-0 gap-3">
const props = defineProps({
    data:{
        default:[
            'titulo',
            302,
            23
        ],
        type: Array,
    }
})
</script>

<template>
<div class="col">
    <div class="card-bg row justify-content-between rounded-1 p-3 shadow-sm mx-0 border">
        <div class="col-auto vstack gap-2 px-0">
            <div class="card-title text-capitalize">{{ props.data[0] }}</div>
            <div class="card-data fs-5">{{ props.data[1] }}</div>
            <div class="card-text">
                <span class="card-text-registry fw-bold me-1">{{ props.data[2] }} novos</span>
                <span>registros (mes)</span>
            </div>
        </div>
        <div class="col-auto px-0">
            <div class="card-icon-bg-0 rounded-2 d-flex">
                <slot></slot>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.card{
    &-bg{
        min-width: 270px;
        scale: 1;
        &:hover{
            scale: 0.95;
        }
        transition: scale .2s ease-in-out,
                    background-color .2s ease-in-out;
    }
    &-icon-bg{
        width: 42px;
        height: 42px;
    }
}
[data-bs-theme="light"]{

}
[data-bs-theme="dark"]{

}
</style>
