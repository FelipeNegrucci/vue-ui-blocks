<script setup>
import { inject } from 'vue';

import iconChart from './icons/iconChart.vue';
import iconSettings from './icons/iconSettings.vue';
import iconMoon from './icons/iconMoon.vue';
import iconSun from './icons/iconSun.vue';
import iconMenu from './icons/iconMenu.vue';
import iconFolder from './icons/iconFolder.vue';
import iconUser from './icons/iconUser.vue';
import iconEye from './icons/iconEye.vue';
import iconPrinter from './icons/iconPrinter.vue';

const props = defineProps({
    display:{
        width:{
            required: true,
            type: Object
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

var colorMode = inject('colorMode')
const breakPoints = {
    brandName: 480,
    navigation: 1035
}

function toggleColorMode(){
    colorMode.value = colorMode.value == 'light' ? 'dark' : 'light'
    localStorage.setItem("color-mode", colorMode.value)
    document.querySelector('html[data-bs-theme]').setAttribute('data-bs-theme', colorMode.value)
}
</script>

<template>
    <header class="container-fluid px-4 user-select-none">
        <div class="container-xxl h-100 px-1 px-sm-2 px-md-3 px-lg-3 px-xl-4 px-xxl-4">
            <div class="row justify-content-between h-100">
                <div class="col-auto my-auto px-0 hstack gap-4 text-capitalize">
                    <div class="hstack gap-2 py-2">
                        <iconEye class="brand-logo"/>
                        <div v-if="props.display.width >= breakPoints.brandName" class="brand-name h3 mb-0">gerenciador iris</div>
                    </div>
                    <nav v-if="props.display.width >= breakPoints.navigation" class="nav">
                        <router-link to="/" class="nav-link px-3 py-2 hstack gap-1">
                            <iconChart class="nav-icon"/>
                            <span>visualizar dados</span>
                        </router-link>
                        <router-link to="/alunos" class="nav-link px-3 py-2 hstack gap-1">
                            <iconUser class="nav-icon"/>
                            <span>painel de alunos</span>
                        </router-link>
                        <router-link to="/fichas" class="nav-link px-3 py-2 hstack gap-1">
                            <iconFolder class="nav-icon"/>
                            <span>fichas de treino</span>
                        </router-link>
                    </nav>
                </div>
                <div class="col-auto my-auto px-0 hstack gap-1">
                    <div class="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" class="btn d-flex p-0 rounded-3 border-0 dropdown-toggle">
                            <iconSettings class="btn-icon m-auto"/>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end py-0 rounded-1 shadow-sm text-capitalize">
                            <div class="dropdown-title rounded-top-1 text-center h6 mb-0 p-2">painel</div>
                            <div class="p-2">
                                <li>
                                    <a class="dropdown-item rounded rounded-1 px-3 py-2" href="#">
                                        <iconUser class="dropdown-icon me-1"/>
                                        <span>Entrar na conta</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item rounded rounded-1 px-3 py-2" href="#">
                                        <iconPrinter class="dropdown-icon me-1"/>
                                        <span>imprimir fichas</span>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div class="vr"></div>
                    <button @click="toggleColorMode()" type="button" class="btn d-flex p-0 rounded-3 border-0">
                        <iconMoon v-if="colorMode == 'light'" class="btn-icon m-auto"/>
                        <iconSun v-if="colorMode == 'dark'" class="btn-icon m-auto"/>
                    </button>
                    <button v-if="props.display.width < breakPoints.navigation" type="button" class="btn d-flex p-0 rounded-3 border-0 ms-2">
                        <iconMenu class="btn-icon m-auto"/>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header{
    height: 72px;
    .brand-logo{
        height: 40px;
    }
    .nav-link{
        .nav-icon{
            width: 18px;
            height: 18px;
            transition: fill .2s ease-in-out;
        }
        span{
            transition: color .2s ease-in-out;
        }
    }
    .btn{
        width: 38px;
        height: 38px;
        transition: fill .2s ease-in-out, background-color .2s ease-in-out;
        .btn-icon{
            width: 22px;
            height: 22px;
            transition: fill .2s ease-in-out;
        }
    }
    .dropdown{
        &-menu{
            transition: background-color .2s ease-in-out;
        }
        &-item{
            transition: color .2s ease-in-out, background-color .2s ease-in-out;
        }
        &-icon{
            width: 22px;
            height: 22px;
            transition: fill .2s ease-in-out;
        }
    }
}
[data-bs-theme="light"], [data-bs-theme="dark"]{
    header{
        background-color: var(--bs-dark);
        .brand{
            &-name{
                color: var(--bs-light);
            }
        }
        .nav-link{
            .nav-icon{
                fill: rgba(var(--bs-primary-rgb), .6);
            }
            span{
                color: var(--bs-gray-500);
            }
            &:hover{
                .nav-icon{
                    fill: rgba(var(--bs-primary-rgb), 1);
                }
                span{
                    color: var(--bs-light);
                }
            }
        }
        .btn{
            .btn-icon{
                fill: var(--bs-gray-500);
            }
            &:hover{
                background-color: rgba(var(--bs-secondary-rgb), .3);
                .btn-icon{
                    fill: var(--bs-light);
                }
            }
        }
        .vr{
            background-color: var(--bs-gray-400);
        }
    }
}
[data-bs-theme="light"]{
    header{
        .dropdown{
            &-menu{
                background-color: var(--bs-secondary-bg);
            }
            &-title{
                color: var(--bs-gray-700);
                background-color: var(--bs-gray-500);
            }
            &-item{
                color: var(--bs-secondary-color);
                &:hover{
                    color: var(--bs-dark);
                    background-color: var(--bs-tertiary-bg);
                    .dropdown-icon{
                        fill: var(--bs-dark);
                    }
                }
            }
            &-icon{
                fill: var(--bs-secondary-color);
            }
        }
    }
}
[data-bs-theme="dark"]{
    header{
        .dropdown{
            &-menu{
                background-color: var(--bs-secondary-bg);
            }
            &-title{
                color: var(--bs-gray-500);
                background-color: var(--bs-gray-700);
            }
            &-item{
                color: var(--bs-secondary-color);
                &:hover{
                    color: var(--bs-light);
                    background-color: var(--bs-gray-700);
                    .dropdown-icon{
                        fill: var(--bs-light);
                    }
                }
            }
            &-icon{
                fill: var(--bs-secondary-color);
            }
        }
    }
}
</style>
