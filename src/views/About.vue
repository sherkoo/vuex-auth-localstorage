<template>
  <div class="about">
    <div v-if="$store.state.auth">
      you are logged in <strong>{{ $store.state.user.name }}</strong> !!
      lesson <strong>{{ $store.state.user.lesson }}</strong>
      email <strong>{{ $store.state.user.user }}</strong>
    </div>
    <div v-else>
      <h3>you are not logged in</h3>
      <button @click="$store.dispatch('login')">Log in</button>
    </div>
    <h1>This is an about page</h1>
    <div v-if="$store.state.auth">
      you are logged in!!!
      <button @click="$store.dispatch('logout')">Logout</button>
    </div>
    <div v-else>
      <h3>you are not logged in</h3>
      <button @click="$store.dispatch('login')">Log in</button>
    </div>
    <h3>{{ $store.state.counter }}</h3>
  </div>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex';

export default {
  //
}
</script>
