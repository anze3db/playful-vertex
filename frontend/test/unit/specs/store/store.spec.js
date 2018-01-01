import store from '@/store/index'

describe('store.js', () => {
  it('starts up with no objects', () => {
    expect(store.state.objects).toEqual({})
  })
  it('adds new item to cache', () => {
    store.commit('add_object', {title: 'Hello', description: 'World'})
    for (const key in store.state.objects) {
      const el = store.getters.objects[key];
      expect(el).toEqual({title: 'Hello', description: 'World'})
    }
  })
})
