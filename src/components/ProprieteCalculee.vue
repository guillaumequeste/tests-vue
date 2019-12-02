<template>
  <div id="proprieteCalculee">
    <p>Message original : "{{ message }}"</p>
    <p>Message inversé calculé : "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'ProprieteCalculee',
  data: function() {
    return { message: 'Bonjour'}
  },
  computed: {
    // un accesseur (getter) calculé
    reversedMessage: function () {
      // `this` pointe sur l'instance vm
      return this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#proprieteCalculee {
    background-color: orange;
}
</style>
