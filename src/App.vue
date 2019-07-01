<template>
  <div id="app">
    <h1>路由</h1>
    <ul>
      <li><router-link to="/todo">TodoList</router-link></li>
      <li><router-link to="/life">lifeCycle</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
