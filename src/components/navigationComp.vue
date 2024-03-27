<script setup>
import iconChart from './icons/iconChart.vue';
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
            <iconChart class="icon-color my-auto" fill="var(--bs-light)" width="20" height="20"/>
            <span class="my-auto ms-1">RouterLink</span>
        </RouterLink>
        <RouterLink to="/" class="nav-link d-flex rounded-2" :class="props.vertical ? 'link-color px-3 py-2' : 'px-2 py-1'">
            <iconChart class="icon-color my-auto" fill="var(--bs-light)" width="20" height="20"/>
            <span class="my-auto ms-1">RouterLink</span>
        </RouterLink>
        <RouterLink to="/" class="nav-link d-flex rounded-2" :class="props.vertical ? 'link-color px-3 py-2' : 'px-2 py-1'">
            <iconChart class="icon-color my-auto" fill="var(--bs-light)" width="20" height="20"/>
            <span class="my-auto ms-1">RouterLink</span>
        </RouterLink>
    </nav>
</template>

<style scoped lang="scss">
[data-bs-theme='light']{
    .nav-link{
        .icon-color{
            fill: rgba(var(--bs-dark-rgb), 0.7);
        }
        span{
            color: rgba(var(--bs-dark-rgb), 0.7);
        }
        &:hover{
            .icon-color{
                fill: var(--bs-dark);
            }
            span{
                color: var(--bs-dark);
            }
        }
    }
    .link-color:hover{
        background-color: rgba(var(--bs-dark-rgb), 0.07);
    }
}
[data-bs-theme='dark']{
    .nav-link{
        .icon-color{
            fill: rgba(var(--bs-light-rgb), 0.7);
        }
        span{
            color: rgba(var(--bs-light-rgb), 0.7);
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
        background-color: rgba(var(--bs-light-rgb), 0.07);
    }
}
</style>
