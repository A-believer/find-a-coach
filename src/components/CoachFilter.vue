<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <div class="flex items-center gap-x-5">
            <div class="flex items-center gap-x-2">
                <input type="checkbox" name="frontend" id="frontend" @change="toggleFilters" checked>
                <label for="frontend">Frontend</label>
            </div>
            <div class="flex items-center gap-x-2">
                <input type="checkbox" name="backend" id="backend" @change="toggleFilters" checked>
                <label for="backend">Backend</label>
            </div>
            <div class="flex items-center gap-x-2">
                <input type="checkbox" name="career" id="career" @change="toggleFilters" checked>
                <label for="career">Career</label>
            </div>
        </div>
    </base-card>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import BaseCard from './BaseCard.vue';

const filters = ref({
    frontend: true,
    backend: true,
    career: true,

})


const emits = defineEmits(['change-filters'])

function toggleFilters(e) {
    const inputId = e.target.id
    const isActive = e.target.checked

    const updatedFilters = {
        ...filters.value,
        [inputId]: isActive
    }

    filters.value = updatedFilters
    emits('change-filters', updatedFilters)
}

</script>