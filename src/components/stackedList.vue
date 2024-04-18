<script setup>
import dropdownComp from './dropdown.vue';
import iconPlus from './icons/iconPlus.vue';
import iconUser from './icons/iconUser.vue';
import iconDotsHorizontal from './icons/iconDotsHorizontal.vue';

const iconColors = [
    '#27A599',
    '#E08300',
    '#5089f2',
    '#a93ec9'
]

const props = defineProps({
    displayWidth:{
        required: true,
        type: Number
    },
    title:{
        type: String,
        required: true,
        default: "table title"
    },
    list:{
        type: Array,
        required: true,
        default(){
            return [
                {
                  name: "Gabriela Rodrigues Almeida",
                  position: "Personal Trainer Sênior",
                }
            ]
        }
    }
})
</script>

<template>
    <div class="element-color vstack mx-0 py-3 rounded-2 gap-3 border" :style="displayWidth > 1339 ? 'min-height: 600px' : 'min-height: auto'">

        <div class="d-flex justify-content-between px-3 gap-3 text-capitalize">
            <div class="fw-bold h5 my-auto text-nowrap">{{ props.title }}</div>

            <div class="btn btn-primary d-flex px-3 gap-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <iconPlus class="my-auto" width="20" height="20" stroke="var(--bs-light)"/>
                <span class="my-auto text-nowrap">novo</span>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style="background-color: transparent;">
                    <div class="modal-content">
                        <div class="modal-body vstack gap-3 p-4">
                            <div class="d-flex justify-content-between">
                                <span class="text-capitalize h5 my-auto">novo instrutor</span>
                                <button type="button" class="btn-close p-2" data-bs-dismiss="modal" aria-label="Close" style="scale: 0.8;"></button>
                            </div>
                            <hr class="border border-1 opacity-50 my-0">
                            <form class="vstack gap-3">
                                <div class="col">
                                    <label for="inputName" class="form-label">Nome Completo</label>
                                    <input type="text" class="form-control px-3 py-2" id="inputName" placeholder="Nome do Instrutor">
                                </div>
                                <div class="col">
                                    <label for="inputPosition" class="form-label">Cargo</label>
                                    <input type="text" class="form-control px-3 py-2" id="inputPosition" placeholder="Cargo Ocupado">
                                </div>
                                <div class="col">
                                    <div class="mb-2">Cor Da Etiqueta</div>
                                    <div class="tag-colors hstack gap-2">
                                        <div v-for="(color, index) in iconColors" :key="index">
                                            <input type="radio" class="btn-check" name="options" :id="'option' + index" autocomplete="off">
                                            <label class="btn" :for="'option' + index" :style="{ 'background-color':color }"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="col d-flex gap-3">
                                    <div class="btn btn-primary d-flex gap-1 col justify-content-center" type="submit">
                                        <iconPlus class="my-auto" width="20" height="20" stroke="var(--bs-light)"/>
                                        <span class="my-auto text-nowrap">novo instrutor</span>
                                    </div>
                                    <div class="btn btn-outline-secondary d-flex gap-1 col justify-content-center">
                                        <span class="my-auto text-nowrap">descartar</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="vstack gap-2 mx-3 mb-2">
            <div v-for="(row, index) in props.list" :key="index" class="item-list d-flex justify-content-between rounded-2 px-3 py-2">
                <div class="d-flex">

                    <div class="icon-area p-1 my-auto me-3 rounded-circle d-flex">
                        <iconUser class="m-auto" :fill="iconColors[Math.floor(Math.random() * iconColors.length)]"/>
                    </div>
                    <div class="my-auto">
                        <div class="text-name">{{ row.name }}</div>
                        <div class="text-position">{{ row.position }}</div>
                    </div>
                </div>
                <div class="dropdown my-auto">
                    <button class="dropdown-toggle border-0 p-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <iconDotsHorizontal class="dropdown-dots" width="34" height="34"/>
                    </button>
                    <dropdownComp/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.tag-colors label{
    width: 32px;
    height: 32px;
}
.element-color{
    min-width: 640px;
    max-height: 600px;
}
.icon-area{
    width: 52px;
    height: 52px;
    transition: background-color 0.15s ease-in-out;
}
.item-list{
    transition: background-color 0.15s ease-in-out;
    button{
        transition: opacity 0.15s ease-in-out;
        opacity: 0;
    }
    &:hover button{
        opacity: .5;
    }
}
[data-bs-theme='light']{
    .element-color{
        background-color: var(--bs-gray-100);
    }
    .item-list{
        &:hover{
            background-color: var(--bs-gray-200);
            .icon-area{
                background-color: var(--bs-gray-300);
            }
            .dropdown-dots{
                stroke: var(--bs-gray-800);
            }
        }
    }
    .icon-area{
        background-color: var(--bs-gray-200);
    }
    .text-name{
        color: var(--bs-gray-800);
    }
    .text-position{
        color: var(--bs-gray-600);
    }
}
[data-bs-theme='dark']{
    .element-color{
        background-color: var(--bs-gray-800);
    }
    .item-list{
        &:hover{
            background-color: var(--bs-gray-700);
            .icon-area{
                background-color: var(--bs-gray-800);
            }
            .dropdown-dots{
                stroke: var(--bs-gray-200);
            }
        }
    }
    .icon-area{
        background-color: var(--bs-gray-900);
    }
    .text-name{
        color: var(--bs-gray-300);
    }
    .text-position{
        color: var(--bs-gray-500);
    }
}
</style>
