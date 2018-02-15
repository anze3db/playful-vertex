import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectMapper from '@/components/ObjectMapper'
import store from '@/store'
import sinon from 'sinon'

describe('ObjectMapper.vue', () => {
  beforeEach(() => {
    store.state.objects = {
      abc: {
        content: "my custom content"
      }
    }
  })
  it('has a v-select element', () => {
    const wrapper = mount(ObjectMapper, {store})
    let select = wrapper.findAll('v-select')
    expect(select.length).toEqual(1)
  })

  it('v-select calls add', () => {
    const wrapper = mount(ObjectMapper, {store})
    const stub = sinon.stub()
    let select = wrapper.find('v-select')
    wrapper.setMethods({ add: stub })
    select.trigger('change')
    expect(stub.called).toBe(true)
  })

  it('add does something', () => {
    const wrapper = mount(ObjectMapper, {store})
    wrapper.vm.add()
  })
})
