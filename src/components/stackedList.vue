<script setup>
import iconPlus from './icons/iconPlus.vue'
import iconUser from './icons/iconUser.vue';
import iconCloseCircle from './icons/iconCloseCircle.vue';

const props = defineProps({
    title:{
        type: String,
        required: true,
        default: "table title"
    },
    list:{
        type: Array,
        required: true,
        default(){
            return [
                {
                  name: "Gabriela Rodrigues Almeida",
                  position: "Personal Trainer Sênior"
                },
                {
                  name: "Leonardo Pereira Martins",
                  position: "Instrutor de Musculação e Condicionamento Físico"
                },
                {
                  name: "Juliana Oliveira da Silva",
                  position: "Especialista em Aulas de Pilates e Alongamento"
                },
                {
                  name: "Gustavo Santos Pereira",
                  position: "Treinador de CrossFit e Funcional"
                },
                {
                  name: "Isabela Ferreira Lima",
                  position: "Coordenadora de Atividades Aeróbicas e Dança"
                }
            ]
        }
    }
})
</script>

<template>
    <div class="element-color vstack mx-0 py-3 rounded-2 gap-3 shadow border">

        <div class="d-flex justify-content-between px-3 gap-3 text-capitalize">
            <div class="fw-bold h5 my-auto text-nowrap">{{ props.title }}</div>
            <div class="btn btn-primary d-flex px-3 gap-1">
                <iconPlus class="my-auto" width="20" height="20" stroke="var(--bs-light)"/>
                <span class="my-auto text-nowrap">novo</span>
            </div>
        </div>

        <div class="vstack gap-2 mx-3">
            <div v-for="(row, index) in props.list" :key="index" class="item-list d-flex justify-content-between rounded-2 p-2">
                <div class="d-flex">

                    <div class="icon-area my-auto me-3 rounded-circle d-flex">
                        <iconUser class="icon-color m-auto"/>
                    </div>
                    <div class="my-auto">
                        <div class="text-name">{{ row.name }}</div>
                        <div class="text-position">{{ row.position }}</div>
                    </div>
                </div>
                <button class="d-flex btn-close border-dark border rounded-circle p-2 my-auto"></button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.element-color{
    // min-width: 640px;
    min-height: 600px;
    max-height: 600px;
}
.icon-area{
    width: 52px;
    height: 52px;
}
.icon-color{
    width: 42px;
    height: 42px;
}
[data-bs-theme='light']{
    .item-list:hover{
        background-color: var(--bs-gray-200);
    }
    .icon-area{
        background-color: var(--bs-gray-400);
    }
    .icon-color{
        fill: var(--bs-gray-600);
    }
    .text-name{
        color: var(--bs-gray-800);
    }
    .text-position{
        color: var(--bs-gray-600);
    }
}
</style>
