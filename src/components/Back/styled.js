import styled from 'styled-components'
import Link from 'gatsby-link'
import { ArrowLeft } from 'react-feather'
import { colors, screen } from '../../config'

export const Button = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0;
  color: ${colors.secondary};
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${colors.primary};
    text-decoration: none;
  }

  @media ${screen.smallUp} {
    position: absolute;
    top: -0.7rem;
    left: 0;
    display: inline-block;
    margin-bottom: 0;
  }

  @media ${screen.mediumUp} {
    top: 0;
  }
`

export const Icon = styled(ArrowLeft)`
  position: relative;
  top: 5px;
  padding-right: 5px;
`
