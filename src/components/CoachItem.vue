<template>
    <li :key="key" class="p-5 border-2 rounded-lg shadow-lg shadow-purple-600 space-y-4">
        <h3 class="font-bold text-2xl">{{ fullname }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        </div>

        <div class="flex items-center justify-end gap-x-3">
            <base-button :to="coachContact" mode="outline" :link="true">Contact</base-button>
            <base-button :to="coachDetails" mode="flat" :link="true">View Details</base-button>
        </div>
    </li>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    firstname: String,
    lastname: String,
    id: String,
    rate: Number,
    areas: Array
})

const fullname = computed(() => {
    return props.firstname + " " + props.lastname
})

const coachContact = computed(() => {
    return `${route.path}/${props.id}/contact`
})

const coachDetails = computed(() => {
    return `${route.path}/${props.id}`
})
</script>
