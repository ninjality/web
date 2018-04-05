import styled from 'styled-components'
import { screen, colors } from '../../config'

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const Item = styled.li`
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media ${screen.mediumUp} {
    width: 50%;
  }
`

export const Anchor = styled.a`
  display: flex;
  color: ${colors.secondary};
  transition: all 200ms ease;
  ${props => props.disabled && 'pointer-events: disabled;'}

  &:hover,
  &:focus {
    color: ${props => props.disabled ? colors.secondary : colors.primary};
    text-decoration: none;

    @media ${screen.mediumUp} {
      ${props => !props.disabled && 'padding-left: 0.5rem'};
    }
  }
`

export const Icon = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  border-radius: 10%;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
`

export const Name = styled.p`
  padding-bottom: 1rem;
  font-size: 1.2rem;
`

export const Description = styled.p`
  max-width: 320px;
`