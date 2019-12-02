<template>
  <div id="messageRetourne">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Message retourné</button>
  </div>
</template>

<script>
export default {
  name: 'MessageRetourne',
  data: function() {
    return { message: 'Hello Vue JS !'}
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#messageRetourne {
    background-color: orange;
}
</style>
