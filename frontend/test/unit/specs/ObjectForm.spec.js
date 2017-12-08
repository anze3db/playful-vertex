import Vue from 'vue'
import { mount } from 'vue-test-utils'
import ObjectForm from '@/components/ObjectForm'

describe('Form.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(ObjectForm)
    expect(wrapper.contains('input')).toEqual(true)
    expect(wrapper.contains('textarea')).toEqual(true)
  })
  it('has submitted method', () => {
    expect(typeof ObjectForm.methods.submit).toEqual('function')
  })
  it('clears state after submit', () => {
    const wrapper = mount(ObjectForm)
    const button = wrapper.find('button')
    wrapper.setData({ title: 'Hello', description: 'World' })
    button.trigger('click')
    expect(wrapper.vm.title).toEqual('')
    expect(wrapper.vm.description).toEqual('')
  })
  it('does not clear when no title', () => {
    const wrapper = mount(ObjectForm)
    const button = wrapper.find('button')
    wrapper.setData({ title: '', description: 'World' })
    button.trigger('click')
    expect(wrapper.vm.title).toEqual('')
    expect(wrapper.vm.description).toEqual('World')
  })
})
