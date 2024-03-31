<script setup>
import { ref } from 'vue';
import iconSearch from './icons/iconSearch.vue'

var isFocused = ref(false)
</script>

<template>
<div class="input-group rounded-3" :class="{'input-focus-off': !isFocused, 'input-focus-on': isFocused}">
    <span class="input-group-text border-0 rounded-3">
        <iconSearch class="icon-color" width="18" height="18" stroke="var(--bs-dark)" fill="none"/>
    </span>
    <input @focusin="isFocused = true" @focusout="isFocused = false" type="text" class="form-control focus-ring border-0 ps-0 me-1" placeholder="Procurar por nome..." aria-label="SearchBar" aria-describedby="SearchBar">
    <button class="btn btn-primary rounded-end-3 text-capitalize" type="button">procurar</button>
</div>
</template>

<style scoped lang="scss">
[data-bs-theme='light']{
    .icon-color{
        stroke: var(--bs-gray-700);
    }
    .input-group{
        &.input-focus{
            &-off{
                border: 1px solid var(--bs-gray-400);
            }
            &-on{
                border: 1px solid rgba(var(--bs-primary-rgb), 0.65);
            }
        }
        .input-group-text{
            background-color: var(--bs-gray-100);
        }
        .form-control{
            --bs-focus-ring-width: 0px;
            background-color: var(--bs-gray-100);
            &::placeholder{
                color: var(--bs-gray-600);
                opacity: 1;
            }
        }   
    }
}
[data-bs-theme='dark']{
    .icon-color{
        stroke: var(--bs-gray-400);
    }
    .input-group{
        &.input-focus{
            &-off{
                border: 1px solid var(--bs-gray-600);
            }
            &-on{
                border: 1px solid rgba(var(--bs-primary-rgb), 0.65);
            }
        }
        .input-group-text{
            background-color: var(--bs-gray-800);
        }
        .form-control{
            --bs-focus-ring-width: 0px;
            background-color: var(--bs-gray-800);
            &::placeholder{
                color: var(--bs-gray-500);
                opacity: 1;
            }
        }   
    }
}
</style>
