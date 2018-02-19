import store from '@/store/index'

describe('store.js', () => {
  it('starts up with no objects', () => {
    expect(store.state.objects).toEqual({})
  })
  it('adds new item to cache', () => {
    store.commit('addObject', {content: 'Hello World'})
    for (const key in store.state.objects) {
      const object = store.getters.objects[key];
      expect(object.content).toEqual('Hello World')
      expect(object.updated_at).toBeNull()
      expect(object.created_at).toBeInstanceOf(Date)
    }
  })
  it('removes item from cache', () => {
    store.commit('addObject', {content: 'Hello World 1'})
    store.commit('addObject', {content: 'Hello World 2'})
    for (const key in store.state.objects) {
      store.commit('removeObject', key)
      const object = store.getters.objects[key];
      expect(object).toBeUndefined()
    }
  })
  it('adds instance', () => {
    store.commit('addInstances', [{
      data () {
        return {
          name: 'Test'
        }
      },
      id: '123'
    }])
    expect(store.getters.allInstances[0]).toEqual({
      name: 'Test',
      id: '123'
    })
  })
  describe('fetchInstances action', () => {
    it('calls firestore and addInstances', () => {
      // Prepare the firestore mock:
      const onSnapshot = jest.fn()
      const collection = jest.fn().mockReturnValue({
        onSnapshot
      })
      store._firestore = {
        collection
      }
      store.dispatch('fetchInstances')
      expect(onSnapshot.mock.calls).toHaveLength(1)
      const onSnapshotCallback = onSnapshot.mock.calls[0][0]
      // Simulate the onSnapshot callback firing
      onSnapshotCallback([{
        id: "myid",
        data() {
          return {
            "title": "mytitle"
          }
        }
      }])
      const instances = store.state.instances
      // Check the object from the listener was added
      expect(instances).toHaveLength(1)
      expect(instances[0].id).toBe("myid")
      expect(instances[0].title).toBe("mytitle")
    })
  })
})
