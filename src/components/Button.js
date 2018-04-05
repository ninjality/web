import styled from 'styled-components'
import { colors } from '../config'

export const Button = styled.button`
  display: inline-block;
  padding: 1rem 1.5rem;
  border: 2px solid transparent;
  color: #fff;
  background-color: ${colors.secondary};
  font-size: 1.2rem;
  line-height: 1;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${colors.secondary};
    background-color: #fff;
    border: 2px solid ${colors.secondary};
  }
`
