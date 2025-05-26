<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    words: {
        type: Array,
        required: true
    }
})

const randWords = ref([...words.sort(() => 0.5 - Math.random())])
const incorrectGuesses = ref([])
const result = ref('')
const resultClass = ref('')
const english = ref('')
const score = ref(0)
const testOver = ref(false)

const currWord = computed(() => {
    return randWords.length ? randWords[0] : ''
})

const onSubmit = () => {
    if (english === currWord.english) {
        flash('Correct!', 'success', { timeout: 1000 });
        score += 1;
    } else {
        flash('Wrong!', 'error', { timeout: 1000 });
        incorrectGuesses.push(currWord.german);
    }

    english = '';
    randWords.shift();

    if (randWords.length === 0) {
        testOver = true;
        displayResults();
    }
}

const displayResults = () => {
    if (incorrectGuesses.length === 0) {
        result = 'You got everything correct. Well done!';
        resultClass = 'success';
    } else {
        const incorrect = incorrectGuesses.join(', ');
        result = `<strong>You got the following words wrong:</strong> ${incorrect}`;
        resultClass = 'error';
    }
}
</script>

<template>
    <div>
        <h2>Score: {{ score }} out of {{ this.words.length }}</h2>

        <form action="#" @submit.prevent="onSubmit">
            <div class="ui labeled input fluid">
                <div class="ui label">
                    <i class="germany flag"></i> German
                </div>
                <input type="text" readonly :disabled="testOver" :value="currWord.german"/>
            </div>
            <div class="ui labeled input fluid">
                <div class="ui label">
                    <i class="united kingdom flag"></i> English
                </div>
                <input type="text" placeholder="Enter word..." v-model="english" :disabled="testOver" autocomplete="off" />
            </div>

            <button class="positive ui button" :disabled="testOver">Submit</button>
        </form>

        <p :class="['results', resultClass]">
            <span v-html="result"></span>
        </p>
    </div>
</template>

<style scoped>
.results {
    margin: 25px auto;
    padding: 15px;
    border-radius: 5px;
}

.error {
    border: 1px solid #ebccd1;
    color: #a94442;
    background-color: #f2dede;
}

.success {
    border: 1px solid #d6e9c6;
    color: #3c763d;
    background-color: #dff0d8;
}
</style>