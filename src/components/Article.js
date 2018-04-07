import styled from 'styled-components'
import Link from 'gatsby-link'
import { Archive } from 'react-feather'
import { colors } from '../config'

export const Meta = styled.p`
  color ${colors.gray};
  text-align: center;
`

export const OtherArticlesLink = styled(Link)`
  color: ${colors.secondary};
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${colors.primary};
    text-decoration: none;
  }
`

export const OtherArticlesIcon = styled(Archive)`
  position: relative;
  top: 5px;
  padding-right: 5px;
`

export const Content = styled.div`
  padding-top: 2rem;
  font-size: 1.2rem;
  line-height: 1.5;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 2rem;
    font-weight: 800;
    line-height: 1.1;

    & strong {
      display: inline-block;
      border-bottom: 2px solid;
    }
  }

  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }

  address {
    margin-bottom: 1rem;
  }

  ol,
  ul,
  dl {
    margin-bottom: 2rem;
    margin-left: 2rem;
    list-style: inherit;
  }

  li {
    margin-bottom: 0.5rem;
  }

  dd {
    margin-bottom: 0.5rem;
  }

  blockquote {
    margin: 0 0 1rem;
    padding-left: 1rem;
    border-left: 4px solid ${colors.lightGray};
  }

  hr {
    margin-bottom: 2rem;
    border: none;
    border-bottom: 1px solid ${colors.lightGray};
  }

  pre {
    margin-bottom: 2rem;
  }

  figure {
    margin: 0 0 1rem;
  }
`
