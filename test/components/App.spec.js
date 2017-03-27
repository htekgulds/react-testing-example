import * as React from 'react'
import {mount, shallow} from 'enzyme'
import {expect} from 'chai'
import App from '../../src/components/App'
import Title from '../../src/components/Title'

describe('<App />', () => {
  it('should have a div with class: app', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div.app')).to.have.length(1)
  })

  it('should have a Title component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Title)).to.have.length(1)
  })
})
