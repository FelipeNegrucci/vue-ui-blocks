<script setup>
import iconChart from './icons/iconChart.vue';
import iconPrinter from './icons/iconPrinter.vue';
import iconSettings from './icons/iconSettings.vue';

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
    <footer class="container-fluid py-4 px-4 user-select-none">
        <div class="container-xxl px-xxl-4">
            <div class="row" :class="props.display.width < 625 ? 'justify-content-center' : 'justify-content-between'">
                <div class="col-auto text-color px-0 text-center" :class="props.display.width < 625 ? 'mb-2' : 'my-auto'">© 2024-2025 Felipe Negrucci. Todos os direitos reservados.</div>
                <div class="col-auto px-0 hstack gap-1 my-auto">
                    <RouterLink to="/" class="icon-area rounded-2 d-flex" data-bs-custom-class="custom-popover" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top" data-bs-content="Visualizar Dados">
                        <iconChart class="icon-color m-auto"/>
                    </RouterLink>
                    <RouterLink to="/" class="icon-area rounded-2 d-flex" data-bs-custom-class="custom-popover" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top" data-bs-content="Fila de Impressão">
                        <iconPrinter class="icon-color m-auto"/>
                    </RouterLink>
                    <RouterLink to="/" class="icon-area rounded-2 d-flex" data-bs-custom-class="custom-popover" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-placement="top" data-bs-content="Configurações">
                        <iconSettings class="icon-color m-auto"/>
                    </RouterLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.icon-area{
    width: 36px;
    height: 36px;
}
.icon-color{
    width: 20px;
    height: 20px;
}
[data-bs-theme='light']{
    footer{
        color: var(--bs-dark);
        background-color: var(--bs-gray-400);
        .text-color{
            color: rgba(var(--bs-dark-rgb), 0.6);
        }
        .icon-area{
            .icon-color{
                fill: rgba(var(--bs-dark-rgb), 0.6);
            }
            &:hover{
                background-color: rgba(var(--bs-dark-rgb), 0.17);
                .icon-color{
                    fill: var(--bs-dark);
                }
            }
        }
    }
}
[data-bs-theme='dark']{
    footer{
        color: var(--bs-light);
        background-color: var(--bs-gray-600);
        .text-color{
            color: rgba(var(--bs-light-rgb), 0.6);
        }
        .icon-area{
            .icon-color{
                fill: rgba(var(--bs-light-rgb), 0.6);
            }
            &:hover{
                background-color: rgba(var(--bs-light-rgb), 0.17);
                .icon-color{
                    fill: var(--bs-light);
                }
            }
        }
    }
}
</style>
