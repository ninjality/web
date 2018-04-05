import styled from 'styled-components'
import { colors } from '../config'

export const Alert = styled.div`
  padding: 1rem 1.5rem;
  text-align: center;
  color: #fff;
  background-color: ${colors.secondary};
`

export const SuccessAlert = Alert.extend`
  background-color: ${colors.green};
`
