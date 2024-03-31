<script setup>
import { ref } from 'vue';
import statsCardComp from '@/components/statsCardComp.vue';
import advancedTable from '@/components/advancedTable.vue'
import stackedList from '@/components/stackedList.vue';
import iconUser from '@/components/icons/iconUser.vue';
import iconFolder from '@/components/icons/iconFolder.vue';
import iconPrinter from '@/components/icons/iconPrinter.vue';

var advancedTableList = ref(
    [
        {
            nomeCompleto: 'João Silva',
            telefone: '123456789',
            dataDeCriacao: new Date(2024, 2, 28, 10, 30)
        }
    ]
)
</script>

<template>
    <div class="container-fluid user-select-none">
        <div class="container-xxl px-4 py-4 vstack gap-3">

            <div class="row gap-3">
                <div class="col px-0">
                    <statsCardComp :data="['total de alunos','579',['34','novos alunos (mes)']]">
                        <iconUser class="icon-size"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp :data="['total de fichas','682',['42','novas fichas (mes)']]">
                        <iconFolder class="icon-size"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp :data="['total impresso','34',['7','novas fichas (mes)']]">
                        <iconPrinter class="icon-size"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp :data="['para imprimir','3',['3','novas fichas (mes)']]">
                        <iconPrinter class="icon-size"/>
                    </statsCardComp>
                </div>
            </div>

            <div class="row gap-3">
                <div class="col px-0 bg-light-subtle">
                    <stackedList :title="'instrutores cadastrados'"/>
                </div>
                <div class="col px-0">
                    <advancedTable :title="'lista de alunos'"/>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.icon-size{
    width: 22px;
    height: 22px;
    fill: var(--bs-primary)
}
[data-bs-theme='light']{
    .container-fluid{
        background-color: var(--bs-gray-100);
    }
}
[data-bs-theme='dark']{
    .container-fluid{
        background-color: var(--bs-gray-900);
    }
}
</style>
