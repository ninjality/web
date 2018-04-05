import styled from 'styled-components'
import Container from '../Container'
import { colors, screen } from '../../config'

export const HeaderContainer = Container.withComponent('header').extend`
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const Logo = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

export const Tagline = styled.h1`
  color: ${colors.secondary};
  font-size: 1.5rem;
  text-align: center;

  ${props => props.secondary && `
    padding-top: 2rem;
    border-top: 1px solid ${colors.lightGray};
  `}

  @media ${screen.mediumUp} {
    font-size: 2rem;
  }
`