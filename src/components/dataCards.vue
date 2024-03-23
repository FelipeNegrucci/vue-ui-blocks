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
                    <iconUser fill="var(--bs-primary)" class="icon-size m-auto"/>
                </card>
                <card :data="['Alunos (Semana)', 87, 2]">
                    <iconUser fill="var(--bs-primary)" class="icon-size m-auto"/>
                </card>
                <card :data="['Fichas (Total)', 333, 25]">
                    <iconFolder fill="var(--bs-primary)" class="icon-size m-auto"/>
                </card>
                <card :data="['Fichas (Semana)', 765, 35]">
                    <iconFolder fill="var(--bs-primary)" class="icon-size m-auto"/>
                </card>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.icon-size{
    width: 24px;
    height: 24px;
}
[data-bs-theme="light"]{

}
[data-bs-theme="dark"]{

}
</style>
