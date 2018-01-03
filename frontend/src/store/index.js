import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function uuidv4 () {
  // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g, function (c) {
        let r = Math.random() * 16 | 0
        let v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
}

export default new Vuex.Store({
  state: {
    objects: {}
  },
  mutations: {
    add_object (state, object) {
      Vue.set(state.objects, uuidv4(), {
        ...object,
        created_at: new Date(),
        updated_at: null
      })
    },
    remove_object (state, id) {
      Vue.delete(state.objects, id)
    }
  },
  getters: {
    objects: state => state.objects
  }
})
