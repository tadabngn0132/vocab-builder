<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <RouterLink to="/words" exact class="item">
            <i class="comment outline icon"></i> Words
          </RouterLink>
          <RouterLink to="/words/new" exact class="item">
            <i class="plus circle icon"></i> New
          </RouterLink>
          <RouterLink to="/test" exact class="item">
            <i class="graduation cap icon"></i> Test
          </RouterLink>
          <RouterLink to="/tadabngn0132" exact class="item">
            <i class=" circle user icon"></i> tadabngn0132
          </RouterLink>
          <RouterLink to="/register" exact class="item">Register</RouterLink>
          <RouterLink to="/login" exact class="item">Login</RouterLink>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <flash-message class="myFlash"></flash-message>
      <div class="ui one column grid">
        <div class="column">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#app > div.navbar {
  margin-bottom: 1.5em;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>
