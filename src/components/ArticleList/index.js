import styled from 'styled-components'
import Link from 'gatsby-link'
import { colors } from '../../config'

export const ArticleList = styled.ul`
  list-style: none;
`

export const ArticleItem = styled.li`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ArticleLink = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  color: ${colors.secondary};
  font-size: 1.5rem;
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${colors.primary};
    text-decoration: none;
  }
`

export const ArticleMeta = styled.p`
  margin-bottom: 0.5rem;
  color: ${colors.gray};
`

export const ArticleExcerpt = styled.p`
  font-size: 1.2rem;
`
