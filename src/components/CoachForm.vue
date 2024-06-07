<template>
    <form @submit.prevent="submitForm" class="space-y-5">
        <div class="flex flex-col gap-y-2">
            <label for="firstname" :class="firstname.isValid ? 'text-black' : 'text-red-500'">First
                Name</label>
            <input type="text" name="firstname" id="firstname"
                :class="`${firstname.isValid ? 'border' : 'border border-red-700'} 'active:border-purple-500 focus:border-purple-500  outline-none rounded-lg p-2 w-full'`"
                v-model.trim="firstname.val" @blur="clearValidity('firstname')" />
            <p v-if="!firstname.isValid" class="text-red-500">Please enter a first name</p>
        </div>

        <div class="flex flex-col gap-y-2">
            <label for="lastname" :class="lastname.isValid ? 'text-black' : 'text-red-500'">Last Name</label>
            <input type="text" name="lastname" id="lastname"
                :class="`${lastname.isValid ? 'border' : 'border border-red-700'} 'active:border-purple-500 focus:border-purple-500 outline-none rounded-lg p-2 w-full'`"
                v-model.trim="lastname.val" @blur="clearValidity('lastname')" />
            <p v-if="!lastname.isValid" class="text-red-500">Please enter a last name</p>

        </div>

        <div class="flex flex-col gap-y-2">
            <label for="description" :class="description.isValid ? 'text-black' : 'text-red-500'">Description</label>
            <textarea type="text" name="description" id="description"
                :class="`${description.isValid ? 'border' : 'border border-red-700'} 'active:border-purple-500 focus:border-purple-500 outline-none rounded-lg p-2 w-full resize-none'`"
                v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid" class="text-red-500">Please enter description</p>

        </div>

        <div class="flex flex-col gap-y-2">
            <label for="rate" :class="rate.isValid ? 'text-black' : 'text-red-500'">Hourly Rate</label>
            <input type="number" name="rate" id="rate"
                :class="`${rate.isValid ? 'border' : 'border border-red-700'} 'active:border-purple-500 focus:border-purple-500 outline-none rounded-lg p-2 w-full'`"
                v-model.number="rate.val" @blur="clearValidity('rate')" />
            <p v-if="!rate.isValid" class="text-red-500">Please enter a rate</p>

        </div>
        <div class="flex flex-col gap-y-2">
            <h2 :class="rate.isValid ? 'text-black' : 'text-red-500'">Area(s) of Expertise</h2>
            <div class="flex items-center gap-x-2">
                <input type="checkbox" name="frontend" id="frontend" v-model="areas.val" value="frontend"
                    @blur="clearValidity('areas')">
                <label for="frontend">Frontend Development</label>
            </div>
            <div class="flex items-center gap-x-2">
                <input type="checkbox" name="backend" id="backend" v-model="areas.val" value="backend"
                    @blur="clearValidity('areas')">
                <label for="backend">Backend Development</label>
            </div>
            <div class="flex items-center gap-x-2">
                <input type="checkbox" name="career" id="career" v-model="areas.val" value="career"
                    @blur="clearValidity('areas')">
                <label for="career">Career Advisory</label>
            </div>

            <p v-if="!areas.isValid" class="text-red-500">Please select your area of Expertise</p>

        </div>
        <p v-if="!isFormValid" class="my-2 text-red-700 text-sm italic">Please fix the errors in the above
            input</p>
        <base-button mode="flat">Register</base-button>
    </form>
</template>

<script setup>
import { ref, defineEmits } from 'vue'


const emits = defineEmits(['save-coach'])
const firstname = ref({
    val: "",
    isValid: true
})
const lastname = ref({
    val: "",
    isValid: true
})
const description = ref({
    val: "",
    isValid: true
})
const rate = ref({
    val: null,
    isValid: true
})
const areas = ref({
    val: [],
    isValid: true
})
const isFormValid = ref(true)

function validateForm() {
    isFormValid.value = true
    if (firstname.value.val === "") {
        firstname.value.isValid = false
        isFormValid.value = false
    }
    if (lastname.value.val === "") {
        lastname.value.isValid = false
        isFormValid.value = false
    }
    if (description.value.val === "") {
        description.value.isValid = false
        isFormValid.value = false
    }
    if (!rate.value.val || !rate.value.val < 0) {
        rate.value.isValid = false
        isFormValid.value = false
    }
    if (areas.value.val.length === 0) {
        areas.value.isValid = false
        isFormValid.value = false
    }
}

function clearValidity(input) {
[input].isValid = true
}

function submitForm() {
    validateForm()
    if (!isFormValid.value) {
        return;
    }
    const newFormData = {
        first: firstname.value.val,
        last: lastname.value.val,
        rate: rate.value.val,
        desc: description.value.val,
        areas: areas.value.val
    }

    emits('save-coach', newFormData)
}
</script>