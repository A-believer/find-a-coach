<template>
    <base-card class="space-y-10">
        <h3 class="text-3xl">Coach Registration</h3>
        <coach-form @save-coach="saveCoach"></coach-form>
    </base-card>
</template>

<script setup>
import { useStore } from "vuex";
import CoachForm from "../../components/CoachForm.vue"
import { useRouter } from "vue-router";

const store = useStore()
const router = useRouter()

function saveCoach(data) {
    store.dispatch("coaches/addCoach", data)
    router.replace('/')
}
</script>
