<template>
  <div class="home">
    <img alt="Tuku logo" src="../assets/logo.png">
    <LoginForm msg="TUKU CMS APP"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    LoginForm
  }
}
</script>
