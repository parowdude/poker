<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/card.png" style="width:200px">
    <PokerGame/>
  </div>
</template>

<script>
import PokerGame from './components/PokerGame.vue'

export default {
  name: 'App',
  components:
  {
    PokerGame
  }
}
</script>

<style>
#app
{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
