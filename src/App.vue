<script setup>
  import {reactive} from "vue";

  const a = reactive({'aa' : 1, 'bb':123});

</script>

<template>
  <input type="text" v-model="name"/>
  <p>{{a}}</p>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
