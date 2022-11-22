/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Story } from '@storybook/react'
import Main, { MainProps } from './Main'
import { stackList } from './Main.stub'

const Template: Story<MainProps> = (args: any) => {
  return <Main {...args} />
}

export const Default = Template.bind({})
Default.args = {
  list: stackList,
  isVisible: true
}

export default {
  title: 'Container/Main',
  component: Main
}
