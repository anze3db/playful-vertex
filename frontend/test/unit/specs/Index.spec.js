import Vue from 'vue'
import { mount } from 'vue-test-utils'
import Index from '@/components/Index'

describe('Index.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Index)
    expect(wrapper.find('h1').text()).toEqual('Hello')
  })
})
