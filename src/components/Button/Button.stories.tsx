import React from 'react'
import { Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'Slack List'
}

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'onClick' } }
}
