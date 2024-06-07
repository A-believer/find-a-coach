<template>
    <section>
        <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <base-card>
            <h2 class="text-4xl font-bold">Requests</h2>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="hasRequest && !isLoading" class="flex flex-col gap-y-5 mt-5">
                <li v-for="req in requests" :key="req" class="space-y-5">
                    <p class="flex flex-col text-lg">
                        <span class="text-2xl font-semibold">Email</span><a :href="'mailto:' + req.email"
                            class="text-cyan-400 underline">{{ req.email }}</a>
                    </p>
                    <p class="flex flex-col text-lg">
                        <span class="text-2xl font-semibold">Message</span><span>{{ req.message }}</span>
                    </p>
                </li>
            </ul>
            <div v-else class="text-xl font-semibold text-center my-10">No requests yet</div>
        </base-card>
    </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = ref(false)
const errorMsg = ref(null)
const requests = computed(() => {
  return store.getters["requests/requests"];
});

const hasRequest = computed(() => {
  return store.getters["requests/hasRequest"];
});

async function loadRequests() {
    isLoading.value = true;
    try {
        await store.dispatch('requests/fetchRequests');
    } catch (error) {
        errorMsg.value = error.message || 'Something failed!';
    }
    isLoading.value = false;
}
loadRequests()
</script>
