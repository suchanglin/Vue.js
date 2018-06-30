<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <hr>
    <h1>{{$store.state.count}}</h1>
    <div>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </div>
  </div>
</template>

<script>
// import store from '../store/store'  // 因为在跟组件即mai中注册了，所有子组件都可以使用
import {mapMutations, mapActions} from 'vuex'

export default {
  name: 'Count',
  data () {
    return {
      msg: 'Welcome to guangzhou!'
    }
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
.hello hr{background-color: red;height: 2px;border: none;width: 70%;}
</style>
