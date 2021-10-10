import { createStore } from 'vuex'
const MutationTypes = {
  GET_DATA: 'getData'
}

export default createStore({
  state: {
    data: []
  },
  mutations: {
    [MutationTypes.GET_DATA](state, payload) {
      console.log(payload)
      state.data = payload
    }
  },
  actions: {

  },
  getters: {
    data: state => state.data
  },
})
