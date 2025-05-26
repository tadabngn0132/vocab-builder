<script setup>
import { ref, onMounted } from 'vue'
import { api, showSuccessMessage, showErrorMessage } from '../helpers/helpers'

const words = ref([])

const onDestroy = async (id) => {
  const sure = window.confirm('Are you sure?')
  if (!sure) return
  await api.deleteWord(id)
  showSuccessMessage('Word deleted successfully!')
  words.value = words.filter(word => word._id !== id)
}

onMounted(async () => {
  words.value = await api.getWords()
})
</script>

<template>
    <div>
        <h1>Words extra (Nguyen Ba Dat)</h1>
        <table id="words" class="ui celled compact table">
            <thead>
                <tr>
                    <th>English</th>
                    <th>German</th>
                    <th>French</th>
                    <th colspan="3"></th>
                </tr>
            </thead>
            <tr v-for="(word, i) in words" :key="i">
                <td>{{ word.english }}</td>
                <td>{{ word.german }}</td>
                <td>{{ word.french }}</td>
                <td width="75" class="center aligned">
                <router-link :to="{ name: 'show', params: { id: word._id }}">Show</router-link></td>
                <td width="75" class="center aligned">
                <router-link :to="{ name: 'edit', params: { id: word._id }}">Edit</router-link></td>
                <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
                <a :href="`/words/${word._id}`">Destroy</a></td>
            </tr>
        </table>
    </div>
</template>
