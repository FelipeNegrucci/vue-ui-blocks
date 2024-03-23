<script setup>
import card from '@/components/card.vue';
import iconUser from './icons/iconUser.vue';
import iconFolder from './icons/iconFolder.vue';
</script>

<template>
    <div class="container-fluid px-1 px-sm-2 px-md-3 px-lg-3 px-xl-4 px-xxl-0">
        <div class="container-xxl">
            <div class="row gx-0 gap-3">
                <card :data="['titulo', 212, 3]">
                    <iconUser class="icon-size"/>
                </card>
                <card :data="['titulo', 87, 2]">
                    <iconUser class="icon-size"/>
                </card>
                <card :data="['titulo', 333, 25]">
                    <iconFolder class="icon-size"/>
                </card>
                <card :data="['titulo', 765, 35]">
                    <iconFolder class="icon-size"/>
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
