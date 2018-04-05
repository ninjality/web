import styled from 'styled-components'
import { colors } from '../config'

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid ${colors.gray};
  font-size: 1.2rem;
  transition: border-color 0.2s ease;

  &:hover,
  &:focus {
    border-color: ${colors.secondary};
    outline: none;
  }

  ::placeholder {
    color: ${colors.gray};
  }
`

export const Textarea = Input.withComponent('textarea').extend`
  resize: vertical;
`
