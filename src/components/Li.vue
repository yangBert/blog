<template>
    <li @click="handleDel">{{item.title}}</li>
</template>

<script>
export default {
  name: 'Li',
  props: ['item'],
  methods: {
    handleDel: function () {
      const id = this.item.id
      this.$emit('del', id)
    }
  }
}
</script>

<style scoped>

</style>
