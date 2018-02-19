import Vue from 'vue'
import Vuex from 'vuex'
import firestore from '@/firebase/index'

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

const store = new Vuex.Store({
  state: {
    objects: {},
    instances: []
  },
  mutations: {
    addObject (state, object) {
      Vue.set(state.objects, uuidv4(), {
        ...object,
        created_at: new Date(),
        updated_at: null
      })
    },
    removeObject (state, id) {
      Vue.delete(state.objects, id)
    },
    addInstances (state, instances) {
      const lst = []
      instances.forEach((item) => {
        lst.push({
          id: item.id,
          ...item.data()
        })
      })
      state.instances = lst
    }
  },
  actions: {
    fetchInstances ({ commit }) {
      return this._firestore.collection('instances').onSnapshot((lst) => {
        commit('addInstances', lst)
      }, console.error)
    }
  },
  getters: {
    objects: state => state.objects,
    allInstances: state => state.instances
  }
})
// Inject _firestore into the store, this makes unit testing actions on firestore connections much easier
store._firestore = firestore
export default store
