<script setup>
import card from '@/components/card.vue';
import iconUser from './icons/iconUser.vue';
import iconFolder from './icons/iconFolder.vue';
</script>

<template>
    <div class="container-fluid px-1 px-sm-2 px-md-3 px-lg-3 px-xl-4 px-xxl-0">
        <div class="container-xxl">
            <div class="row gx-0 gap-3">
                <card :data="['Alunos (Total)', 212, 3]">
                    <div class="card-icon-1 rounded-2 d-flex">
                        <iconUser class="icon-size m-auto"/>
                    </div>
                </card>
                <card :data="['Alunos (Semana)', 87, 2]">
                    <div class="card-icon-2 rounded-2 d-flex">
                        <iconUser class="icon-size m-auto"/>
                    </div>
                </card>
                <card :data="['Fichas (Total)', 333, 25]">
                    <div class="card-icon-3 rounded-2 d-flex">
                        <iconUser class="icon-size m-auto"/>
                    </div>
                </card>
                <card :data="['Fichas (Semana)', 765, 35]">
                    <div class="card-icon-4 rounded-2 d-flex">
                        <iconUser class="icon-size m-auto"/>
                    </div>
                </card>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-icon{
    &-1, &-2, &-3, &-4{
        width: 42px;
        height: 42px;
    }
}
.icon-size{
    width: 24px;
    height: 24px;
}
[data-bs-theme="light"]{
    .card-icon{
        &-1{
            background-color: rgba(var(--bs-info-rgb), 0.2);
            .icon-size{
                fill: rgb(var(--bs-info-rgb));;
            }
        }
        &-2{
            background-color: rgba(var(--bs-secondary-rgb), 0.2);
            .icon-size{
                fill: rgb(var(--bs-secondary-rgb));;
            }
        }
        &-3{
            background-color: rgba(var(--bs-success-rgb), 0.2);
            .icon-size{
                fill: rgb(var(--bs-success-rgb));;
            }
        }
        &-4{
            background-color: rgba(var(--bs-primary-rgb), 0.2);
            .icon-size{
                fill: rgb(var(--bs-primary-rgb));;
            }
        }
    }
}
[data-bs-theme="dark"]{

}
</style>
