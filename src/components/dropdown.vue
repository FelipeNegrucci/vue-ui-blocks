<script setup>
import iconEdit from './icons/iconEdit.vue';
import iconDelete from './icons/iconDelete.vue';
</script>

<template>
    <ul class="dropdown-menu rounded-2 p-0 shadow-sm">
        <div class="dropdown-header h6 text-center text-capitalize py-2 rounded-top-2">executar</div>
        <div class="hstack gap-2 p-2">
            <a class="dropdown-item rounded-2" href="#">
                <div class="h-100 vstack gap-1 justify-content-center align-items-center">
                    <iconEdit class="dropdown-icon"/>
                    <span class="text-capitalize">editar</span>
                </div>
            </a>
            <a class="dropdown-item rounded-2" href="#">
                <div class="h-100 vstack gap-1 justify-content-center align-items-center">
                    <iconDelete class="dropdown-icon"/>
                    <span class="text-capitalize">deletar</span>
                </div>
            </a>
        </div>
    </ul>
</template>

<style scoped lang="scss">
.dropdown-{
    &item{
        width: 88px;
        height: 80px;
        span{
            scale: 0.85;
        }
    }
    &icon{
        width: 28px;
        height: 28px;
    }
}
[data-bs-theme='light']{
    .dropdown-{
        &menu{
            background-color: var(--bs-gray-100);
            border: 1px solid var(--bs-gray-400);
        }
        &header{
            color: var(--bs-gray-600);
            background-color: var(--bs-gray-200);
        }
        &item{
            span{
                color: var(--bs-gray-700);
            }
            &:hover{
                background-color: var(--bs-gray-200);
                .dropdown-icon{
                    fill: var(--bs-gray-700);
                }
                span{
                    color: var(--bs-gray-900);
                }
            }
        }
        &icon{
            fill: var(--bs-gray-500);
        }
    }
}
[data-bs-theme='dark']{
    .dropdown-{
        &menu{
            background-color: var(--bs-gray-900);
            border: 1px solid var(--bs-gray-700);
        }
        &header{
            color: var(--bs-gray-400);
            background-color: var(--bs-gray-800);
        }
        &item{
            span{
                color: var(--bs-gray-500);
            }
            &:hover{
                background-color: var(--bs-gray-800);
                .dropdown-icon{
                    fill: var(--bs-gray-500);
                }
                span{
                    color: var(--bs-gray-300);
                }
            }
        }
        &icon{
            fill: var(--bs-gray-700);
        }
    }
}
</style>
