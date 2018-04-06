import React from 'react'
import { Button, Icon } from './styled'

export default ({ children, ...otherProps }) => (
  <Button {...otherProps}>
    <Icon />
    <span>{children}</span>
  </Button>
)
