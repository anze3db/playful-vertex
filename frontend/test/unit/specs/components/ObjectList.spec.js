import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectList from '@/components/ObjectList'
import store from '@/store'

describe('ObjectList.vue', () => {
  it('lists all the items in the store', () => {
    store.commit('add_object', {content: 'first'})
    store.commit('add_object', {content: 'second'})
    const wrapper = mount(ObjectList, {store})
    const items = wrapper.findAll('[label=content]')
    expect(items.length).toEqual(2)
    const results = ['first', 'second']
    for (let i in results) {
      expect(items.at(i).text()).toEqual(results[i])
    }
  })
})
