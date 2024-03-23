<script setup>
import { ref } from 'vue';

import iconUser from './icons/iconUser.vue';
import iconFolder from './icons/iconFolder.vue';

const cardData = ref([
    {
        title: 'alunos (total)',
        value: 152,
        registry: 37
    },
    {
        title: 'alunos (semana)',
        value: 6,
        registry: 2
    },
    {
        title: 'fichas (total)',
        value: 238,
        registry: 43
    },
    {
        title: 'fichas (semana)',
        value: 14,
        registry: 3
    }
])
</script>

<template>
    <div class="container-fluid px-1 px-sm-2 px-md-3 px-lg-3 px-xl-4 px-xxl-0">
        <div class="container-xxl">
            <div class="row gx-0 gap-3">

                <div class="col">
                    <div class="card-bg row justify-content-between rounded-1 p-3 shadow-sm mx-0 border">
                        <div class="col-auto vstack gap-2 px-0">
                            <div class="card-title text-capitalize">{{ cardData[0].title }}</div>
                            <div class="card-data fs-5">{{ cardData[0].value }}</div>
                            <div class="card-text">
                                <span class="card-text-registry fw-bold me-1">{{ cardData[0].registry }} novos</span>
                                <span>registros (mes)</span>
                            </div>
                        </div>
                        <div class="col-auto px-0">
                            <div class="card-icon-bg-0 rounded-2 d-flex">
                                <iconUser class="card-icon-color-0 m-auto"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card-bg row justify-content-between rounded-1 p-3 shadow-sm mx-0 border">
                        <div class="col-auto vstack gap-2 px-0">
                            <div class="card-title text-capitalize">{{ cardData[1].title }}</div>
                            <div class="card-data fs-5">{{ cardData[1].value }}</div>
                            <div class="card-text">
                                <span class="card-text-registry fw-bold me-1">{{ cardData[1].registry }} novos</span>
                                <span>registros (dia)</span>
                            </div>
                        </div>
                        <div class="col-auto px-0">
                            <div class="card-icon-bg-1 rounded-2 d-flex">
                                <iconUser class="card-icon-color-1 m-auto"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card-bg row justify-content-between rounded-1 p-3 shadow-sm mx-0 border">
                        <div class="col-auto vstack gap-2 px-0">
                            <div class="card-title text-capitalize">{{ cardData[2].title }}</div>
                            <div class="card-data fs-5">{{ cardData[2].value }}</div>
                            <div class="card-text">
                                <span class="card-text-registry fw-bold me-1">{{ cardData[2].registry }} novos</span>
                                <span>registros (mes)</span>
                            </div>
                        </div>
                        <div class="col-auto px-0">
                            <div class="card-icon-bg-2 rounded-2 d-flex">
                                <iconFolder class="card-icon-color-2 m-auto"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card-bg row justify-content-between rounded-1 p-3 shadow-sm mx-0 border">
                        <div class="col-auto vstack gap-2 px-0">
                            <div class="card-title text-capitalize">{{ cardData[3].title }}</div>
                            <div class="card-data fs-5">{{ cardData[3].value }}</div>
                            <div class="card-text">
                                <span class="card-text-registry fw-bold me-1">{{ cardData[3].registry }} novos</span>
                                <span>registros (dia)</span>
                            </div>
                        </div>
                        <div class="col-auto px-0">
                            <div class="card-icon-bg-3 rounded-2 d-flex">
                                <iconFolder class="card-icon-color-3 m-auto"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card{
    &-bg{
        min-width: 270px;
        scale: 1;
        &:hover{
            scale: 0.95;
        }
        transition: scale .2s ease-in-out,
                    background-color .2s ease-in-out;
    }
    &-icon-bg{
        &-0, &-1, &-2, &-3{
            width: 42px;
            height: 42px;
        }
    }
    &-icon-color{
        &-0, &-1, &-2, &-3{
            width: 24px;
            height: 24px;
        }
    }
}
[data-bs-theme="light"]{
    .card{
        &-bg{
            background-color: var(--bs-white);
            &:hover{
                background-color: rgba(var(--bs-white-rgb), 0.6);
            }
        }
        &-title{
            color: var(--bs-secondary-color);
        }
        &-data{
            color: var(--bs-dark);
        }
        &-text{
            color: var(--bs-tertiary-color);
            &-registry{
                color: var(--bs-teal);
            }
        }
        &-icon-bg{
            &-0, &-1, &-2, &-3{
                background-color: var(--bs-secondary-bg);
            }
        }
        &-icon-color{
            &-0{
                fill: var(--bs-blue);
            }
            &-1{
                fill: var(--bs-purple);
            }
            &-2{
                fill: var(--bs-orange);
            }
            &-3{
                fill: var(--bs-cyan);
            }
        }
    }
}
[data-bs-theme="dark"]{
    .card{
        &-bg{
            background-color: var(--bs-secondary-bg);
        }
        &-title{
            color: var(--bs-secondary-color);
        }
        &-data{
            color: var(--bs-light);
        }
        &-text{
            color: var(--bs-tertiary-color);
            &-registry{
                color: var(--bs-green);
            }
        }
        &-icon-bg{
            &-0, &-1, &-2, &-3{
                background-color: var(--bs-tertiary-bg);
            }
        }
        &-icon-color{
            &-0{
                fill: var(--bs-blue);
            }
            &-1{
                fill: var(--bs-purple);
            }
            &-2{
                fill: var(--bs-orange);
            }
            &-3{
                fill: var(--bs-cyan);
            }
        }
    }
}
</style>
