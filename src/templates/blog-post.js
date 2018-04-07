import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Title from '../components/Title'
import {
  Meta,
  Content,
  OtherArticlesLink,
  OtherArticlesIcon,
} from '../components/Article'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { html, frontmatter } = post
    const { title, excerpt, author, categories, date } = frontmatter

    return (
      <Container>
        <Helmet title={title}>
          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={excerpt} />
          <meta name="description" content={excerpt} />
        </Helmet>
        <Title>{title}</Title>
        <Meta>
          {categories} by {author} on {date}
        </Meta>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        <div>
          <OtherArticlesLink to="/blog">
            <OtherArticlesIcon />
            <span>Read more articles</span>
          </OtherArticlesLink>
        </div>
      </Container>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        excerpt
        author
        categories
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
