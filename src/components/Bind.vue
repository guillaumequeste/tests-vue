<template>
  <div id="bind">
  <span v-bind:title="message">
    Passez votre souris sur moi pendant quelques secondes
    pour voir mon titre lié dynamiquement !
  </span>
</div>
</template>

<script>
export default {
  name: 'Bind',
  data: function() {
    return { message: 'Vous avez affiché cette page le ' + new Date().toLocaleString()}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bind {
    background-color: orange;
}
</style>
