import Vue from 'vue'
import { mount } from 'vue-test-utils'
import Index from '@/components/Index'
import store from '@/store'

describe('Index.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(Index, {store})
    expect(wrapper.find('h1').text()).toEqual('Playful Vertex')
  })
})
