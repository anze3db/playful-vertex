import store from '@/store/index'

describe('store.js', () => {
  it('starts up with no objects', () => {
    expect(store.state.objects).toEqual({})
  })
  it('adds new item to cache', () => {
    store.commit('add_object', {content: 'Hello World'})
    for (const key in store.state.objects) {
      const object = store.getters.objects[key];
      expect(object.content).toEqual('Hello World')
      expect(object.updated_at).toBeNull()
      expect(object.created_at).toBeInstanceOf(Date)
    }
  })
})
