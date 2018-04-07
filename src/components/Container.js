import React from 'react'
import styled from 'styled-components'
import { screen } from '../config'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  max-width: 1200px;

  @media ${screen.mediumUp} {
    padding-left: 6.5rem;
    ${props => !props.offCenter && 'padding-right: 6.5rem;'} ${props =>
        props.bottomSpacing && 'margin-bottom: 2rem;'};
  }
`

export default Container
