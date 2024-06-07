<template>
    <section>
        <base-card>
            <h2 class="text-4xl font-bold">{{ fullName }}</h2>
            <h3 class="text-xl font-medium">${{ rate }}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <header class="space-y-5" v-if="!route.path.includes('contact')">
                <h2 class="text-2xl font-semibold">Interested? Reach Out Now!</h2>
                <base-button mode="flat" link :to="contactLink">Contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p class="mt-4">{{ description }}</p>
        </base-card>
    </section>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    id: String
})

const store = useStore()
const route = useRoute()

const selectedCoach = computed(() => {return store.getters['coaches/coaches'].find((coach) => coach.id === props.id)})

const fullName = computed(() => {
    return selectedCoach.value.firstName + " " + selectedCoach.value.lastName
})
const contactLink = computed(() => {
    return `${route.path}/contact`
})

const rate = computed(() => { return selectedCoach.value.hourlyRate })
const areas = computed(() => { return selectedCoach.value.areas })
const description = computed(() => { return selectedCoach.value.description })
</script>
