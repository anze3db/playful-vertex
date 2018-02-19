import Vue from 'vue'
import { mount, createLocalVue } from 'vue-test-utils'
import InstanceList from '@/components/instance/InstanceList'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('InstanceList.vue', () => {
  it('should call promise callback on destroy', (done) => {
    const mock = jest.fn()
    const destroyMock = jest.fn()
    mock.mockReturnValue(Promise.resolve(destroyMock))
    const getters = {
      allInstances: () => []
    }
    const actions = {
      fetchInstances: mock
    }
    const store = new Vuex.Store({
      actions,
      getters
    })
    const wrapper = mount(InstanceList, {
      store,
      localVue
    })
    expect(mock.mock.calls).toHaveLength(1)
    expect(destroyMock.mock.calls).toHaveLength(0)
    Vue.nextTick(() => {
      wrapper.vm.$destroy()
      expect(mock.mock.calls).toHaveLength(1)
      expect(destroyMock.mock.calls).toHaveLength(1)
      done()
    })


  })
})
