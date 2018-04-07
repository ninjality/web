import styled from 'styled-components'
import Link from 'gatsby-link'
import Container from '../Container'
import { colors, screen } from '../../config'

export const FooterContainer = Container.withComponent('footer').extend`
  flex-direction: row;
  padding-top: 4rem;

  @media ${screen.mediumUp} {
    width: 100%;
  }
`

export const Social = styled.ul`
  display: flex;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  @media ${screen.mediumUp} {
    margin-left: 0;
    margin-right: 0;
    width: 50%;
  }
`

export const SocialItem = styled.li`
  &:not(:last-child) {
    padding-right: 1rem;

    @media ${screen.smallUp} {
      padding-right: 1.5rem;
    }
  }
`

export const SocialAnchor = styled.a`
  color: ${colors.secondary};
  transition: all 200ms ease;

  &:hover,
  &:focus {
    color: ${colors.primary};
  }
`

export const SocialLink = SocialAnchor.withComponent(Link)

export const Company = styled.div`
  margin-top: -13px;
  margin-left: auto;
  width: 23%;
  text-align: right;

  svg {
    @media ${screen.xsmall} {
      width: 50px;
    }
  }
`
