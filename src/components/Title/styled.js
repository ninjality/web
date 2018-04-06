import styled from 'styled-components'
import { colors, screen } from '../../config'

export const TitleContainer = styled.h1`
  position: relative;
  margin-top: -2rem;
  margin-bottom: 2rem;
  color: ${colors.secondary};
  font-size: 1.5rem;
  text-align: center;

  @media ${screen.mediumUp} {
    font-size: 2rem;
  }
`
