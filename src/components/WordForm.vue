<script setup>
import { ref } from 'vue'

const props = defineProps({
    word: {
        type: Object,
        required: false,
        default: () => {
            return {
                english: '',
                german: '',
                french: ''
            }
        }
    }
})

const errorsPresent = ref(false)

const onSubmit = () => {
    if (word.english === '' || word.german === '' || word.french === '') {
        errorsPresent = true;
    } else {
        defineEmits('createOrUpdate', word);
    }
}
</script>

<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="germany flag"></i> German
            </div>
            <input type="text" placeholder="Enter word..." v-model="word.german" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag"></i> English
            </div>
            <input type="text" placeholder="Enter word..." v-model="word.english" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="france flag"></i> French
            </div>
            <input type="text" placeholder="Enter word..." v-model="word.french" />
        </div>

        <button class="positive ui button">Submit</button>
    </form>
</template>

<style scoped>
.error {
    color: red;
}
</style>