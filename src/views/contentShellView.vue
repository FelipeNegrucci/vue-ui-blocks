<script setup>
import statsCardComp from '@/components/statsCardComp.vue'
import iconChart from '@/components/icons/iconChart.vue';
</script>

<template>
    <div class="container-fluid user-select-none">
        <div class="container-xxl px-4 py-4 vstack gap-3">

            <div class="row gap-3">
                <div class="col px-0">
                    <statsCardComp>
                        <iconChart class="icon-size" fill="var(--bs-red)"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp>
                        <iconChart class="icon-size" fill="var(--bs-orange)"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp>
                        <iconChart class="icon-size" fill="var(--bs-blue)"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp>
                        <iconChart class="icon-size" fill="var(--bs-cyan)"/>
                    </statsCardComp>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.icon-size{
    width: 22px;
    height: 22px;
}
[data-bs-theme='light']{
    .container-fluid{
        background-color: var(--bs-gray-300)
    }
}
[data-bs-theme='dark']{
    .container-fluid{
        background-color: var(--bs-gray-900)
    }
}
</style>
