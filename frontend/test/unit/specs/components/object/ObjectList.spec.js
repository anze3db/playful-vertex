import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectList from '@/components/object/ObjectList'
import store from '@/store'

describe('ObjectList.vue', () => {
  beforeEach(() => {
    store.state.objects = {}
  })
  it('lists all the items in the store', (done) => {
    const wrapper = mount(ObjectList, {store})
    let items = wrapper.findAll('[label=content]')
    expect(items.length).toEqual(0)
    store.commit('addObject', {content: 'first'})
    store.commit('addObject', {content: 'second'})
    Vue.nextTick(() => {
      items = wrapper.findAll('[label=content]')
      expect(items.length).toEqual(2)
      const results = ['first', 'second']
      for (let i in results) {
        expect(items.at(i).text()).toEqual(results[i])
      }
      done()
    })
  })

  it('removes deleted items', (done) => {
    store.commit('addObject', {content: 'first'})
    store.commit('addObject', {content: 'second'})
    const wrapper = mount(ObjectList, {store})
    const key = Object.keys(store.state.objects)[0]
    const objectContent = store.state.objects[key].content
    wrapper.find('[label=delete]').trigger('click')
    Vue.nextTick(() => {
      const items = wrapper.findAll('[label=content]')
      expect(items.length).toBe(1)
      done()
    })
  })
})
