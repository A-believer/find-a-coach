<template>
    <button v-if="!link"
        :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to"
        :class="mode">
        <slot></slot>
    </router-link>
</template>

<script setup>
import {  defineProps } from 'vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    mode: {
        type: String,
        required: true,
        default: null
    },
    link: {
        type: Boolean,
        required: false,
        default: false
    },
    to: {
        type: String,
        required: false,
        default: "/"
    }
})



</script>

<style scoped>
button,
a {
    text-decoration: none;
    padding: 0.3rem 0.8rem;
    font: inherit;
    background-color: #3a0061;
    border: 0.5px thin #3a0061;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
    background-color: #270041;
    border-color: #270041;
}

.flat {
    background-color: #3a0061;
    color: white;
    border: none;
}

.outline {
    background-color: transparent;
    border-color: #270041;
    color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
    background-color: #edd2ff;
    color: #3a0061;
}
</style>