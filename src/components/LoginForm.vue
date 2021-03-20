<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <br>
    <form>
    <input class='form' type="text" placeholder="enter your email" id="email" v-model="email" required><br><br>
    <input class='form' type="text" placeholder="enter your password" id="password" v-model="password" required><br><br>
    <button type="submit" id="btn-login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  props: {
    msg: String
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.form {
  border-radius: 10px;
  border: 2px solid #73AD21;
  padding: 10px;
  width: 200px;
  height: 15px;
}
button {
  background-color: #3498db;
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
}
</style>
