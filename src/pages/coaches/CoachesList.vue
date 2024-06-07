<template>
	<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
		<p>{{ error }}</p>
	</base-dialog>

	<section>
		<coach-filter @change-filters="setFilters"></coach-filter>
		<base-card>
			<div class="flex justify-between items-center mb-10">
				<base-button mode="outline">Refresh</base-button>
				<base-button mode="flat" link to="/register" v-if="!isCoach">Register as a Coach </base-button>
			</div>
			<base-spinner v-if="isLoading"></base-spinner>
			<ul v-else-if="hasCoaches && !isLoading" class="space-y-5">
				<coach-item v-for="coach in filteredCoaches" :id="coach.id" :key="coach.id" :firstname="coach.firstName"
					:lastname="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
			</ul>
			<div v-else>No Coaches Found</div>
		</base-card>
	</section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import CoachItem from "../../components/CoachItem.vue";
import CoachFilter from "../../components/CoachFilter.vue"

const store = useStore();

const isLoading = ref(false)
const errorMsg = ref(null)
const activeFilters = ref({
	frontend: true,
	backend: true,
	career: true,

})

const isCoach = computed(() => {
	return store.getters['coaches/isCoach']
})
const coaches = computed(() => {
	return store.getters["coaches/coaches"];

})
const filteredCoaches = computed(() => {
	return coaches.value.filter(coach => {
		if (activeFilters.value.frontend && coach.areas.includes('frontend')) {
			return true
		}
		if (activeFilters.value.backend && coach.areas.includes('backend')) {
			return true
		}
		if (activeFilters.value.career && coach.areas.includes('career')) {
			return true
		}
		return false
	})
});

const hasCoaches = computed(() => {
	return store.getters["coaches/hasCoaches"];
});

function setFilters(updatedFilters) {
	activeFilters.value = updatedFilters
}
async function loadCoaches(refresh = false) {
	isLoading.value = true;
	try {
		await store.dispatch('coaches/loadCoaches', {
			forceRefresh: refresh,
		});
	} catch (error) {
		errorMsg.value = error.message || 'Something went wrong!';
	}
	isLoading.value = false;
}
onMounted(() => {
	loadCoaches()

})
</script>
