<script setup>
import searchBar from '@/components/searchBar.vue'
import iconPlus from './icons/iconPlus.vue'

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
                    nomeCompleto: "Maximiliano Alejandro Rodrigues da Silva",
                    telefone: "(12) 12345-6789",
                    dataDeCriacao: new Date(2024, 2, 28, 10, 30)
                },
                {
                  nomeCompleto: "Isadora Beatriz Oliveira Santos",
                  telefone: "(12) 98765-4321",
                  dataDeCriacao: new Date(2024, 2, 25, 14, 45)
                },
                {
                  nomeCompleto: "Frederico Augusto Pereira de Souza",
                  telefone: "(12) 55512-3456",
                  dataDeCriacao: new Date(2024, 2, 20, 8, 0)
                },
                {
                  nomeCompleto: "Valentina Carolina Fernandes Almeida",
                  telefone: "(12) 99988-8777",
                  dataDeCriacao: new Date(2024, 2, 15, 11, 15)
                },
                {
                  nomeCompleto: "Leonardo Henrique Ribeiro Costa",
                  telefone: "(12) 33344-4555",
                  dataDeCriacao: new Date(2024, 2, 10, 9, 30)
                },
                {
                  nomeCompleto: "Gabriela Cristina Cardoso Pereira",
                  telefone: "(12) 66677-7888",
                  dataDeCriacao: new Date(2024, 2, 5, 16, 0)
                },
                {
                  nomeCompleto: "Cristiano Eduardo Martins Lima",
                  telefone: "(12) 22233-3444",
                  dataDeCriacao: new Date(2024, 1, 28, 13, 45)
                },
                {
                  nomeCompleto: "Camila Beatriz Rodrigues Costa e Silva",
                  telefone: "(12) 99147-5849",
                  dataDeCriacao: new Date(2024, 1, 23, 10, 30)
                },
                {
                  nomeCompleto: "Rafaela Eduarda Ferreira da Cunha",
                  telefone: "(12) 44455-5666",
                  dataDeCriacao: new Date(2024, 1, 18, 8, 0)
                },
                {
                  nomeCompleto: "Gustavo Henrique Oliveira e Sousa Rodrigues",
                  telefone: "(12) 77788-8999",
                  dataDeCriacao: new Date(2024, 1, 13, 14, 15)
                }
            ]
        }
    }
})

function actions(index){
    console.log(index)
}
</script>

<template>
    <div class="element-color vstack mx-0 py-3 rounded-2 gap-3 shadow border">

        <div class="d-flex justify-content-between px-3 gap-3 text-capitalize">
            <div class="fw-bold h5 my-auto text-nowrap">{{ props.title }}</div>
            <div class="hstack gap-3">
                <div>
                    <searchBar/>
                </div>
                <div class="btn btn-primary d-flex px-3 gap-1">
                    <iconPlus class="my-auto" width="20" height="20" stroke="var(--bs-light)"/>
                    <span class="my-auto text-nowrap">novo</span>
                </div>
            </div>
        </div>

        <div>
            <table class="table table-hover mb-0 text-center">
                <thead>
                    <tr class="text-capitalize">
                        <th class="ps-3 text-start">nome</th>
                        <th>telefone</th>
                        <th class="pe-3 text-end" >data de criacao</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in props.list" :key="index" @click="actions(i)">
                        <td class="s-3 text-start text-nowrap overflow-x-hidden" style="min-width: 320px; max-width: 320px;">{{ row.nomeCompleto }}</td>
                        <td>{{ row.telefone }}</td>
                        <td class="pe-3 text-end">{{ row.dataDeCriacao.toLocaleString('pt-BR') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="table-footer d-flex justify-content-between px-3 mb-auto">
            <span class="my-auto">
                <span class="text-footer">Mostrando </span>
                <span class="fw-bold text-footer-focuses">11-20</span>
                <span class="text-footer"> de </span>
                <span class="fw-bold text-footer-focuses">579</span>
            </span>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary px-3">Anterior</button>
                <button type="button" class="btn btn-outline-secondary px-3">Próximo</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.element-color{
    min-width: 640px;
    min-height: 600px;
    max-height: 600px;
}
tbody tr{
    cursor: pointer;
}
[data-bs-theme='light']{
    .element-color{
        background-color: var(--bs-gray-100);
    }
    thead{
        --bs-border-width: 0px;
        --bs-table-bg: var(--bs-gray-400);
        --bs-table-color: var(--bs-gray-800);
    }
    tbody tr{
        --bs-table-bg: var(--bs-gray-100);
        --bs-table-hover-bg: var(--bs-gray-200);
        --bs-table-color: var(--bs-gray-600);
        --bs-table-hover-color: var(--bs-gray-800);
    }
    .table-footer{
        button{
            color: var(--bs-gray-600);
            &:hover{
                color: var(--bs-gray-800);
                background-color: var(--bs-gray-200);
            }
        }
        .text-footer{
            color: var(--bs-gray-600);
            &-focuses{
                color: var(--bs-gray-800);
            }
        }
    }
}
[data-bs-theme='dark']{
    .element-color{
        background-color: var(--bs-gray-800);
    }
    thead{
        --bs-border-width: 0px;
        --bs-table-bg: var(--bs-gray-600);
        --bs-table-color: var(--bs-gray-300);
    }
    tbody tr{
        --bs-table-bg: var(--bs-gray-800);
        --bs-table-hover-bg: var(--bs-gray-700);
        --bs-table-color: var(--bs-gray-500);
        --bs-table-hover-color: var(--bs-gray-300);
    }
    .table-footer{
        button{
            color: var(--bs-gray-500);
            &:hover{
                color: var(--bs-gray-400);
                background-color: var(--bs-gray-700);
            }
        }
        .text-footer{
            color: var(--bs-gray-500);
            &-focuses{
                color: var(--bs-gray-400);
            }
        }
    }
}
</style>
