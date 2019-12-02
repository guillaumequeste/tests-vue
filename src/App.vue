<template>
  <div id="app">
    <Header />
    <HelloWorld :msg="message"/>
    <input type="text" v-model="message" />
    <button @click="alertMessage">Alert</button>
    <Bind />
    <Conditions />
    <MessageRetourne />
    <Champ />
    <ProprieteCalculee />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'
import Bind from './components/Bind.vue'
import Conditions from './components/Conditions.vue'
import MessageRetourne from './components/MessageRetourne.vue'
import Champ from './components/Champ.vue'
import ProprieteCalculee from './components/ProprieteCalculee.vue'

export default {
  name: 'app',
  components: {
    Header,
    HelloWorld,
    Bind,
    Conditions,
    MessageRetourne,
    Champ,
    ProprieteCalculee
  },
  data(){
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    alertMessage(){
      alert(this.message)
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50
}
</style>
