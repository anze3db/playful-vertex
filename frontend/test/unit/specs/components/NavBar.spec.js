import Vue from 'vue'
import { mount } from 'vue-test-utils'
import NavBar from '@/components/NavBar'
import store from '@/store'

describe('NavBar.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(NavBar, {store})
    expect(wrapper.find('[name=title]').text()).toEqual("Playful Vertex")
  })
})
