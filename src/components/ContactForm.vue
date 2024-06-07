<template>
    <form @submit.prevent="submitForm" class="space-y-5 mt-5">
        <div class="flex flex-col gap-y-2">
            <label for="email">Your Email</label>
            <input type="text" name="email" id="email" v-model="data.email.val"
                class="active:border-purple-700 focus:border-purple-700 outline-none rounded-lg p-2 w-full border-2 border-purple-300">
        </div>
        <div class="flex flex-col gap-y-2">
            <label for="message">Your Message</label>
            <textarea type="text" name="message" id="message" v-model="data.message.val" rows="3"
                class="active:border-purple-700 focus:border-purple-700 outline-none rounded-lg p-2 w-full border-2 border-purple-300 resize-none"></textarea>
        </div>

        <base-button mode="flat">Send Request</base-button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const router = useRouter()
const route = useRoute()

const data = ref({
    email: {
        val: "",
        isValid: true
    },
    message: {
        val: "",
        isValid: true
    },
    isFormValid: true
})

function validateForm() {
    data.value.isFormValid = true
    if (!data.value.email.val.includes('@') || data.value.email.val === "") {
        data.value.email.isValid = false
        data.value.isFormValid = false
    }
    if (!data.value.message.val === "") {
        data.value.message.isValid = false
        data.value.isFormValid = false
    }
}

function submitForm() {
    validateForm()
    if (!data.value.isFormValid) {
        return
    }

    const formData = {
        email: data.value.email.val,
        message: data.value.message.val
    }

    store.dispatch('requests/addRequest', {...formData, coachId: route.params.id})
router.replace('/requests')
    
}
</script>