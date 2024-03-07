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
    brandName: 450,
    navigation: 900
}

function setColorMode(value){
    document.querySelector('html[data-bs-theme]').setAttribute('data-bs-theme', value)
    colorMode.value = value
}
</script>

<template>
    <header class="container-fluid border-bottom">
        <div class="container-xxl h-100">
            <div class="row justify-content-between h-100">
                <div class="col-auto my-auto px-0 hstack gap-4 text-capitalize">
                    <router-link to="/" class="hstack gap-2 py-2">
                        <iconEye class="brand-logo"/>
                        <div v-if="props.display.width >= breakPoints.brandName" class="brand-name h3 mb-0">gerenciador iris</div>
                    </router-link>
                    <nav v-if="props.display.width >= breakPoints.navigation" class="nav">
                        <router-link to="/" class="nav-link px-3 py-2 hstack gap-1">
                            <iconChart class="nav-icon"/>
                            <span>visualizar dados</span>
                        </router-link>
                        <router-link to="/" class="nav-link px-3 py-2 hstack gap-1">
                            <iconUser class="nav-icon"/>
                            <span>novo aluno</span>
                        </router-link>
                        <router-link to="/" class="nav-link px-3 py-2 hstack gap-1">
                            <iconFolder class="nav-icon"/>
                            <span>nova ficha</span>
                        </router-link>
                    </nav>
                </div>
                <div class="col-auto my-auto px-0 hstack gap-1">
                    <div class="dropdown">
                        <button type="button" data-bs-toggle="dropdown" aria-expanded="false" class="btn d-flex p-0 rounded-3 border-0 dropdown-toggle">
                            <iconSettings class="btn-icon m-auto"/>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end p-2 rounded-1 shadow-sm">
                            <li><a class="dropdown-item rounded rounded-1 px-3 py-2" href="#">Action</a></li>
                            <li><a class="dropdown-item rounded rounded-1 px-3 py-2" href="#">Another action</a></li>
                        </ul>
                    </div>
                    <div class="vr"></div>
                    <button v-if="colorMode == 'light'" @click="setColorMode('dark')" type="button" class="btn d-flex p-0 rounded-3 border-0">
                        <iconMoon class="btn-icon m-auto"/>
                    </button>
                    <button v-if="colorMode == 'dark'" @click="setColorMode('light')" type="button" class="btn d-flex p-0 rounded-3 border-0">
                        <iconSun class="btn-icon m-auto"/>
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
    }
}
[data-bs-theme="light"]{
    header{
        background-color: var(--bs-body-bg);
        .brand{
            &-logo{
                fill: var(--bs-primary);
            }
            &-name{
                color: var(--bs-dark);
            }
        }
        .nav-link{
            .nav-icon{
                fill: var(--bs-tertiary-color);
            }
            span{
                color: var(--bs-tertiary-color);
            }
            &:hover{
                .nav-icon{
                    fill: var(--bs-dark);
                }
                span{
                    color: var(--bs-dark);
                }
            }
        }
        .btn{
            .btn-icon{
                fill: var(--bs-tertiary-color);
            }
            &:hover{
                background-color: var(--bs-secondary-bg);
                .btn-icon{
                    fill: var(--bs-secondary-color);
                }
            }
        }
        .dropdown{
            &-menu{
                background-color: var(--bs-body-bg);
            }
            &-item{
                color: var(--bs-secondary-color);
                &:hover{
                    color: var(--bs-dark);
                    background-color: var(--bs-secondary-bg);
                }
            }
        }
    }
}
[data-bs-theme="dark"]{
    header{
        background-color: var(--bs-body-bg);
        .brand{
            &-logo{
                fill: var(--bs-primary);
            }
            &-name{
                color: var(--bs-light);
            }
        }
        .nav-link{
            .nav-icon{
                fill: var(--bs-tertiary-color);
            }
            span{
                color: var(--bs-tertiary-color);
            }
            &:hover{
                .nav-icon{
                    fill: var(--bs-light);
                }
                span{
                    color: var(--bs-light);
                }
            }
        }
        .btn{
            .btn-icon{
                fill: var(--bs-tertiary-color);
            }
            &:hover{
                background-color: var(--bs-secondary-bg);
                .btn-icon{
                    fill: var(--bs-secondary-color);
                }
            }
        }
        .dropdown{
            &-menu{
                background-color: var(--bs-body-bg);
            }
            &-item{
                color: var(--bs-tertiary-color);
                &:hover{
                    color: var(--bs-light);
                    background-color: var(--bs-secondary-bg);
                }
            }
        }
    }
}
</style>
