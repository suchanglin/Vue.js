import Vue from 'vue'
import Vuex from 'vuex'
import { ADD } from './mutationtype.js'
Vue.use(Vuex)
// 状态，不能直接改变
const state = {
  count: 1
}
// 只能通过提交mutations改变状态
const mutations = {
  [ADD] (state, n) {   // 方法变换
    state.count += n
  },
  reduce (state, a) {
    state.count -= a
  }
}
// const getters = {
//   count (state) {
//     return (state.count += 100)
//   }
// }
const actions = {
  addAction (context) {
    context.commit('add', 10)
  },
  reduceAction ({commit}) {
    // commit('reduce', 1000)
    setInterval(function  () {  // 异步函数
      commit('reduce',1000)
    },1000)
  }
}
//  实际上是state：state,mutations:mutations,组件可以以$store.commit()使用
export default new Vuex.Store({
  state,
  mutations,
  // getters,
  actions
})
