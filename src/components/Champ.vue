<template>
  <div id="champ">
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>
export default {
  name: 'Champ',
  data: function() {
    return { message: 'Je suis à la montagne'}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
