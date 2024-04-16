<script setup>
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
            <div class="btn btn-primary d-flex px-3 gap-1">
                <iconPlus class="my-auto" width="20" height="20" stroke="var(--bs-light)"/>
                <span class="my-auto text-nowrap">novo</span>
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
                <button class="d-flex border-0 p-0 my-auto bg-transparent">
                    <iconDotsHorizontal class="dots-color" width="34" height="34"/>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
            .dots-color{
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
            .dots-color{
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
