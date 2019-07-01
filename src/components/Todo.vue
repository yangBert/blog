<template>
  <div>
    <input type="text" v-model="msg" />
    <button @click="handleClick">提交</button>
    <ol>
      <Li v-for="item in list" :key="item.id" :item="item" @del="delItem"></Li>
    </ol>
  </div>
</template>

<script>
import Li from './Li.vue'
export default {
  name: 'Todo',
  components: {
    Li
  },
  data () {
    return {
      msg: '',
      list: []
    }
  },
  methods: {
    handleClick: function () {
      this.list.push({
        id: this.list.length,
        text: this.msg
      })
      this.msg = ''
    },
    delItem: function (id) {
      let list = this.list
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
          list.splice(i, 1)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
