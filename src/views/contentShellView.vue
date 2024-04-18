<script setup>
import statsCardComp from '@/components/statsCard.vue';
import advancedTableComp from '@/components/advancedTable.vue'
import stackedListComp from '@/components/stackedList.vue';
import iconUser from '@/components/icons/iconUser.vue';
import iconFolder from '@/components/icons/iconFolder.vue';
import iconPrinter from '@/components/icons/iconPrinter.vue';

const props = defineProps({
    display:{
        width:{
            required: true,
            type: Number
        },
        isLandscapeOrientation:{
            required: true,
            type: Boolean
        },
        isMobileDevice:{
            required:true,
            type: Boolean
        }
    }
})
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
                        <iconPrinter class="icon-size" fill="#a93ec9"/>
                    </statsCardComp>
                </div>
                <div class="col px-0">
                    <statsCardComp :data="['para imprimir','3']">
                        <iconPrinter class="icon-size" fill="#5089f2"/>
                    </statsCardComp>
                </div>
            </div>

            <div class="row gap-3">
                <div class="col px-0">
                    <div class="container-fluid px-0 overflow-x-auto">
                        <stackedListComp
                            :displayWidth="props.display.width"
                            :title="'instrutores cadastrados'"
                            :list="[
                                {
                                    name: 'Gabriela Rodrigues Almeida',
                                    position: 'Personal Trainer Sênior'
                                },
                                {
                                    name: 'Leonardo Pereira Martins',
                                    position: 'Instrutor de Musculação e Condicionamento Físico'
                                },
                                {
                                    name: 'Juliana Oliveira da Silva',
                                    position: 'Especialista em Aulas de Pilates e Alongamento'
                                },
                                {
                                    name: 'Gustavo Santos Pereira',
                                    position: 'Treinador de CrossFit e Funcional'
                                },
                                {
                                    name: 'Isabela Ferreira Lima',
                                    position: 'Coordenadora de Atividades Aeróbicas e Dança'
                                }
                            ]"
                        />
                    </div>
                </div>
                <div class="col px-0">
                    <div class="container-fluid px-0 overflow-x-auto">
                        <advancedTableComp
                            :title="'lista de alunos'"
                            :list="[
                                {
                                    nomeCompleto: 'Maximiliano Alejandro Rodrigues da Silva',
                                    telefone: '(12) 12345-6789',
                                    dataDeCriacao: new Date(2024, 2, 28, 10, 30)
                                },
                                {
                                  nomeCompleto: 'Isadora Beatriz Oliveira Santos',
                                  telefone: '(12) 98765-4321',
                                  dataDeCriacao: new Date(2024, 2, 25, 14, 45)
                                },
                                {
                                  nomeCompleto: 'Frederico Augusto Pereira de Souza',
                                  telefone: '(12) 55512-3456',
                                  dataDeCriacao: new Date(2024, 2, 20, 8, 0)
                                },
                                {
                                  nomeCompleto: 'Valentina Carolina Fernandes Almeida',
                                  telefone: '(12) 99988-8777',
                                  dataDeCriacao: new Date(2024, 2, 15, 11, 15)
                                },
                                {
                                  nomeCompleto: 'Leonardo Henrique Ribeiro Costa',
                                  telefone: '(12) 33344-4555',
                                  dataDeCriacao: new Date(2024, 2, 10, 9, 30)
                                },
                                {
                                  nomeCompleto: 'Gabriela Cristina Cardoso Pereira',
                                  telefone: '(12) 66677-7888',
                                  dataDeCriacao: new Date(2024, 2, 5, 16, 0)
                                },
                                {
                                  nomeCompleto: 'Cristiano Eduardo Martins Lima',
                                  telefone: '(12) 22233-3444',
                                  dataDeCriacao: new Date(2024, 1, 28, 13, 45)
                                },
                                {
                                  nomeCompleto: 'Camila Beatriz Rodrigues Costa e Silva',
                                  telefone: '(12) 99147-5849',
                                  dataDeCriacao: new Date(2024, 1, 23, 10, 30)
                                },
                                {
                                  nomeCompleto: 'Rafaela Eduarda Ferreira da Cunha',
                                  telefone: '(12) 44455-5666',
                                  dataDeCriacao: new Date(2024, 1, 18, 8, 0)
                                },
                                {
                                  nomeCompleto: 'Gustavo Henrique Oliveira e Sousa Rodrigues',
                                  telefone: '(12) 77788-8999',
                                  dataDeCriacao: new Date(2024, 1, 13, 14, 15)
                                }
                            ]"
                        />
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
