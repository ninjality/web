import React, { Component } from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Title from '../components/Title'
import {
  ArticleList,
  ArticleItem,
  ArticleLink,
  ArticleMeta,
  ArticleExcerpt,
} from '../components/ArticleList'

class BlogIndex extends Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title='Blog' />
        <Container>
          <Title hasBackButton>Our Thoughts</Title>
          <ArticleList>
            {posts.map(post => {
              if (post.node.path !== '/404') {
                const title = get(post, 'node.frontmatter.title') || post.node.path
                const { categories, author, date } = post.node.frontmatter
                return (
                  <ArticleItem key={post.node.frontmatter.path}>
                    <ArticleLink to={post.node.frontmatter.path} >
                      {post.node.frontmatter.title}
                    </ArticleLink>
                    <ArticleMeta>
                      {categories} by {author} on {date}
                    </ArticleMeta>
                    <ArticleExcerpt
                      dangerouslySetInnerHTML={{ __html: post.node.frontmatter.excerpt }}
                    />
                  </ArticleItem>
                )
              }
            })}
          </ArticleList>
        </Container>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title,
            author,
            categories,
            excerpt
          }
        }
      }
    }
  }
`
