import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectForm from '@/components/ObjectForm'
import store from '@/store'

describe('Form.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(ObjectForm)
    expect(wrapper.contains('[label=Title]')).toEqual(true)
    expect(wrapper.contains('[label=Description]')).toEqual(true)
  })
  it('has submitted method', () => {
    expect(typeof ObjectForm.methods.submit).toEqual('function')
  })
  it('clears state after submit', () => {
    const wrapper = mount(ObjectForm, {store})
    const button = wrapper.find('[name="submit"]')
    wrapper.setData({ title: 'Hello', description: 'World' })
    button.trigger('click')
    expect(wrapper.vm.title).toEqual('')
    expect(wrapper.vm.description).toEqual('')
    expect(Object.keys(store.state.objects).length).toEqual(1)
  })
  it('does not clear when no title', () => {
    const wrapper = mount(ObjectForm)
    const button = wrapper.find('[name=submit]')
    wrapper.setData({ title: '', description: 'World' })
    button.trigger('click')
    expect(wrapper.vm.title).toEqual('')
    expect(wrapper.vm.description).toEqual('World')
  })
})
