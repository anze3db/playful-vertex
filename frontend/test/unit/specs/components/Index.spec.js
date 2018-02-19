import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import Index from '@/components/Index'
import InstanceList from '@/components/instance/InstanceList'
import NavBar from '@/components/NavBar'
import store from '@/store'

describe('Index.vue', () => {

  it('should render all needed components', () => {
    const wrapper = shallow(Index, {store})
    const components = [
      NavBar,
      InstanceList,
    ]
    for (let component of components) {
      expect(wrapper.contains(component)).toBeTruthy()
    }

  })
})
