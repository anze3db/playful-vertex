import Vue from 'vue'
import { shallow } from 'vue-test-utils'
import Index from '@/components/Index'
import ObjectList from '@/components/ObjectList'
import ObjectForm from '@/components/ObjectForm'
import store from '@/store'

describe('Index.vue', () => {

  it('should render all needed components', () => {
    const wrapper = shallow(Index, {store})
    const components = [
      ObjectForm,
      ObjectList
    ]
    for (let component of components) {
      expect(wrapper.contains(component)).toBeTruthy()
    }

  })
})
