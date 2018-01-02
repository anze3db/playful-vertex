import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectForm from '@/components/ObjectForm'
import store from '@/store'

describe('Form.vue', () => {
  beforeEach(() => {
    store.state.objects = {}
  })
  it('should render correct contents', () => {
    const wrapper = mount(ObjectForm)
    expect(wrapper.contains('[label=Content]')).toEqual(true)
  })
  it('has submitted method', () => {
    expect(typeof ObjectForm.methods.submit).toEqual('function')
  })
  it('clears state after submit', () => {
    const wrapper = mount(ObjectForm, {store})
    const button = wrapper.find('[name="submit"]')
    wrapper.setData({content: 'Hello'})
    button.trigger('click')
    expect(wrapper.vm.content).toEqual('')
    expect(Object.keys(store.state.objects).length).toEqual(1)
  })
  it('does not clear when no content', () => {
    const wrapper = mount(ObjectForm)
    const button = wrapper.find('[name=submit]')
    wrapper.setData({ content: ''})
    button.trigger('click')
    expect(wrapper.vm.content).toEqual('')
    expect(Object.keys(store.state.objects).length).toEqual(0)
  })
})
