import * as React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'
import Title from '../../src/components/Title'

describe('<Title />', () => {
  it('should have a h1 element', () => {
    const wrapper = shallow(<Title />)
    expect(wrapper.find('h1')).to.have.length(1)
  })

  it('should have a title prop', () => {
    const wrapper = mount(<Title title="Hello World"/>)
    expect(wrapper.props().title).to.equal('Hello World')
  })

  it('should have default title prop', () => {
    const wrapper = mount(<Title />)
    expect(wrapper.props().title).to.equal('Default Title')
  })
})
