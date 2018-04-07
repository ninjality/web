import styled from 'styled-components'
import { colors } from '../config'

export const Alert = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  color: #fff;
  background-color: ${colors.secondary};

  a {
    color: #fff;
    text-decoration: underline;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`

export const SuccessAlert = Alert.extend`
  background-color: ${colors.green};
`
