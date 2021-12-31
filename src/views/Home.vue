<template>
  <div class="home">
    {{ $store.getters.checkAuth }}
    <div v-if="$store.state.auth">
      you are logged in <strong>{{ $store.state.user.name }}</strong> !!
      lesson <strong>{{ $store.state.user.lesson }}</strong>
      email <strong>{{ $store.state.user.user }}</strong>
    </div>
    <div v-else>
      <h3>you are not logged in</h3>
      <button @click="$store.dispatch('login')">Log in</button>
    </div>
    home page
    <br>
    {{ $store.state.counter }}
    <button @click="$store.dispatch('increaseCounter')">Increase</button> 
    <button @click="$store.dispatch('decreaseCounter')">Decrease</button>   
    <div>
      {{ $store.state.counter }} = {{ $store.getters.counterSquared }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>
