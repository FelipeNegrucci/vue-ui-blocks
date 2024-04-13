<script setup>
import statsCardComp from '@/components/statsCardComp.vue';
import advancedTable from '@/components/advancedTable.vue'
import stackedList from '@/components/stackedList.vue';
import iconUser from '@/components/icons/iconUser.vue';
import iconFolder from '@/components/icons/iconFolder.vue';
import iconPrinter from '@/components/icons/iconPrinter.vue';
</script>

<template>
    <div class="container-fluid user-select-none">
        <div class="container-xxl px-4 py-4 vstack gap-3">

            <div class="row gap-3">
                <div class="col px-0">
                    <statsCardComp :data="['total de alunos','579']">
                        <iconUser class="icon-size" fill="#27A599"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp :data="['total de fichas','682']">
                        <iconFolder class="icon-size" fill="#E08300"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp :data="['total impresso','34']">
                        <iconPrinter class="icon-size" fill="#932FB1"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp :data="['para imprimir','3']">
                        <iconPrinter class="icon-size" fill="#4B70E7"/>
                    </statsCardComp>
                </div>
            </div>

            <div class="row gap-3">
                <div class="col px-0">
                    <div class="container-fluid px-0 overflow-x-auto">
                        <stackedList :title="'instrutores cadastrados'"/>
                    </div>
                </div>
                <div class="col px-0">
                    <div class="container-fluid px-0 overflow-x-auto">
                        <advancedTable :title="'lista de alunos'"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.icon-size{
    width: 22px;
    height: 22px;
}
[data-bs-theme='light']{
    .container-fluid{
        background-color: var(--bs-gray-200);
    }
}
[data-bs-theme='dark']{
    .container-fluid{
        background-color: var(--bs-gray-900);
    }
}
</style>
