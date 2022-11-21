import React, { MouseEventHandler } from 'react'
import MuiButton from '@mui/material/Button'

export interface ButtonProps {
  children: React.ReactNode
  onClick: MouseEventHandler
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick
}) => {
  return (
    <MuiButton disabled={disabled} variant="contained" onClick={onClick}>
      {children}
    </MuiButton>
  )
}

export default Button
