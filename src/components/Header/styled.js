import styled from 'styled-components'
import Container from '../Container'
import { colors, screen } from '../../config'

export const HeaderContainer = Container.withComponent('header').extend`
  padding-top: 4rem;
  padding-bottom: 4rem;
`

export const Logo = styled.div`
  text-align: center;
`

export const Tagline = styled.h1`
  padding-top: 2rem;
  color: ${colors.secondary};
  font-size: 1.5rem;
  text-align: center;

  @media ${screen.mediumUp} {
    font-size: 2rem;
  }
`