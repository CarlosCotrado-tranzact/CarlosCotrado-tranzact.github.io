/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react'
import { render } from '@testing-library/react'
import Button, { ButtonProps } from './Button'

const defaultPropsMock: ButtonProps = {
  onClick: jest.fn(),
  children: 'Hello'
}

const createWrapper = (props: ButtonProps = defaultPropsMock) =>
  render(<Button {...props} />)

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should match snapshot', () => {
      const wrapper = createWrapper()
      expect(wrapper).toMatchSnapshot()
    })
  })
})
