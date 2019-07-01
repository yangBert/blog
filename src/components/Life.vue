<template>
  <div>
    {{count}}
    <button @click="changeCount">update</button>
    <button @click="changeDestroy">destory</button>
  </div>
</template>

<script>
export default {
  name: 'Life',
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    changeCount: function () {
      this.count++
    },
    changeDestroy: function () {
      this.$destroy()
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate')
  },
  created: function () {
    console.log('created')
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeMount: function () {
    console.log('beforeMount')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('updated')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy')
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
