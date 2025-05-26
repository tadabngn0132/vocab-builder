<script setup>
import { ref } from 'vue'
import avatarImage from '@/assets/avt.jpg'

const avatar = ref(avatarImage)
const alt = ref('Avatar')
const github = ref('https://github.com/tadabngn0132')
const description = ref('I am a student of class CO1201, currently doing coursework on COMP1842 - Web Programming 2 of semester 6.')
const username = ref('tadabngn0132')
const fullname = ref('Nguyen Ba Dat')
</script>

<template>
    <!-- The main container contains user profile information. -->
    <div class='profile-container'>
        <!-- The user's avatar image, src is associated with the avatar variable -->
        <img :src="avatar" :alt="alt">
        
        <!-- User information: name, full name, GitHub link, and description -->
        <div class='info'>
        <h2 class="username">{{ username }}</h2>
        <h4 class="fullname">{{ fullname }}</h4>
        <!-- Link to user's GitHub, use binding to bind to github variable -->
        <a :href='github' class='social'><i class="fa-brands fa-github"></i> {{ username }}</a>
        <p class='description'>{{ description }}</p>
        </div>
    </div>
</template>

<style>
.profile-container {
    display: flex;
    align-items: center;
    gap: 2.5em;
}
img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
}
.username {
    margin: 0;
    font-weight: lighter;
}
.fullname {
    margin-top: 0.5em;
    font-weight: bolder;
}
.social {
    color: #000;
    padding: 0.35em 0.65em;
    border-radius: 10em;
    background-color: #ddd;
    font-size: 14px;
}
.social:hover {
    color: #000;
    background-color: #aaa;
}
p.description {
    margin-top: 1em;
}
</style>
