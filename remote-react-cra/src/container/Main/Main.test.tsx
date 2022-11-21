import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Main, { MainProps } from './Main'
import { stackList } from './Main.stub'

const defaultPropsMock: MainProps = {
  list: stackList,
  isVisible: true
}

const createWrapper = (props: MainProps = defaultPropsMock) =>
  render(<Main {...props} />)

describe('Main Container', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  describe('Rendering', () => {
    it('should match snapshot', () => {
      const wrapper = createWrapper()
      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Interaction', () => {
    it('hide stack list on click', () => {
      const wrapper = createWrapper()
      const list = wrapper.baseElement.querySelector('ul')!
      const buttonEl = wrapper.getByText('Hide Stack')
      fireEvent.click(buttonEl)
      expect(list).not.toBeInTheDocument()
    })
  })
})
