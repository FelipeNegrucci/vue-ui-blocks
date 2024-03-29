<script setup>
import searchBar from '@/components/searchBar.vue'
import iconPlus from './icons/iconPlus.vue'

const props = defineProps({
    list:{
        required: true,
        type: Array,
        default(){
            return [
                {
                    nomeCompleto: "João Silva",
                    telefone: "123456789",
                    idade: 30,
                    peso: 75,
                    rotinaDeTreino: "Musculação e corrida",
                    objetivo: "Perder peso e ganhar massa muscular",
                    restricao: "Nenhuma",
                    dataDeCriacao: new Date(2024, 2, 28, 10, 30)
                },
                {
                  nomeCompleto: "Maria Santos",
                  telefone: "987654321",
                  idade: 25,
                  peso: 60,
                  rotinaDeTreino: "Yoga e Pilates",
                  objetivo: "Melhorar flexibilidade e reduzir estresse",
                  restricao: "Nenhuma",
                  dataDeCriacao: new Date(2024, 2, 25, 14, 45)
                },
                {
                  nomeCompleto: "Carlos Oliveira",
                  telefone: "555123456",
                  idade: 40,
                  peso: 85,
                  rotinaDeTreino: "CrossFit",
                  objetivo: "Aumentar força e resistência",
                  restricao: "Lesão no joelho",
                  dataDeCriacao: new Date(2024, 2, 20, 8, 0)
                },
                {
                  nomeCompleto: "Ana Costa",
                  telefone: "999888777",
                  idade: 35,
                  peso: 70,
                  rotinaDeTreino: "Natação e corrida",
                  objetivo: "Manter saúde cardiovascular",
                  restricao: "Nenhuma",
                  dataDeCriacao: new Date(2024, 2, 15, 11, 15)
                },
                {
                  nomeCompleto: "Pedro Souza",
                  telefone: "333444555",
                  idade: 28,
                  peso: 80,
                  rotinaDeTreino: "Levantamento de peso",
                  objetivo: "Ganhar massa muscular",
                  restricao: "Nenhuma",
                  dataDeCriacao: new Date(2024, 2, 10, 9, 30)
                },
                {
                  nomeCompleto: "Juliana Lima",
                  telefone: "666777888",
                  idade: 32,
                  peso: 65,
                  rotinaDeTreino: "Funcional",
                  objetivo: "Melhorar condicionamento físico",
                  restricao: "Nenhuma",
                  dataDeCriacao: new Date(2024, 2, 5, 16, 0)
                },
                {
                  nomeCompleto: "Marcos Ferreira",
                  telefone: "222333444",
                  idade: 45,
                  peso: 90,
                  rotinaDeTreino: "Caminhada e corrida",
                  objetivo: "Perder peso e aumentar resistência",
                  restricao: "Nenhuma",
                  dataDeCriacao: new Date(2024, 1, 28, 13, 45)
                },
                {
                  nomeCompleto: "Carolina Pereira",
                  telefone: "111222333",
                  idade: 27,
                  peso: 55,
                  rotinaDeTreino: "Pilates",
                  objetivo: "Fortalecer músculos centrais",
                  restricao: "Nenhuma",
                  dataDeCriacao: new Date(2024, 1, 23, 10, 30)
                },
                {
                  nomeCompleto: "Rafaela Gomes",
                  telefone: "444555666",
                  idade: 31,
                  peso: 70,
                  rotinaDeTreino: "Spinning e HIIT",
                  objetivo: "Queimar gordura e melhorar resistência cardiovascular",
                  restricao: "Nenhuma",
                  dataDeCriacao: new Date(2024, 1, 18, 8, 0)
                },
                {
                  nomeCompleto: "Fernando Moraes",
                  telefone: "777888999",
                  idade: 33,
                  peso: 75,
                  rotinaDeTreino: "Boxe e Muay Thai",
                  objetivo: "Aumentar força e aprender defesa pessoal",
                  restricao: "Nenhuma",
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

        <div class="d-flex justify-content-between px-3">
            <div class="fw-bold h5 my-auto text-capitalize">lista de alunos</div>
            <div class="hstack gap-3">
                <div>
                    <searchBar/>
                </div>
                <div class="btn btn-primary d-flex px-3 gap-1">
                    <iconPlus class="my-auto" width="20" height="20" stroke="var(--bs-light)"/>
                    <div class="my-auto">novo aluno</div>
                </div>
            </div>
        </div>

        <div>
            <table class="table table-hover mb-0 text-center">
                <thead>
                    <tr class="text-capitalize">
                        <th class="ps-3 text-start">nome</th>
                        <th>telefone</th>
                        <th>idade</th>
                        <th>peso</th>
                        <th>rotina de treino</th>
                        <th>objetivo</th>
                        <th>restricao</th>
                        <th class="pe-3 text-end">data de criacao</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in props.list" :key="index" @click="actions(i)">
                        <td class="ps-3 text-start">{{ row.nomeCompleto }}</td>
                        <td>{{ row.telefone }}</td>
                        <td>{{ row.idade }}</td>
                        <td>{{ row.peso }}</td>
                        <td>{{ row.rotinaDeTreino }}</td>
                        <td>{{ row.objetivo }}</td>
                        <td>{{ row.restricao }}</td>
                        <td class="pe-3 text-end">{{ row.dataDeCriacao.toLocaleString('pt-BR') }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="table-footer d-flex justify-content-between px-3">
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
