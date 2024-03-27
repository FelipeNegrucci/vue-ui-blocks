<script setup>
</script>

<template>
    <div class="stat-card p-3 rounded-2 shadow-sm border d-flex justify-content-between">
        <div class="col-auto vstack gap-2">
            <div class="text-capitalize">Customers</div>
            <div class="h5 mb-0">2.000</div>
            <div class="text-update">520 newly registered</div>
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
.text-update{
    color: var(--bs-success);
}
[data-bs-theme='light']{
    .stat-card{
        background-color: var(--bs-gray-100);
    }
    .icon-area{
        background-color: rgba(var(--bs-dark-rgb), .085);
    }
    .text-capitalize{
        color: var(--bs-gray-600);
    }
}
[data-bs-theme='dark']{
    .stat-card{
        background-color: var(--bs-gray-800);
    }
    .icon-area{
        background-color: rgba(var(--bs-light-rgb), .085);
    }
    .text-capitalize{
        color: var(--bs-gray-500);
    } 
}
</style>
