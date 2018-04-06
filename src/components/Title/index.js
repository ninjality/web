import React from 'react'
import Back from '../Back'
import { TitleContainer } from './styled'

export default ({ hasBackButton, children }) => (
  <TitleContainer>
    {hasBackButton && <Back to='/'>Back home</Back>}
    <span>{children}</span>
  </TitleContainer>
)
