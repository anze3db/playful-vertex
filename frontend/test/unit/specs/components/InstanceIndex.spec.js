import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import Index from '@/components/InstanceIndex'
import ObjectList from '@/components/object/ObjectList'
import ObjectForm from '@/components/object/ObjectForm'
import NavBar from '@/components/NavBar'
import store from '@/store'

describe('InstanceIndex.vue', () => {

  it('should render all needed components', () => {
    const wrapper = shallow(Index, {store})
    const components = [
      NavBar,
      ObjectForm,
      ObjectList
    ]
    for (let component of components) {
      expect(wrapper.contains(component)).toBeTruthy()
    }

  })
})
