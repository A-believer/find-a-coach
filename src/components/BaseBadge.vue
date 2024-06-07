<template>
    <span class="badge" :class="type">
        {{ text }}
    </span>
</template>

<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
    type: String,
    title: String
})

const text = computed(() => {
    return props.title.toUpperCase()
  })
</script>


<style scoped>
.badge {
    background-color: #ccc;
    color: #252525;
    font-size: 12px;
    border-radius: 15px;
    padding: 0.25rem 0.75rem;
    display: inline-block;
    margin-right: 0.5rem;
}

.frontend {
    background-color: #3d008d;
    color: white;
}

.backend {
    background-color: #71008d;
    color: white;
}

.career {
    background-color: #8d006e;
    color: white;
}
</style>