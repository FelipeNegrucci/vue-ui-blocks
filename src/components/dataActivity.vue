<script setup>
import { ref } from 'vue';

import iconUser from './icons/iconUser.vue';
import iconFolder from './icons/iconFolder.vue';
import iconPrinter from './icons/iconPrinter.vue';

const activities = ref([
    {
        tag: 'aluno',
        message: 'Felipe Negrucci S. Polvora adicionou o aluno Fernando Morais da Silva Leme.'
    },
    {
        tag: 'ficha',
        message: 'Felipe Negrucci S. Polvora criou um nova ficha para o aluno Fernando Morais da Silva Leme.'
    },
    {
        tag: 'impressao',
        message: 'Felipe Negrucci S. Polvora adicionou um nova ficha para a impressao.'
    },
    {
        tag: 'ficha',
        message: 'Felipe Negrucci S. Polvora criou um nova ficha para o aluno Fernando Morais da Silva Leme.'
    },
    {
        tag: 'impressao',
        message: 'Felipe Negrucci S. Polvora adicionou um nova ficha para a impressao.'
    }
])
</script>

<template>
    <div class="container-fluid px-1 px-sm-2 px-md-3 px-lg-3 px-xl-4 px-xxl-0">
        <div class="container-xxl">
            <div class="row">
                <div class="col">
                    <div class="notification row row-cols-1 rounded-1 p-4 shadow-sm mx-0 border vstack gap-4">
                        <div class="notification-title h4 text-capitalize col px-0 mb-2">registro de atividades recentes</div>
                        <div class="col px-0 vstack me-auto">
                            <div v-for="(activitie, index) in activities" :key="index" class="row mx-0 justify-content-between gap-1">
                                <div class="col-auto px-0 d-flex">
                                    <div class="notification-user-bg me-2 rounded-circle d-flex">
                                        <iconUser v-if="activitie.tag == 'aluno'" class="notification-user-icon m-auto"/>
                                        <iconFolder v-if="activitie.tag == 'ficha'" class="notification-user-icon m-auto"/>
                                        <iconPrinter v-if="activitie.tag == 'impressao'" class="notification-user-icon m-auto"/>
                                    </div>
                                    <span class="notification-message my-auto">{{ activitie.message }}</span>
                                </div>
                                <div class="col-auto ms-auto my-auto px-0 notification-date ms-auto">
                                    <span class="me-2">08/03/2024</span>
                                    <span>12:15:37</span>
                                </div>
                                <hr v-if="(activities.length - 1) != index" class="border-secondary my-0 mb-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.notification{
    &-user-bg{
        min-width: 48px;
        min-height: 48px;
        width: 48px;
        height: 48px;
    }
    &-user-icon{
        width: 24px;
        height: 24px;
    }
}
[data-bs-theme="light"]{
    .container-fluid{
        .notification{
            background-color: var(--bs-white);
            &-title{
                color: var(--bs-secondary-color);
            }
            &-message{
                color: var(--bs-secondary-color);
            }
            &-date{
                color: var(--bs-tertiary-color);
            }
            &-user{
                &-bg{
                    background-color: var(--bs-secondary-bg);
                }
                &-icon{
                    fill:var(--bs-tertiary-color);
                }
            }

        }
    }
}
[data-bs-theme="dark"]{
    .container-fluid{
        .notification{
            background-color: var(--bs-dark-bg-subtle);
            &-title{
                color: var(--bs-secondary-color);
            }
            &-subtitle{
                color: var(--bs-tertiary-color);
            }

        }
    }
}
</style>
