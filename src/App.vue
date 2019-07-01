<template>
  <div id="app">
    <h1>路由</h1>
    <ul>
      <li v-for="item in links" :key="item.id">
        <router-link :to="item.path">{{item.title}}</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {

  name: 'App',
    data () {
      return {
        msg: '',
        links: []
      }
  },

  methods: {

    initMenu: function () {
      const vm = this;
     this.$axios.get('static/mock/list.json')
     .then(function (res) {
        console.log(res);
        vm.links = res.data.menus;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      }); 
    }

  },
  mounted: function () {
    this.initMenu()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
