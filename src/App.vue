<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapGetters(['checkAuth']),
    ...mapActions(['login'])
  },
  created(){
    // check if user is logged in
    console.log(this.checkAuth())
    if(this.checkAuth()){
      this.login();
      console.log('from app.js')
    } else {
      console.log('checkauth is false')
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
