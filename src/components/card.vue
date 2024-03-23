<script setup>
const props = defineProps({
    data:{
        default(){
            return [
                'Card Title',
                '000',
                '00'
            ]
        },
        type: Array,
    }
})
</script>

<template>
<div class="col">
    <div class="card-color row justify-content-between rounded-1 p-3 shadow-sm mx-0 border">
        <div class="col-auto vstack gap-2 px-0">
            <div class="card-title text-capitalize">{{ props.data[0] }}</div>
            <div class="card-value fs-5">{{ props.data[1] }}</div>
            <div>
                <span class="card-new fw-bold me-1">{{ props.data[2] }} novos</span>
                <span class="card-registry">registros (mes)</span>
            </div>
        </div>
        <div class="col-auto px-0">
            <slot></slot>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
.card{
    &-color{
        min-width: 270px;
        scale: 1; 
        transition: scale .2s ease-in-out;
        &:hover{
            scale: 0.95;
        }
    }
    &-icon{
        width: 42px;
        height: 42px;
    }
}
[data-bs-theme="light"]{
    .card{
        &-color{
            background-color: var(--bs-gray-100);
            &:hover{
                background-color: rgba(255, 255, 255, 0.5);
            }
        }
        &-value{
            color: var(--bs-light-text-emphasis);
        }
        &-new{
            color: var(--bs-success);
        }
        &-registry{
            color: var(--bs-gray-600);
        }
    }
}
[data-bs-theme="dark"]{
    .card{
        &-color{
            background-color: var(--bs-gray-800);
            &:hover{
                background-color: rgba(var(--bs-light-rgb), 0.08);
            }
        }
        &-value{
            color: var(--bs-light-text-emphasis);
        }
        &-new{
            color: var(--bs-success);
        }
        &-registry{
            color: var(--bs-gray-500);
        }
    }
}
</style>
