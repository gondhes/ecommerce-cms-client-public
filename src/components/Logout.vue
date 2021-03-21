<template>
  <div id="nav">
    <a href="/" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Logout',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
  
</style>