import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectList from '@/components/ObjectList'
import store from '@/store'

describe('ObjectList.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(ObjectList, {store})
    expect(wrapper.contains('v-list')).toEqual(true)
  })
  it('lists all the items in the store', () => {
    store.commit('add_object', {content: 'first'})
    store.commit('add_object', {content: 'second'})
    const wrapper = mount(ObjectList, {store})
    expect(wrapper.contains('v-list')).toEqual(true)
    const items = wrapper.findAll('v-list-tile')
    expect(items.length).toEqual(2)
    expect(items.at(0).find('v-list-tile-title').text()).toEqual('first')
    expect(items.at(1).find('v-list-tile-title').text()).toEqual('second')
  })
})
