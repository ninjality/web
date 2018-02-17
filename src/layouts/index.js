import React, { Component } from 'react'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'
import 'normalize.css'
import 'minireset.css'
import Head from '../components/Head'
import Header from '../components/Header'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Questrial');

  :root {
    font-family: 'Questrial', sans-serif;
  }

  a {
    color: #850009;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

class Template extends Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Head />
        <Header />
        {children()}
      </div>
    )
  }
}

export default Template
