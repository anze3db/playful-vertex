import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectList from '@/components/ObjectList'
import store from '@/store'

describe('ObjectList.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(ObjectList, {store})
    expect(wrapper.is('ul')).toEqual(true)
  })
  it('lists all the items in the store', () => {
    store.commit('add_object', {description: 'first', title: 'first'})
    store.commit('add_object', {description: 'second', title: 'second'})
    const wrapper = mount(ObjectList, {store})
    expect(wrapper.is('ul')).toEqual(true)
    expect(wrapper.findAll('li').length).toEqual(2)
  })
})
