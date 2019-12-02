<template>
  <div id="conditions">
    <p v-if="seen">Maintenant vous me voyez</p>
  </div>
</template>

<script>
export default {
  name: 'Conditions',
  data: function() {
    return { seen: true}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
