<script setup>
import iconEye from './icons/iconEye.vue';
import iconChart from './icons/iconChart.vue';
import iconUser from './icons/iconUser.vue';
import iconFolder from './icons/iconFolder.vue';

</script>

<template>
    <div class="container-fluid px-1 px-sm-2 px-md-3 px-lg-3 px-xl-4 px-xxl-0 user-select-none">
        <div class="container-xxl py-2">
            <div class="row py-4">
                <div class="col px-0 vstack gap-3">
                    <div class="px-0 mx-auto">
                        <div class="hstack gap-2">
                            <iconEye class="brand-logo"/>
                            <div class="brand-name h4 mb-0 text-capitalize">gerenciador iris</div>
                        </div>
                    </div>
                    <div class="footer-text text-center px-0">© 2024-2025 Felipe Negrucci. Todos os direitos reservados.</div>
                    <div class="social px-0 mx-auto hstack gap-3">
                        <iconChart class="social-icon"/>
                        <iconUser class="social-icon"/>
                        <iconFolder class="social-icon"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container-fluid{
    .brand-logo{
        width: 32px;
        height: 32px;
    }
    .social-icon{
        width: 20px;
        height: 20px;
        transition: fill .2s ease-in-out;
    }
}
[data-bs-theme="light"], [data-bs-theme="dark"]{
    .container-fluid{
        color: var(--bs-light);
        background-color: var(--bs-dark);
        .brand-name{
            color: var(--bs-light);
        }
        .footer-text{
            color: var(--bs-gray-500);
        }
        .social{
            &-icon{
                fill: var(--bs-gray-500);
                &:hover{
                    fill: var(--bs-light);
                }
            }
        }
    }
}
</style>
