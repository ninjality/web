import styled from 'styled-components'
import { colors, screen } from '../../config'

export const HeaderContainer = styled.header`
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

  @media ${screen.mediumUp} {
    font-size: 2rem;
  }
`