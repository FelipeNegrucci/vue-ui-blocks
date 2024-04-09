<script setup>
import iconChart from './icons/iconChart.vue';
import iconPrinter from './icons/iconPrinter.vue';
import iconSettings from './icons/iconSettings.vue';
const props = defineProps({
    vertical:{
        required: true,
        type: Boolean
    }
})
</script>

<template>
    <nav class="nav gap-2" :class="props.vertical ? 'flex-column' : ''">
        <RouterLink to="/" class="nav-link d-flex rounded-2" :class="props.vertical ? 'link-color px-3 py-2' : 'px-2 py-1'">
            <iconChart class="icon-color my-auto"/>
            <span class="my-auto ms-1 text-capitalize">visualizar dados</span>
        </RouterLink>
        <RouterLink to="/" class="nav-link d-flex rounded-2" :class="props.vertical ? 'link-color px-3 py-2' : 'px-2 py-1'">
            <iconPrinter class="icon-color my-auto"/>
            <span class="my-auto ms-1 text-capitalize">fila de Impressão</span>
        </RouterLink>
        <RouterLink to="/" class="nav-link d-flex rounded-2" :class="props.vertical ? 'link-color px-3 py-2' : 'px-2 py-1'">
            <iconSettings class="icon-color my-auto"/>
            <span class="my-auto ms-1 text-capitalize">configurações</span>
        </RouterLink>
    </nav>
</template>

<style scoped lang="scss">
.icon-color{
    width: 20px;
    height: 20px;
}
[data-bs-theme='light'], [data-bs-theme='dark']{
    .nav-link{
        .icon-color{
            fill: rgba(var(--bs-light-rgb), 0.8);
        }
        span{
            color: rgba(var(--bs-light-rgb), 0.8);
        }
        &:hover{
            .icon-color{
                fill: var(--bs-light);
            }
            span{
                color: var(--bs-light);
            }
        }
    }
    .link-color:hover{
        background-color: rgba(var(--bs-light-rgb), 0.22);
    }
}
</style>
