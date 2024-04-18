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
                }
            ]
        }
    }
})
</script>

<template>
    <div class="element-color vstack mx-0 py-3 rounded-2 gap-3 border">

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
                    <tr v-for="(row, index) in props.list" :key="index" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <td class="s-3 text-start text-nowrap overflow-x-hidden" style="min-width: 320px; max-width: 320px;">{{ row.nomeCompleto }}</td>
                        <td>{{ row.telefone }}</td>
                        <td class="pe-3 text-end">{{ row.dataDeCriacao.toLocaleString('pt-BR') }}</td>
                    </tr>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" style="background-color: transparent;">
                            <div class="modal-content">
                                <div class="modal-body">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>
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
